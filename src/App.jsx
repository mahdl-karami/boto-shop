// Import Libraryes
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Import Pages
import Layout from "./template/Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import ProductDetails from "./pages/ProductDetails";
// Import ContextsProvider
import ContextProvider from "./context/ShopContext";
import CartContextProvider from "./context/CartContext";

export default function App() {
	return (
		<Router>
			{/* Wrapping Context To Routs */}
			<ContextProvider>
				<CartContextProvider>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Navigate to="/products" />} />
							<Route path="/products" element={<Products />} />
							<Route path="/products/:id" element={<ProductDetails />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/*" element={<NoPage />} />
						</Route>
					</Routes>
				</CartContextProvider>
			</ContextProvider>
		</Router>
	);
}
