import { createHashRouter } from "react-router";
import HomePage from "./pages/home/home";

export const routes = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
