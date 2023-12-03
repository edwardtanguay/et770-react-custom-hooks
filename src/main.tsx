import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageToggle } from "./pages/PageToggle.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageLocalStorage } from "./pages/PageLocalStorage.tsx";
import { PageFetch } from "./pages/PageFetch.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/fetch",
				element: <PageFetch />,
			},
			{
				path: "toggle",
				element: <PageToggle />,
			},
			{
				path: "local-storage",
				element: <PageLocalStorage />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/toggle" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
