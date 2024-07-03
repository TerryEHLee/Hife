import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/login/ui/page/Page";
import { MainPage } from "../pages/main";

export const appRouter = () =>
  createBrowserRouter([
    {
      // element: baseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
