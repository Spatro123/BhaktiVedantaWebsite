import React from 'react';
import classes from './Partner.module.css';
import logo from './mcl.png'
import mclLogo from './mcl.png'; 
import headerBanner from './header banner.jpg';

const PartnerComponent = () => {
  return (
    <div className={classes.partnercontainer}>
    

      <section className={classes.bannerSection}>
        <img src={headerBanner} alt="Header Banner" className={classes.headerBanner} />
        <div className={classes.bannerText}>
          <h2>Our Partner</h2>
          <h3>Empowering Communities Through Partnership</h3>
        </div>
      </section>

      <section className={classes.announcement}>
        <p>Mahanadi Coalfields Limited (MCL) stands as a proud partner for the Bhaktivedanta International Academy for Applied Spiritual Technology project. With a shared commitment to holistic development and empowerment, our collaboration embodies the spirit of progress and innovation.</p>
      </section>

      <section className={classes.benefits}>
        <div className={classes.benefit}>
          <span className={classes.icon}>₹</span>
          <p>Financial Support</p>
        </div>
        <div className={classes.benefit}>
          <span className={classes.icon}>📈</span>
          <p>Industry Expertise</p>
        </div>
        <div className={classes.benefit}>
          <span className={classes.icon}>🤝</span>
          <p>Community Engagement</p>
        </div>
      </section>

      <section className={classes.partnershipdetails}>
        <div className={classes.bannerContainer}>
          <img src={mclLogo} alt="MCL Logo" className={classes.mcllogo} />
         
        </div>
        <p>Mahanadi Coalfields Limited (MCL's) contribution to our project is invaluable, reflecting their commitment to social responsibility and sustainable growth. Through their support, we have been able to expand our reach and impact, offering transformative programs and initiatives to a wider audience.</p>
        <p>From providing financial assistance to sharing expertise and resources, MCL has played a pivotal role in our journey towards creating positive change. Their dedication to our shared vision of empowering individuals with spiritual wisdom and practical skills has strengthened our efforts and amplified our impact.</p>
        <p>Together, Bhaktivedanta International Academy and MCL are not only transforming lives but also building a brighter future for generations to come. Through this partnership, we are laying the foundation for a more enlightened and empowered society, where individuals can thrive and contribute meaningfully to the world around them.</p>
      </section>

      <footer className={classes.footer}>
        <button className={classes.ctabutton}>Become A Part Of Our Thriving Community</button>
      </footer>
    </div>
  );
};

export default PartnerComponent;
