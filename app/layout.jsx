import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Seed Tracking System",
    description: "MFTSC"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
          <Provider>
            <Nav />
            <main className='app'>
                {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout