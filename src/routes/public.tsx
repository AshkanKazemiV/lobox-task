import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { Routes } from "./urls";
import { TaskPage, WelcomeToMyTaskPage } from "../pages";

export const PublicRoutes: RouteObject[] = [
  {
    path: Routes.welcome,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <WelcomeToMyTaskPage />,
      },
      {
        path: Routes.task,
        element: <TaskPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={Routes.welcome} />,
  },
];
