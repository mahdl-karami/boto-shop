import React from "react";
// Import Hooks
import { useReducer } from "react";
import { useEffect } from "react";

// Import Modules
import API from "../services/AxiosConfig";

// Create Context
export const ProductsContext = React.createContext();

// Set Reducer Values
const initialState = {
	isLoading: true,
	products: [],
};
const reducer = (data, { payload, type }) => {
	switch (type) {
		case "fetchAPI":
			return { ...data, products: payload };
	}
};

export default function ContextProvider({ children }) {
	useEffect(() => {
		const getProducts = async () => {
			// Fetching API By Axios From AxiosConfig.js
			const res = await API.get("/products");
			dispatch({ type: "fetchAPI", payload: res });
		};
		getProducts();
	}, []);
	const [data, dispatch] = useReducer(reducer, initialState);
	return <ProductsContext.Provider value={{ data, dispatch }}>{children}</ProductsContext.Provider>;
}
