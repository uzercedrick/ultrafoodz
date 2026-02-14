import styles from "./BrandsSection.module.css"

const defaultBrands = [
  { 
    name: 'Korpala Nordic',
    url: 'https://korpalanordic.com',
    logo: '/brands/korpala-logo.png'
  },
  { 
    name: 'Menu Food',
    url: 'https://menufood.com',
    logo: '/brands/menufood-logo.png'
  },
]

export default function BrandsSection({ brands = defaultBrands }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Our <span className={styles.textGradient}>Brands</span>
          </h2>
        </div>

        {/* Logo grid */}
        <div className={styles.grid}>
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandLink}
            >
              <div className={styles.brandCard}>
                <div className={styles.logoWrapper}>
                  <div className={styles.logoPlaceholder}></div>
                  {/* Replace with: */}
                  {/* <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className={styles.logoImage}
                  /> */}
                </div>
              </div>
              <p className={styles.brandName}>{brand.name}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}