import React from "react";
import "./App.css";
import Route from "./routes/Route";
import { AuthProvider } from "../src/context/Auth";
function App() {
  return (
    <>
      <AuthProvider>
        <Route />
      </AuthProvider>
    </>
  );
}

export default App;
