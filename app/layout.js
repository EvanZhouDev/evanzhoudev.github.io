import { Roboto } from 'next/font/google'
import classNames from 'classnames'
import './globals.css'
import Titlebar from './components/titlebar'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: "EvanZhouDev",
  description: "EvanZhouDev's Blog",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(roboto.className, "bg-gray-100")}>
        <Titlebar />
        <div className="mt-[60px]">
          {children}
        </div>
      </body>
    </html>
  )
}
