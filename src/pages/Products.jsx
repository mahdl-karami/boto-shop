/* eslint-disable react-hooks/exhaustive-deps */
// Import Hooks
import { useContext } from "react";

// Import Modules
import { ProductsContext } from "../context/ProductsContext";

export default function Products() {
	const Context = useContext(ProductsContext);
	return (
		<div>
			<button onClick={() => console.log(Context.data)}>Log API Response</button>
		</div>
	);
}
