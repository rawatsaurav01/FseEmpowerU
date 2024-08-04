package com.stackroute.controller;

import com.stackroute.domain.Blog;
import com.stackroute.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * RestController annotation is used to create Restful web services using Spring MVC
 */

/**
 * RequestMapping annotation maps HTTP requests to handler methods
 */

@RestController
@RequestMapping("/api/v1")
public class BlogController {

	private BlogService blogService;

	@Autowired
	public BlogController(BlogService blogService) {
		this.blogService = blogService;
	}

	/**
	 * save a new blog
	 */
	@PostMapping("/blog")
	public ResponseEntity<Blog> saveBlog(@RequestBody Blog blog) {
		Blog saveBlog = this.blogService.saveBlog(blog);
		return new ResponseEntity<>(saveBlog, HttpStatus.CREATED);
//    	return this.blogService.saveBlog(blog);

	}

	/**
	 * retrieve all blogs
	 */
	@GetMapping("/blogs")
	public ResponseEntity<List<Blog>> getAllBlogs() {
		List<Blog> allBlogs = this.blogService.getAllBlogs();
		return new ResponseEntity<List<Blog>>(allBlogs,HttpStatus.OK);
		
	}

	/**
	 * retrieve blog by id
	 */
	@GetMapping("blog/{blogId}")
	public ResponseEntity<Blog> getBlogById(@PathVariable("blogId") int blogId) {
		Blog blogById = this.blogService.getBlogById(blogId);
		return new ResponseEntity<Blog>(blogById,HttpStatus.OK);
	}

	/**
	 * delete blog by id
	 */
	@DeleteMapping("blog/{blogId}")
	public ResponseEntity<Blog> getBlogAfterDeleting(@PathVariable("blogId") int blogId) {
		Blog deleteBlog = this.blogService.deleteBlog(blogId);
		return new ResponseEntity<Blog>(deleteBlog,HttpStatus.OK);
	}

	/**
	 * update blog
	 */
	@PutMapping("blog")
	public ResponseEntity<Blog> updateBlog(@RequestBody Blog blog) {
		Blog updateBlog = this.blogService.updateBlog(blog);
		return new ResponseEntity<Blog>(updateBlog,HttpStatus.OK);
	}
}