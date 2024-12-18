import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginSignupPage from "../pages/LoginSignupPage";
import ReadPage from "../pages/Read";
import ToBeReadPage from "../pages/ToBeReadPage";
import Search from "../pages/Search"
import Recommendations from "../pages/Recommendations";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/",
      element: <LoginSignupPage />
    },
  ];


  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/read",
          element: <ReadPage />,
        },
        {
          path: "/to-be-read",
          element: <ToBeReadPage />,
        },
        {
          path: "/recommended",
          element: <Recommendations />,
        },
        {
            path: "/search",
            element: <Search />,
          },
      ],
    },
  ];

  
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <div>Login</div>,
    },
  ];

 
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  
  return <RouterProvider router={router} />;
};

export default Routes;