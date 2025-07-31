import { FC, JSX } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./public";

export const AppRoutes: FC = (): JSX.Element => {
  const routes = createBrowserRouter(PublicRoutes);

  return <RouterProvider router={routes} />;
};
