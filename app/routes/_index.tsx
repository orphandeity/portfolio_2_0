import type { MetaFunction } from '@remix-run/node'
import Hero from '~/components/hero'
import Skills from '~/components/skills'
import Projects from '~/components/projects'
import Contact from '~/components/contact'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
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
