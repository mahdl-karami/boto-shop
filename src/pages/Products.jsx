/* eslint-disable react-hooks/exhaustive-deps */
// Import Libraryes
import { useEffect } from "react";
import API from "../services/AxiosConfig";

export default function Products({ dispatch, data }) {
	useEffect(() => {
		const getProducts = async () => {
			// Fetching API By Axios From AxiosConfig.js
			const res = await API.get("/products");
			dispatch({ type: "fetchAPI", payload: res });
		};
		getProducts();
	}, []);
	return (
		<div>
			<button onClick={() => console.log(data)}>Log API Response</button>
		</div>
	);
}
