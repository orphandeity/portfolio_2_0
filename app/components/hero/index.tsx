import { Link } from '@remix-run/react'
import styles from './style.module.css'

export default function Hero({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={`${styles.hero} grid`}>
      <h1>
        Hi, I'm Jeff...
        <br />
        Web Developer
        <br />
        and Musician.
      </h1>
      <p>
        I build dynamic web experiences that people love to use. You can read a
        bit more{' '}
        <Link to="about" className="link">
          about me
        </Link>{' '}
        or check out some things I have made.
      </p>
    </div>
  )
}
