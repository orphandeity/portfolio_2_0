import styles from './style.module.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <b>Jeff Williams | Web Developer</b>
      </header>
      {children}
      <footer className={styles.footer}>
        <small>Made with ❤️ by Jeff Williams</small>
      </footer>
    </div>
  )
}
