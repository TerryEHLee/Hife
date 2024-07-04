import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/login/ui/page/Page";
import { MainPage } from "../pages/main";
import { SignupPage } from "../pages/signup";

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
        {
          path: "/signup",
          element: <SignupPage />,
        },
      ],
    },
  ]);
