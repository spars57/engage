import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import { RoutePath } from './config/routes'
import { LanguageProvider } from './context/language.tsx'
import About from './modules/about'
import ContactUs from './modules/contact-us'
import ContactUsFixed from './modules/contact-us-fixed/Contact-us-fixed.tsx'
import Home from './modules/home'
import NotAvailable from './modules/not-available'
import Service from './modules/services'
import Talent from './modules/talent/index.tsx'
import { Theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <LanguageProvider>
        <BrowserRouter>
          <CssBaseline>
            <Header />
          </CssBaseline>
          <Routes>
            <Route path={RoutePath.Home} element={<Home />} />
            <Route path={RoutePath.Services} element={<Service />} />
            <Route path={RoutePath.About} element={<About />} />
            <Route path={RoutePath.Contact} element={<ContactUs />} />
            <Route path={RoutePath.Talent} element={<Talent />} />
            <Route path={'*'} element={<NotAvailable />} />
          </Routes>
          <ContactUsFixed />
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
