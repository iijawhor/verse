import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { firebaseStore } from "./store/firebaseStore";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import {
  Authentication,
  AuthenticationPage,
  Loading,
  SignIn,
  Banner,
  CreateStory,
  AuthLayout,
  SignUp
} from "./exports";

const Home = React.lazy(() => import("./pages/Home/Home"));
const PostDetails = React.lazy(() =>
  import("./components/PostDetails/PostDetails")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/create-story",
    element: <CreateStory />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/banner",
    element: <Banner />
  },
  {
    path: "/post-details",
    element: (
      <Suspense fallback={<Loading />}>
        <PostDetails />
      </Suspense>
    )
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={firebaseStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
