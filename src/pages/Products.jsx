/* eslint-disable react-hooks/exhaustive-deps */

// Import Components
import SearchBar from "../components/SearchBar";

// Import Hooks
import { useContext } from "react";

// Import Modules
import { ShopContext } from "../context/ShopContext";

export default function Products() {
	const { data } = useContext(ShopContext);
	return (
		<div>
			<SearchBar />
			<button onClick={() => console.log(data)}>Log API Response</button>
		</div>
	);
}
