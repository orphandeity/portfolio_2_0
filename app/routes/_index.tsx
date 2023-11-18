import {
  type ActionFunctionArgs,
  type MetaFunction,
  redirect,
} from '@remix-run/node'
import Hero from '~/components/hero'
import Skills from '~/components/skills'
import Projects from '~/components/projects'
import Contact from '~/components/contact'
import sendMail from '~/services/sendMail'

export const meta: MetaFunction = () => {
  return [
    { title: 'Jeff Williams | Web Developer' },
    {
      name: 'description',
      content: 'Portfolio of Web Development work by Jeff Williams',
    },
  ]
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData()
  const data = Object.fromEntries(body)
  const isSent = await sendMail(data)

  if (isSent) return redirect('/thankyou')
  else return redirect('/error')
}

export default function Index() {
  return (
    <div className="gap">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
