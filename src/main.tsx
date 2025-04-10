import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./shared/styles/theme";
import GlobalStyle from "./shared/styles/globalStyles";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
<StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>           
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
