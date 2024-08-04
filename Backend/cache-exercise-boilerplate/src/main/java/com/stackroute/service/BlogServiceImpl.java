package com.stackroute.service;

import com.stackroute.domain.Blog;
import com.stackroute.repository.BlogRepository;

import org.hibernate.annotations.Cache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/*
    Add annotation to define cache configuration
*/

/**
 * @Service indicates annotated class is a service which hold business logic in the Service layer
 */

@Service
@EnableCaching
public class BlogServiceImpl implements BlogService {
    private BlogRepository blogRepository;

    public BlogServiceImpl() {
    }

    @Autowired
    public void setBlogRepository(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }


    /*
        Add annotation to update the value of the cache
    */

    /**
     * Implementation of saveBlog method
     */
    
    @Override
    @Caching(evict= {@CacheEvict (value="forAllBlogs",allEntries=true),
    		@CacheEvict(value="Blog", key= "#blog") })
    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }


    /*
        Add annotation to cache the result of this method
    */

    /**
     * Implementation of getAllBlogs method
     */
    @Override
    @Cacheable(value="forAllBlogs")
    public List<Blog> getAllBlogs() {
        return (List<Blog>) blogRepository.findAll();
    }

    /*
        Add annotation to cache the result of this method
    */

    /**
     * Implementation of getBlogById method
     */
    @Override
    @Cacheable(key="#blogId" , value="Blog")
    public Blog getBlogById(int blogId) {
        Blog retrievedBlog = null;
        retrievedBlog = blogRepository.findById(blogId).get();
        return retrievedBlog;
    }

    /*
        Add annotation to remove data from from the cache
    */

    /**
     * Implementation of deleteBlogById method
     */
    @Override
//    @Cache(value="newData")
    @CacheEvict(key="#blogId",value="Blog")
    public Blog deleteBlogById(int blogId) {
        Blog blog = null;
        Optional optional = blogRepository.findById(blogId);
        if (optional.isPresent()) {
            blog = blogRepository.findById(blogId).get();
            blogRepository.deleteById(blogId);
        }
        return blog;
    }

    /*
        Add annotation to update the cache with the result of the method execution
    */

    /**
     * Implementation of updateBlog method
     */
    @Override
    @CachePut(value="Blog")
    public Blog updateBlog(Blog blog) {
        Blog updatedBlog = null;
        Optional optional = blogRepository.findById(blog.getBlogId());
        if (optional.isPresent()) {
            Blog getBlog = blogRepository.findById(blog.getBlogId()).get();
            getBlog.setBlogContent(blog.getBlogContent());
            updatedBlog = saveBlog(getBlog);
        }
        return updatedBlog;

    }

}
