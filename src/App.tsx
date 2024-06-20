import { CssBaseline, ThemeProvider } from "@mui/material";
import Banner from "./components/banner";
import Companies from "./components/companies";
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
    </ThemeProvider>
  );
}

export default App;
