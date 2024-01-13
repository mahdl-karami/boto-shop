import React from "react";
// Import Hooks
import { useReducer } from "react";
import { useEffect } from "react";

// Import Modules
import API from "../services/AxiosConfig";

// Create Context
export const ShopContext = React.createContext();

// Set Reducer Values
const initialState = {
	isLoading: true,
	products: [],
	search: "",
	category: "all",
};
const reducer = (data, { payload, type }) => {
	switch (type) {
		case "fetchAPI":
			return { ...data, products: payload, isLoading: false };
		case "setSearchValue":
			return { ...data, search: payload };
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
	return <ShopContext.Provider value={{ data, dispatch }}>{children}</ShopContext.Provider>;
}
