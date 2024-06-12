import React from 'react';
import classes from './Blog.module.css';
import blog from './blog1.png';
import blog1 from './blog2.png';
import blog2 from './blog 3.jpg';
import banner from './blog (2).jpg';

const Blog = () => {
  return (
    <div className={classes.blogContainer}>
      <header className={classes.blogHeader}>
        <div className={classes.banner}>
          <img src={banner} alt="Blog Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1>Our Blog & Insight</h1>
            <p>We delve into the world of EHS, exploring the latest trends, regulations, and best practices that drive responsible business operations.</p>
          </div>
        </div>
        <div className={classes.categories}>
          <button className={`${classes.category} ${classes.categoryActive}`}>All</button>
          <button className={classes.category}>Newsletter</button>
          <button className={classes.category}>Tips</button>
          <button className={classes.category}>Insight</button>
          <button className={classes.category}>Success Stories</button>
        </div>
      </header>
      <div className={classes.blogPosts}>
        <div className={classes.post}>
          <img src={blog} alt="Post 1" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postTag}>Newsletter</span>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>The Future of EHS: Emerging Trends to Watch</h2>
            <p>Technological advancements, data analytics, and industry disruptions. Navigating the evolving landscape...</p>
          </div>
        </div>
        <div className={classes.post}>
          <img src={blog1} alt="Post 2" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postTag}>Tips</span>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>Mental Health Matters: EHS Strategies for Employee Well-Being</h2>
            <p>Addressing stress, burnout, and mental health in the workplace. A holistic approach to support employee...</p>
          </div>
        </div>
        <div className={classes.post}>
          <img src={blog2} alt="Post 3" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postTag}>Insight</span>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>Creating a Safety Culture: EHS Leadership Insights</h2>
            <p>Empowering your team to prioritize safety every day, leadership strategies, training, and cultivating...</p>
          </div>
        </div>
        {/* Additional posts here */}
      </div>
    </div>
  );
};

export default Blog;
