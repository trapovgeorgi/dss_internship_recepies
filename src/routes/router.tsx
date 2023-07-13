import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
    errorElement: <ErrorPage/>,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);
