/* eslint-disable no-case-declarations */
// Import Hooks
import React, { useReducer, useEffect, useContext } from "react";

// Import Modules
import API from "../services/AxiosConfig";

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
			return { ...data, products: payload, isLoading: false };
		case "changeLoadingStatus":
			return { ...data, isLoading: payload };
		case "setSearch":
			return { ...data, search: payload.trimStart() };
		case "setQuery":
			console.log(data.query);
			const { name, value } = payload;
			return { ...data, query: { ...data.query, [name]: value } };
		default:
			console.log("Invalid Action");
			return { ...data };
	}
};

export default function ContextProvider({ children }) {
	// Fetching SideEffect ...
	useEffect(() => {
		const getProducts = async () => {
			// Fetching API By Axios From AxiosConfig.js
			try {
				dispatch({ type: "fetchAPI", payload: await API.get("/pro ducts") });
			} catch (error) {
				dispatch({ type: "changeLoadingStatus", payload: false });
				console.log(error.message);
			}
		};
		getProducts();
	}, []);
	// Filtring Products useEffect ...
	useEffect(() => {}, []);
	useContext;
	// Set Reducer Hook In ContextProvider
	const [data, dispatch] = useReducer(reducer, initialState);

	return <ShopContext.Provider value={{ data, dispatch }}>{children}</ShopContext.Provider>;
}

// Costum Hook For Context Using
// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = () => {
	const context = useContext(ShopContext);
	return context;
};
