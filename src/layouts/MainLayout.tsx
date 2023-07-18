import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
	return (
		<div className="bg-palette2 text-palette1 min-h-screen">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
