import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from "./store";
import { Provider } from "react-redux";
import Measurements from "./components/Measurements";

const theme = createTheme({
  palette: {
    mode: "dark",
    // type: "light",
    secondary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Measurements />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
