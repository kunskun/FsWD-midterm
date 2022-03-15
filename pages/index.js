import styles from '../styles/Home.module.css'
import Home from './home'

export default function App() {
  return (
    <>
      <div className="styles.container progress-bar-striped bg-warning">
        <main className={styles.main}>
          <Home />
          {/* <Post /> */}
        </main>
      </div>
    </>
  )
}
