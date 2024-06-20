import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { RoutePath } from "./config/routes";
import About from "./modules/about";
import ContactUs from "./modules/contact-us";
import Home from "./modules/home";
import Service from "./modules/services";
import { Theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline>
          <Header />
        </CssBaseline>
        <Routes>
          <Route path={RoutePath.Home} element={<Home />} />
          <Route path={RoutePath.Services} element={<Service />} />
          <Route path={RoutePath.About} element={<About />} />
          <Route path={RoutePath.Contact} element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
