// Import Modules
import { Outlet } from "react-router-dom";
// Import Components
import Header from "../modules/Header";
import Footer from "../modules/Footer";

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
