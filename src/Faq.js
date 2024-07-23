import React from 'react';
import classes from './Faq.module.css';

const FAQPage = () => {
  return (
    <div className={classes.faqContainer}>
      <h1>FAQ Section for Bhaktivedanta International Academy for Applied Spiritual Technology</h1>

      <section className={classes.faqSection}>
        <h2>General Questions</h2>
        <div className={classes.faqItem}>
          <h3>1. What is Bhaktivedanta International Academy for Applied Spiritual Technology?</h3>
          <p>Bhaktivedanta International Academy for Applied Spiritual Technology is an educational institution dedicated to empowering youth and women through holistic development programs. We offer specialized courses in employability skills, entrepreneurship, and spiritual growth.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>2. Where is the academy located?</h3>
          <p>Our main campus is located in Bhubaneswar. We also offer online programs accessible from anywhere in the world.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>3. Who can enroll in your programs?</h3>
          <p>Our programs are designed for college students, recent graduates, and anyone looking to enhance their employability skills, entrepreneurial capabilities, and spiritual well-being.</p>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Programs and Courses</h2>
        <div className={classes.faqItem}>
          <h3>4. What types of programs do you offer?</h3>
          <p>We offer a variety of programs including:</p>
          <ul>
            <li>Employability Skill Development</li>
            <li>Entrepreneurship Development</li>
            <li>Spiritual Development</li>
            <li>Workshops and Training</li>
            <li>Online Courses</li>
          </ul>
        </div>
        <div className={classes.faqItem}>
          <h3>5. Are the courses available online?</h3>
          <p>Yes, we offer many of our courses online through live instruction and recorded sessions, allowing flexibility for students to learn at their own pace.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>6. How long do the courses last?</h3>
          <p>The duration of our courses varies depending on the program. Some workshops and training sessions are a few days long, while other comprehensive courses may last several weeks or months.</p>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Enrollment and Fees</h2>
        <div className={classes.faqItem}>
          <h3>7. How can I enroll in a course?</h3>
          <p>You can enroll in our courses through our website. Simply visit the 'Our Programs' page, select the course you are interested in, and follow the registration instructions.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>8. What are the fees for your courses?</h3>
          <p>Course fees vary depending on the program. Detailed fee structures can be found on the individual course pages. We also offer some scholarships and financial aid options.</p>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Instruction and Faculty</h2>
        <div className={classes.faqItem}>
          <h3>10. Who are the instructors for your courses?</h3>
          <p>Our courses are taught by a combination of in-house experts and guest instructors from various parts of India. These experts are highly qualified and bring extensive experience in their respective fields.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>11. How are the online courses delivered?</h3>
          <p>Online courses are delivered through interactive live sessions on platforms like Zoom. Recorded sessions are also available for those who cannot attend live classes.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>12. How do I access the online courses?</h3>
          <p>Once you enroll, you will receive login credentials and instructions on how to access the course materials through our online learning portal.</p>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Support and Assistance</h2>
        <div className={classes.faqItem}>
          <h3>13. What kind of support do you offer to students?</h3>
          <p>We offer comprehensive support including academic advising, technical support, and access to a community forum where students can interact and share insights.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>14. How can I contact customer support?</h3>
          <p>You can contact our customer support team via email at info@bhaktivedantaacademy.org or by phone at +91-9437405606.</p>
        </div>
      </section>

      <section className={classes.faqSection}>
        <h2>Partnerships and Collaborations</h2>
        <div className={classes.faqItem}>
          <h3>16. How can organizations partner with Bhaktivedanta Academy?</h3>
          <p>We welcome partnerships with educational institutions, corporations, and NGOs. Please visit our 'Partner With Us' page for more information on how to collaborate with us.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>17. Do you offer volunteer opportunities?</h3>
          <p>Yes, we have various volunteer opportunities for individuals passionate about education and spiritual development. Check our 'Get Involved' section for more details.</p>
        </div>
        <div className={classes.faqItem}>
          <h3>18. How can I donate to support your programs?</h3>
          <p>You can support our initiatives by making a donation by contacting us from our contact us page on our website. Your contributions help us provide quality education and support to more students.</p>
        </div>
      </section>

      <p>For any additional questions or specific inquiries, please feel free to reach out to us directly. We are here to help and support you on your educational journey.</p>
    </div>
  );
}

export default FAQPage;
