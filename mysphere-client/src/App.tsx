import {
  createBrowserRouter,
  // Routes,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signup";
import Navigation from "./components/navigation";
import NotFoundPage from "./pages/not-found";
import { AuthProvider } from "./components/authProvider";
import ProtectedRoute from "./components/protectedRoute";
import ProfilePage from "./pages/profile";
import FeedPage from "./pages/feed";
import Messages from "./pages/messages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    // loader: rootLoader,
    children: [
      {
        path: "",
        element: <Navigation />,
        children: [
          {
            path: "",
            element: <FeedPage />
          },
          {
            path: "/messages",
            element: <Messages/>,
            // loader: eventLoader,
          },
          {
            path: "/:username",
            element: <ProfilePage />,
            // loader: eventLoader,
          },
          {
            path: "*",
            element: <NotFoundPage />,
            // loader: eventLoader,
          },
        ],
      }
    ]

  },
  {
    path: "/login",
    element: <LoginPage />
  }, {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "*",
    element: <NotFoundPage />,
    // loader: eventLoader,
  },
]);
function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
