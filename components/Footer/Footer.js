import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        
        {/* Footer grid - 2 columns (Logo + Contact Info) */}
        <div className={styles.grid}>
          
          {/* Logo and Company Info */}
          <div>
            <div className={styles.logoWrapper}>
              <img 
                src="/logo.png" 
                alt="UltraFood Logo" 
                className={styles.logo}
              />
              <h2 className={styles.companyName}>ULTRAFOOD</h2>
            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className={styles.contactWrapper}>
            <h3 className={styles.contactTitle}>CONTACT US</h3>
            <ul className={styles.contactList}>
              
              {/* Email */}
              <li>
                <a href="mailto:contact@ultrafood.com" className={styles.contactLink}>
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className={styles.contactText}>contact@ultrafood.com</span>
                </a>
              </li>
              
              {/* Phone */}
              <li>
                <a href="tel:+15551234567" className={styles.contactLink}>
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className={styles.contactText}>+1 (555) 123-4567</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 UltraFood. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}