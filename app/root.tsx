import { cssBundleHref } from '@remix-run/css-bundle'
import {
  redirect,
  type ActionFunctionArgs,
  type LinksFunction,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import styles from './style.css'
import Layout from './components/layout'
import sendMail from './services/sendMail'

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: 'stylesheet', href: cssBundleHref },
        { rel: 'stylesheet', href: styles },
        {
          rel: 'preload',
          href: 'Hubot-Sans.woff2',
          as: 'font',
          type: 'font/woff2',
          // crossorigin: 'anonymous',
        },
      ]
    : [
        { rel: 'stylesheet', href: styles },
        {
          rel: 'preload',
          href: 'Hubot-Sans.woff2',
          as: 'font',
          type: 'font/woff2',
          // crossorigin: 'anonymous',
        },
      ]),
]

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData()
  console.log(body)
  const data = Object.fromEntries(body)
  console.log(data)
  const isSent = await sendMail(data)

  if (isSent) return redirect('/thankyou')
  else return redirect('/error')
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
