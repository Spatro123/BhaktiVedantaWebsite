import React from 'react';
import classes from './Terms.module.css';

const TermsPage = () => {
  return (
    <div className={classes.termsContainer}>
      <h1>Terms and Conditions</h1>
      <p className={classes.effectiveDate}>Effective Date: 15-06-2024</p>
      <p>Welcome to the Bhaktivedanta International Academy for Applied Spiritual Technology website ("Site"). These Terms and Conditions ("Terms") govern your use of our Site and services. By accessing or using our Site, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Site.</p>
      
      <section className={classes.termsSection}>
        <h2>1. Use of the Site</h2>
        <h3>Eligibility</h3>
        <p>You must be at least 18 years old to use our Site. By using the Site, you represent and warrant that you are of legal age and have the legal capacity to enter into a binding agreement.</p>
        
        <h3>Account Registration</h3>
        <p>To access certain features of our Site, you may need to register for an account. You agree to provide accurate and complete information during the registration process and to keep your account information up-to-date. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.</p>
        
        <h3>Prohibited Activities</h3>
        <p>You agree not to use the Site for any unlawful or prohibited activities, including but not limited to:</p>
        <ul>
          <li>Violating any applicable laws or regulations</li>
          <li>Infringing upon or violating our intellectual property rights or the rights of others</li>
          <li>Transmitting any harmful, obscene, or otherwise objectionable content</li>
          <li>Interfering with or disrupting the operation of the Site</li>
          <li>Attempting to gain unauthorized access to the Site or our systems</li>
        </ul>
      </section>
      
      <section className={classes.termsSection}>
        <h2>2. Intellectual Property</h2>
        <h3>Ownership</h3>
        <p>All content, materials, and features available on the Site, including but not limited to text, graphics, logos, images, and software, are the property of Bhaktivedanta International Academy for Applied Spiritual Technology or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
        
        <h3>Limited License</h3>
        <p>You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Site for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, or perform any part of the Site without our prior written consent.</p>
      </section>
      
      <section className={classes.termsSection}>
        <h2>3. Payments and Refunds</h2>
        <h3>Payments</h3>
        <p>If you purchase any products or services through our Site, you agree to pay all fees and charges in accordance with the prices and billing terms in effect at the time of purchase. All payments are processed securely, and your payment information is not stored on our servers.</p>
        
        <h3>Refunds</h3>
        <p>Our refund policy varies depending on the product or service purchased. Please refer to the specific terms and conditions of the product or service for more information on refunds.</p>
      </section>
      
      <section className={classes.termsSection}>
        <h2>4. Disclaimers and Limitation of Liability</h2>
        <h3>Disclaimers</h3>
        <p>The Site and all content, materials, and services provided on the Site are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Site or its content, including but not limited to the accuracy, completeness, reliability, or availability of the Site.</p>
        
        <h3>Limitation of Liability</h3>
        <p>To the maximum extent permitted by law, Bhaktivedanta International Academy for Applied Spiritual Technology and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
        <ul>
          <li>Your use of or inability to use the Site</li>
          <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
          <li>Any bugs, viruses, or other harmful code that may be transmitted to or through our Site</li>
          <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Site</li>
        </ul>
      </section>
      
      <section className={classes.termsSection}>
        <h2>5. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Bhaktivedanta International Academy for Applied Spiritual Technology, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of the Site or violation of these Terms.</p>
      </section>
      
      <section className={classes.termsSection}>
        <h2>6. Governing Law and Dispute Resolution</h2>
        <h3>Governing Law</h3>
        <p>These Terms and any disputes arising out of or related to these Terms or the use of the Site shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
        
        <h3>Dispute Resolution</h3>
        <p>Any disputes arising out of or related to these Terms or the use of the Site shall be resolved through amicable negotiations. If a resolution cannot be reached, the dispute shall be submitted to binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in [Insert City], India, and the language of arbitration shall be English.</p>
      </section>
      
      <section className={classes.termsSection}>
        <h2>7. Changes to These Terms</h2>
        <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our Site with a new effective date. Your continued use of the Site after the changes take effect will constitute your acceptance of the revised Terms.</p>
      </section>
      
      <section className={classes.termsSection}>
        <h2>8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>Email: info@bhaktivedantaacademy.org</p>
        <p>Phone: +91-9437405606</p>
        <p>Address: Bhubaneswar</p>
      </section>
      
      <p>By using our website and services, you agree to these Terms and Conditions.</p>
    </div>
  );
}

export default TermsPage;
