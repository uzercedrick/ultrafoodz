import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <section className={styles.sectionLight}>
      <div className={styles.sectionContainer}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className={styles.slideInLeft}>
            <div className={styles.imageHover}>
              <div className={styles.imagePlaceholder}>
                <div className={`text-9xl text-gray-300 ${styles.float}`}></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.slideInRight}>
            <div className={styles.badge}>
              <span>About Us</span>
            </div>

            <h2 className={styles.heading}>
              Fresh Food,
              <span className={styles.textGradient}> Delivered Fast</span>
            </h2>

            <p className={styles.paragraph}>
              We bring farm-fresh ingredients directly to your table. Our commitment
              to quality and taste has made us the trusted choice for food lovers everywhere.
            </p>

            <p className={styles.paragraph}>
              With over a decade of experience, we've mastered the art of delivering
              exceptional culinary experiences that delight every palate.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}