import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { MasterRouter } from "router/MasterRouter";
import ThemeProvider from "ThemeProvider";
function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={MasterRouter} />
    </ThemeProvider>
  );
}

export default App;
