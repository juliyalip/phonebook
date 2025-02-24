import styles from './Skeleton.module.css'

export default function Skeleton() {
  return (
  
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.option}></div>
          <div className={styles.option}></div>
          <div className={styles.button}></div>
        </div>
        <div className={styles.list}>
          {Array.from({ length: 5 }).map((_, ind) => (
            <div key={ind} className={styles.item}>
              <span className={styles.avatar}></span>
              <p className={styles.text}></p>
            </div>
          ))}
        </div>
      </div>

  )
}

