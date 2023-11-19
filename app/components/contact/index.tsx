import { Form, useNavigation } from '@remix-run/react'
import styles from './style.module.css'

export default function Contact({
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const navigation = useNavigation()
  const isSubmitting = navigation.formAction === '/?index'

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <div className="grid">
        <div>
          <p className="text">
            I'm currently looking for new opportunities. If you'd like to get in
            touch, please fill out the form below.
          </p>
        </div>
        <Form method="post" action="/?index">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              minLength={3}
              maxLength={30}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              minLength={10}
              maxLength={230}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
        </Form>
      </div>
    </section>
  )
}
