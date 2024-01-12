// Import Libraryes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Import Pages
import Layout from "./template/Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import ProductDetailes from "./pages/ProductDetailes";
import { useReducer } from "react";

// Set Reducer Values
const initialState = {
	isLoading: true,
	products: [],
};
const reducer = (state, {payload , type}) => {
	switch (type) {
		case "fetchAPI":
			return { ...state, products: payload };
	}
};

export default function App() {
	const [data, dispatch] = useReducer(reducer, initialState);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="/products" />} />
					<Route path="/products" element={<Products data={data} dispatch={dispatch} />} />
					<Route path="/products/:id" element={<ProductDetailes />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
