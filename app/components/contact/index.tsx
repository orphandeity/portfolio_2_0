import styles from './style.module.css'

export default function Contact({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <p className="text">
        I'm currently looking for new opportunities. If you'd like to get in
        touch, please fill out the form below.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" />
        </div>
        <button className={styles.button}>Send message</button>
      </form>
    </section>
  )
}
