import styles from './Skeleton.module.css'
export default function Skeleton(){
    return(<div >
        {Array.from({ length: 5 }).map((_, ind) => (
          <div key={ind} className={styles.item}>
            <span className={styles.avatar}></span>
            <p className={styles.text}></p>
          </div>
        ))}
      </div>

    )
}

