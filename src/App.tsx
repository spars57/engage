import { CssBaseline, ThemeProvider } from "@mui/material";
import Banner from "./components/banner";
import Companies from "./components/companies";
import Footer from "./components/footer";
import Header from "./components/header";
import Services from "./components/services/social-media-management";
import { Theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <Header />
      </CssBaseline>
      <Banner />
      <Companies />
      <Services />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
