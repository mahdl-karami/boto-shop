// Import Libraryes
import { Outlet } from "react-router-dom";
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
