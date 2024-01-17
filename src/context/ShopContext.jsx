/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-case-declarations */
// Import Hooks
import React, { useReducer, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

// Import Modules
import API from "../services/AxiosConfig";
import { filter } from "../Helpers/Filtering";
import { cleaner } from "../Helpers/QueryCleaner";

// Create Context
const ShopContext = React.createContext(); // For Use   --->   Cosum Hook Created (useShopContext)

// Set Reducer InitialState & Reducer Function
const initialState = {
	isLoading: true,
	products: [],
	filteredProducts: [],
	search: "",
	query: {
		search: "",
		category: "all",
	},
};
const reducer = (data, { payload, type }) => {
	switch (type) {
		case "fetchAPI":
			return { ...data, products: payload, filteredProducts: payload, isLoading: false };
		case "filterProducts":
			return { ...data, filteredProducts: filter(data.products, data.query) };
		case "changeLoadingStatus":
			return { ...data, isLoading: payload };
		case "setSearch":
			return { ...data, search: payload.trimStart() };
		case "setQuery":
			const { name, value } = payload;
			return { ...data, query: { ...data.query, [name]: value } };
		default:
			console.log("Invalid Action");
			return { ...data };
	}
};

export default function ContextProvider({ children }) {
	// Set Reducer Hook In ContextProvider
	const [data, dispatch] = useReducer(reducer, initialState);
	// Set URL Parametters
	// eslint-disable-next-line no-unused-vars
	const [searchParams, setSearchParams] = useSearchParams();
	// Fetching SideEffect ...
	useEffect(() => {
		const getProducts = async () => {
			// Fetching API By Axios From AxiosConfig.js
			try {
				dispatch({ type: "fetchAPI", payload: await API.get("/products") });
			} catch (error) {
				dispatch({ type: "changeLoadingStatus", payload: false });
				console.log(error.message);
			}
		};
		getProducts();
	}, []);
	// Filtering And Updadte URL
	useEffect(() => {
		// Filtering
		dispatch({ type: "filterProducts", payload: data.query });
		// Update URL
		setSearchParams(cleaner(data.query));
	}, [data.query]);

	return <ShopContext.Provider value={{ data, dispatch }}>{children}</ShopContext.Provider>;
}

// Costum Hook For Context Using
// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
	const context = useContext(ShopContext);
	return context;
};
