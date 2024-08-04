package com.stackroute.service;

import com.stackroute.domain.Blog;

import com.stackroute.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @Service indicates annotated class is a service which hold business logic in
 *          the Service layer
 */
@Service
public class BlogServiceImpl implements BlogService {
	private BlogRepository blogRepository;

	/**
	 * Constructor based Dependency injection to inject BlogRepository here
	 */
	@Autowired
	public BlogServiceImpl(BlogRepository blogRepository) {
		this.blogRepository = blogRepository;
	}

	@Override
	public Blog saveBlog(Blog blog) {
		// TODO Auto-generated method stub

		return this.blogRepository.save(blog);
	}

	@Override
	public List<Blog> getAllBlogs() {
		// TODO Auto-generated method stub
		return (List<Blog>) this.blogRepository.findAll();
	}

	@Override
	public Blog getBlogById(int id) {
		// TODO Auto-generated method stub

		return blogRepository.findById(id).get();
	}

	@Override
	public Blog deleteBlog(int id) {

		Optional<Blog> deletedBlog= this.blogRepository.findById(id);
		
		if(deletedBlog.isEmpty()){
			return null;
		}

		else {
			
			this.blogRepository.deleteById(id);
			return deletedBlog.get(); 
		}


	}

	@Override
	public Blog updateBlog(Blog blog) {
		
		if(this.blogRepository.findById(blog.getBlogId())==null){
			return null;
		}

		return this.blogRepository.save(blog);

	}

	/**
	 * save a new blog
	 */

	/**
	 * retrieve all blogs
	 */

	/**
	 * retrieve blog by id
	 */

	/**
	 * delete blog by id
	 */

	/**
	 * update blog
	 */
}
