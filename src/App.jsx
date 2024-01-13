// Import Libraryes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Import Pages
import Layout from "./template/Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import ProductDetails from "./pages/ProductDetails";
// Import Contexts
import ContextProvider from "./context/ShopContext";

export default function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Navigate to="/products" />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/:id" element={<ProductDetails />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}
