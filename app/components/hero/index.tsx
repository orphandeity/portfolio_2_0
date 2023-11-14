import styles from './style.module.css'

export default function Hero({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={styles.hero}>
      <h1>
        Hi, I'm Jeff...
        <br />
        Web Developer
        <br />
        and Musician.
      </h1>
      <p>
        I create dynamic web experiences that people love to use. You can read a
        bit more about me or check out some things I have built.
      </p>
    </div>
  )
}
