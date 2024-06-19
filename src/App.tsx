import { CssBaseline, ThemeProvider } from "@mui/material";
import Banner from "./components/banner";
import Header from "./components/header";
import { Theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <Header />
      </CssBaseline>
      <Banner />
    </ThemeProvider>
  );
}

export default App;
