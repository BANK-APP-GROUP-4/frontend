import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
