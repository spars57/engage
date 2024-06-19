import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/header";
import { Theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <Header />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
