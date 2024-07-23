import React from 'react';
import classes from './Yu.module.css';
import zenImage from './adhyatmic jagruti kendra.jpg';
import headingPoster from './adhyatmic jagruti kendra (2).jpg';
import benefitsBanner from './adhyatmic jagruti kendra (2).jpg'; 

const AdhyatmikJagrutiKendra = () => {
  return (
    <div className={classes.container}>
      <div className={classes.headingPosterContainer}>
        <img src={headingPoster} alt="Heading Poster" className={classes.headingPoster} />
        <div className={classes.overlayText}>
          <h3>Adhyatmik Jagruti Kendra:</h3>
          <h2>Awakening Spiritual Consciousness</h2>
        </div>
      </div>

      <p>
        Welcome to the Adhyatmik Jagruti Kendra at Bhaktivedanta International Academy for
        Applied Spiritual Technology. Our center is dedicated to awakening spiritual consciousness
        and promoting holistic development through a blend of spiritual teachings, meditation
        practices, and personal growth strategies.
      </p>
      <h3>Program Overview:</h3>
      <div className={classes.imagecontainer}>
        <img src={zenImage} alt="Zen" />
      </div>
      <p>
        The Adhyatmik Jagruti Kendra offers a range of programs designed to nurture spiritual
        growth and personal well-being. Our unique approach integrates timeless spiritual wisdom
        with modern practices, providing a holistic path to inner peace, mental clarity, and balanced
        living.
      </p>
      <h3>Program Features:</h3>
      <p>1. Holistic Success Pathway™ Framework:</p>
      <p>Our flagship program framework, Holistic Success Pathway™, seamlessly integrates spiritual development with entrepreneurial and employability training. This comprehensive approach ensures that our participants achieve not only professional success but also spiritual fulfillment.</p>
      <p>2. Spiritual Teachings:</p>
      <p>Our programs are grounded in the profound teachings of the Bhagavad Gita and other Vedic scriptures. These teachings offer timeless wisdom for navigating life's challenges and finding inner peace.</p>
      <p>3. Mantra Meditation:</p>
      <p>Participants learn powerful mantra meditation techniques to enhance mental clarity, reduce stress, and foster emotional balance. Regular meditation practice is a cornerstone of our spiritual development programs.</p>
      <p>4. Interactive Workshops:</p>
      <p>Our workshops are designed to be interactive and engaging, offering practical insights into applying spiritual principles in daily life. Through discussions, group activities, and guided practices, participants deepen their understanding and experience.</p>
      <p>5. Expert Guidance:</p>
      <p>Courses are led by experienced spiritual teachers and practitioners who provide personalized guidance and support. This ensures a high standard of learning and fosters a supportive environment for spiritual growth.</p>
      <p>6. Flexible Delivery Formats:</p>
      <p>We offer our programs in both online and offline formats, providing flexibility to accommodate different learning preferences:</p>
      <p>Online Learning: Live interactive sessions and pre-recorded lectures accessible from anywhere.</p>
      <p>On-Site Training: In-person workshops and seminars at our campus or partner institutions.</p>
      <div className={classes.imagecontainer}>
        <img src={zenImage} alt="Zen" />
      </div>

      <div className={classes.integrationContainer}>
        <div className={classes.integrationHeader}>
          Integration with the Success Pathway™ Framework:
        </div>
        <div className={classes.integrationContent}>
          <p>
            The Holistic Success Pathway™ framework is designed to provide a structured yet flexible path to holistic success. The integration of Adhyatmik Jagruti Kendra into this framework includes:
          </p>
          <p><strong>Spiritual Foundations:</strong> Core spiritual teachings from the Bhagavad Gita, Vedic scriptures, and other spiritual texts form the foundation of the Success Pathway™.</p>
          <p><strong>Meditation Practices:</strong> Regular mantra meditation sessions are integrated into the curriculum, promoting mental clarity and emotional balance.</p>
          <p><strong>Personal Growth:</strong> Emphasis on personal growth and self-awareness, encouraging participants to explore their inner potential and develop a deeper understanding of themselves.</p>
          <p><strong>Ethical and Balanced Living:</strong> Guidance on ethical living and balanced decision-making, ensuring that participants align their actions with their values and principles.</p>
          <p>Join Us at Adhyatmik Jagruti Kendra</p>
          <p>
            We invite you to embark on a transformative journey with Adhyatmik Jagruti Kendra. Whether you are seeking spiritual growth, personal development, or a deeper connection with your inner self, our programs are designed to meet your needs and aspirations.
          </p>
        </div>
      </div>

      <div className={classes.joinNowSection}>
        Take the first step towards a fulfilling and balanced life. Enroll today and become a part of the Bhaktivedanta International Academy community. Together, let's awaken our spiritual consciousness and build a brighter, more harmonious world.
        <div>
          <button className={classes.joinNowButton}>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdhyatmikJagrutiKendra;
