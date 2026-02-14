'use client'
import { useState } from 'react'
import styles from './HistorySection.module.css'

const defaultTimeline = [
  { 
    year: '2010', 
    title: 'The Beginning', 
    description: 'Founded with a simple mission: deliver exceptional food experiences to every customer.',
  },
  { 
    year: '2015', 
    title: 'Rapid Growth', 
    description: 'Expanded to 50+ locations nationwide, serving thousands of happy customers daily.',
  },
  { 
    year: '2020', 
    title: 'Digital Revolution', 
    description: 'Launched our advanced online platform, making ordering faster and easier than ever.',
  },
  { 
    year: '2024', 
    title: 'Industry Leader', 
    description: 'Recognized as the #1 food delivery service with innovations that set new standards.',
  }
]

export default function HistorySection({ timeline = defaultTimeline }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.headerLabel}>Our Journey</span>
          <h2 className={styles.heading}>
            History <span className={styles.headingBold}>Timeline</span>
          </h2>
        </div>

        {/* Text Box */}
        <div className={styles.textBox}>
          <h3 className={styles.textBoxTitle}>
            {timeline[activeIndex].title}
          </h3>
          <p className={styles.textBoxDesc}>
            {timeline[activeIndex].description}
          </p>
          <div className={styles.textBoxYear}>
            {timeline[activeIndex].year}
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timelineWrapper}>
          <div className={styles.lineBase}></div>
          <div 
            className={styles.lineProgress}
            style={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
          ></div>

          <div className={styles.circlesContainer}>
            
            {/* Previous button */}
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className={styles.navBtn}
            >
              <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {timeline.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={styles.dotWrapper}
              >
                <div className={`${styles.dot} ${activeIndex === index ? styles.dotActive : styles.dotInactive}`}>
                  {activeIndex === index && (
                    <span className={styles.dotIcon}>{item.icon}</span>
                  )}
                </div>
                <span className={`${styles.year} ${activeIndex === index ? styles.yearActive : styles.yearInactive}`}>
                  {item.year}
                </span>
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() => setActiveIndex(Math.min(timeline.length - 1, activeIndex + 1))}
              disabled={activeIndex === timeline.length - 1}
              className={styles.navBtn}
            >
              <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.hint}>
          • click on dots or arrows to navigate •
        </div>
      </div>
    </section>
  )
}