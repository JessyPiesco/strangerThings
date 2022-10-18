import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Main } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      {/* <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} /> */}
    </Route>
  )
);
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);


root.render(<RouterProvider router={router}></RouterProvider>);
