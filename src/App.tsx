import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { RoutePath } from "./config/routes";
import Home from "./modules/home";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
