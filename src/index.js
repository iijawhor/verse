import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { firebaseStore } from "./store/firebaseStore";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { Authentication, AuthenticationPage, Loading, SignIn } from "./exports";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: []
  },
  {
    path: "/home",
    element: <Home />
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={firebaseStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
