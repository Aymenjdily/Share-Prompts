import Navbar from '@components/Navbar'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
  title: "Prompts",
  description: "Discover & Share Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout