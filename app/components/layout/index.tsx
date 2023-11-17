import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
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
        <nav>
          <a
            href="https://github.com/orphandeity"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jeffwilliams93"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogoIcon />
          </a>
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>
        <small>Made with ❤️ by Jeff Williams</small>
      </footer>
    </div>
  )
}
