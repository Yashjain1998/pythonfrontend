import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/signUp';
import Dashboard  from './Components/dashboard';




const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,

  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/user",
    element: <Dashboard />
  },
])


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
