import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { } from '@material-ui/core/styles';

import Features from "./pages/Features";
import "./index.scss";
import iranSans from "./assets/fonts/iransans/eot/IRANSansWeb_Medium.eot";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [iranSans],
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Features />{" "}
    </ThemeProvider>
  );
}
