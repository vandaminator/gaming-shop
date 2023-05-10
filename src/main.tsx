import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import './index.css'

import store from "./store";
import { Provider } from "react-redux";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  navyBlue: "#213A52",
  accentBlue: "#00BFFF",
  lightOrange: "#FFA800",
  darkGrey: "#333333",
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
