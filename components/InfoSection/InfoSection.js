import styles from './InfoSections.module.css'

export default function Mission() {
  return (
    <div className={styles.wrapper}>
      
      {/* Vision Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.slideInLeft}>
            <h2 className={styles.heading}>VISION</h2>
            <p className={styles.text}>Description Text - Your vision statement goes here.</p>
          </div>
          <div className={styles.imagePlaceholder}>
            
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <div className={styles.imagePlaceholder}>
            
          </div>
          <div className={styles.slideInRight}>
            <h2 className={styles.heading}>MISSION</h2>
            <p className={styles.text}>What we do - Your mission statement.</p>
          </div>
        </div>
      </section>

    </div>
  )
}