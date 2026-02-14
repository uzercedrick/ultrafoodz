import styles from './MapSection.module.css'

export default function Map() {
  return (
    <section className={styles.section} id="map">
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            CUSTOMER AND CLIENTS MAP
          </h2>
          <div className={styles.divider}></div>
        </div>

        {/* GOOGLE MAP CONTAINER */}
        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            <p className={styles.mapPlaceholderText}>
              Google Maps will be embedded here
            </p>
          </div>
        </div>

        {/* CONNECT WITH US SECTION */}
        <div className={styles.connectBox}>

          <div className={styles.connectHeader}>
            <h3 className={styles.connectTitle}>
              CONNECT WITH US
            </h3>
          </div>

          <div className={styles.formGrid}>

            {/* COLUMN 1 - COMPANY DETAILS */}
            <div className={styles.formGroup}>
              <div>
                <label className={styles.label}>Company Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={styles.input}
                />
              </div>

              <div>
                <label className={styles.label}>Company Name</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className={styles.input}
                />
              </div>

              <div>
                <label className={styles.label}>Business Address</label>
                <input
                  type="text"
                  placeholder="Your business address"
                  className={styles.input}
                />
              </div>
            </div>

            {/* COLUMN 2 - CONTACT INFO */}
            <div className={styles.formGroup}>
              <div>
                <label className={styles.label}>Contact Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={styles.input}
                />
              </div>

              <div>
                <label className={styles.label}>Contact Person</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className={styles.input}
                />
              </div>
            </div>

            {/* COLUMN 3 - MESSAGE */}
            <div>
              <label className={styles.label}>Message Us</label>
              <div className={styles.textareaWrapper}>
                <textarea
                  rows="6"
                  placeholder="Type your message here..."
                  className={styles.textarea}
                ></textarea>
                <button className={styles.sendBtn}>
                  Send
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}