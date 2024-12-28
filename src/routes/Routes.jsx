import { createBrowserRouter } from "react-router";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
