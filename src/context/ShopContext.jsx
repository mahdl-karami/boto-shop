// Import Hooks
import React, { useReducer } from "react";
import { useEffect } from "react";

// Import Modules
import API from "../services/AxiosConfig";
import { useSearchParams } from "react-router-dom";

// Create Context
export const ShopContext = React.createContext();

// Set Reducer Values
const initialState = {
	isLoading: true,
	products: [],
	search: "",
	category: "all",
	searchParams: "",
	setSearchParams: "",
};
const reducer = (data, { payload, type }) => {
	switch (type) {
		case "fetchAPI":
			return { ...data, products: payload, isLoading: false };
		case "setSearchValue":
			return { ...data, search: payload.trimStart() };
		case "filter":
			return { ...data, category: payload };
		case "useSearchParams":
			return { ...data, searchParams: payload.searchParams, setSearchParams: payload.setSearchParams };
		default:
			console.log("Invalid Action");
			return { ...data };
	}
};

export default function ContextProvider({ children }) {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const getProducts = async () => {
			// Fetching API By Axios From AxiosConfig.js
			const res = await API.get("/products");
			dispatch({ type: "fetchAPI", payload: res });
		};
		getProducts();
		dispatch({ type: "useSearchParams", payload: { searchParams, setSearchParams } });
	}, []);
	const [data, dispatch] = useReducer(reducer, initialState);
	return <ShopContext.Provider value={{ data, dispatch }}>{children}</ShopContext.Provider>;
}
