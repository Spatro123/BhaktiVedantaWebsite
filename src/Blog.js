import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Blog.module.css';
import blog from "./Blog-Emplyability and spirituality growth.jpg";
import blog1 from './Blog-Entrepreneurship purpose.jpg';
import blog2 from './Blog-Mantra meditation.jpg';
import banner from './blog (2).jpg';

const Blog = () => {
  return (
    <div className={classes.blogContainer}>
      <header className={classes.blogHeader}>
        <div className={classes.banner}>
          <img src={banner} alt="Blog Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1>Our Blog & Insight</h1>
          </div>
        </div>
        <p>We delve into the world of EHS, exploring the latest trends, regulations, and best practices that drive responsible business operations.</p>

        <div className={classes.categories}>
          <button className={`${classes.category} ${classes.categoryActive}`}>All</button>
          <button className={classes.category}>Start-Ups</button>
          <button className={classes.category}>CareerTips</button>
          <button className={classes.category}>Spirituality</button>
          <button className={classes.category}>Success Stories</button>
        </div>
      </header>
      <div className={classes.blogPosts}>
        <div className={classes.post}>
          <img src={blog} alt="Post 1" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>Bridging Employability Skills and Spiritual Growth: A Holistic Approach
            </h2>
            <Link to="/blog1" className={classes.readMore}>Read More</Link>
          </div>
        </div>
        <div className={classes.post}>
          <img src={blog1} alt="Post 2" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>Entrepreneurship with a Purpose: Lessons from the Bhagavad Gita</h2>
            <Link to="/blog2" className={classes.readMore}>Read More</Link>
          </div>
        </div>
        <div className={classes.post}>
          <img src={blog2} alt="Post 3" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>The Power of Mantra Meditation in Modern Life for Students</h2>
            <Link to="/blog3" className={classes.readMore}>Read More</Link>
          </div>
        </div>
      </div>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
        
    </div>
  );
};

export default Blog;
