import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootBoundary from "../components/ErrorElement";
import AddRooms from "../pages/AddRooms";
import Home from "../pages/Home";
import OurRooms from "../pages/OurRooms";
import Page404 from "../pages/Page404";
import RoomDetails from "../pages/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RootBoundary />,
    children: [
      { path: "/", index: true, element: <Home /> },
      {
        path: "/our-rooms",
        element: <OurRooms />,
      },
      {
        path: "/our-rooms/:id",
        element: <RoomDetails />,
      },
      {
        path: "/add-rooms",
        element: <AddRooms />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
