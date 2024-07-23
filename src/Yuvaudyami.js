import React from 'react';
import classes from "./yuva.module.css";
import banner from './banner.jpg';
import pathwayImage from './ceo.jpeg';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.bannerContainer}>
        <img src={banner} alt="Yuva Udyami Chetana Kendra Banner" className={classes.banner} />
        <div className={classes.bannerText}>
          <h1>Yuva Udyami Chetana Kendra:</h1>
            <h1> Empowering the Entrepreneurs of Tomorrow</h1>
        
        </div>
        
      </div>
    
      <header className={classes.header}>
      <p>
            Welcome to the Yuva Udyami Chetana Kendra at Bhaktivedanta International Academy for Applied Spiritual Technology. Our center is dedicated to nurturing the entrepreneurial spirit in youth, equipping them with the skills, knowledge, and mindset required to succeed in the modern business landscape.
          </p>
        <h2>Program Overview</h2>
        <p>
          Yuva Udyami Chetana Kendra offers a comprehensive suite of programs designed to foster entrepreneurship and employability among young individuals. Our unique approach integrates practical business training with spiritual and ethical grounding, ensuring that our participants not only achieve professional success but also lead fulfilling, balanced lives.
        </p>
      </header>

      <section className={classes.holisticsuccesspathway}>
        <img src={pathwayImage} alt="Holistic Success Pathway" className={classes.sideImage} />
        <div className={classes.holisticContent}>
          <h2>Holistic Success Pathway™ Framework</h2>
          <p>
            Our flagship program framework, Holistic Success Pathway™, is a unique blend of entrepreneurial training, employability skills, and spiritual development. This comprehensive approach ensures that our participants are well-rounded individuals ready to face the challenges of the modern business world.
          </p>
          <p>
            <strong>Expert-Led Courses:</strong> Courses are delivered by a mix of in-house experts and distinguished professionals from various fields. This ensures high standards of learning, drawing insights from seasoned practitioners in the field.
          </p>
          <p>
            <strong>Interactive Learning Modules:</strong> Our courses include interactive learning modules designed to engage students through practical exercises. With hands-on projects, practical business simulations, and group discussions, participants gain practical experience and valuable insights.
          </p>
        </div>
      </section>

      <section className={classes.comprehensivecurriculum}>
        <h2>Comprehensive Curriculum</h2>
        <p>
          Our curriculum covers a wide range of topics crucial for entrepreneurial success:
        </p>
        <ul>
          <li><strong>Business Planning and Strategy:</strong> Crafting business plans, market analysis, and strategic planning.</li>
          <li><strong>Financial Management:</strong> Basics of accounting, financial planning, and investment strategies.</li>
          <li><strong>Digital Marketing:</strong> SEO, social media marketing, digital advertising, and analytics.</li>
          <li><strong>Leadership and Team Building:</strong> Developing leadership qualities and effective team management skills.</li>
          <li><strong>Spiritual Development:</strong> Incorporating Bhagavad Gita teachings and mantra meditation for mental clarity and ethical grounding.</li>
        </ul>
      </section>

      <section className={classes.benefits}>
        <h2>Benefits of Joining Yuva Udyami Chetana Kendra</h2>
        <p>
          <strong>1. Comprehensive Skill Development:</strong> Participants gain a diverse skill set that prepares them for various aspects of running a business, from planning and management to marketing and finance.
        </p>
        <p>
          <strong>2. Enhanced Employability:</strong> Our programs improve employability by equipping participants with practical skills and real-world knowledge, making them attractive candidates for potential employers.
        </p>
        <p>
          <strong>3. Ethical and Spiritual Growth:</strong> We emphasize the importance of ethics and spirituality in business, promoting integrity and balanced living through teachings from the Bhagavad Gita and regular mantra meditation sessions.
        </p>
        <p>
          <strong>4. Networking Opportunities:</strong> Participants have the chance to connect with like-minded individuals, mentors, and industry experts, fostering a supportive community for future collaborations and opportunities.
        </p>
        <p>
          <strong>5. Certification and Recognition:</strong> Upon successful completion of our programs, participants receive certification from Bhaktivedanta International Academy, enhancing their professional credibility and marketability.
        </p>
      </section>

      <section className={classes.newSection}>
        <h2>Success Pathway™ Framework:</h2>
        <p>
          The Holistic Success Pathway™ framework is designed to provide a structured yet flexible path to entrepreneurial and personal success. It integrates three core elements:
        </p>
        <ul>
          <li><strong>Entrepreneurial Skill Development:</strong> Practical business training, strategic thinking, and innovation.</li>
          <li><strong>Employability Enhancement:</strong> Essential job skills, professional communication, and teamwork.</li>
          <li><strong>Spiritual and Ethical Foundation:</strong> Bhagavad Gita teachings, mantra meditation, and personal ethics.</li>
        </ul>
        <p>
          Each element of the Success Pathway™ is meticulously crafted to ensure a well-rounded development experience, preparing our participants not just for professional success, but for a fulfilling and purposeful life.
        </p>
        <h2>Join Us at Yuva Udyami Chetana Kendra</h2>
        <p>
          We invite you to embark on a transformative journey with Yuva Udyami Chetana Kendra. Whether you are a budding entrepreneur, a college student looking to enhance your employability, or someone seeking personal and spiritual growth, our programs are designed to meet your needs and aspirations.
        </p>
        <div className={classes.callToAction}>
          <p>
            Take the first step towards a successful and fulfilling future. Enroll today and become a part of the Bhaktivedanta International Academy community. Together, let's build a brighter, more prosperous world, one entrepreneur at a time.
          </p>
          <button className={classes.enrollButton}>Enroll Today</button>
        </div>
      </section>
    </div>
  );
}

export default App;
