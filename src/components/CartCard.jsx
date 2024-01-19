// Import Hooks
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartCard({ item }) {
	const [cart, setCart] = useCart(); // Using From Cart Context
	const product = item[1];
	const unicName = item[0];
	const { title, count } = product;
	const [counter, setCounter] = useState(count);
	useEffect(() => {
        if (count != 0) {
            // Dispatch Context Reducer
			setCart({ type: "changeCart", payload: { id: unicName, value: { ...product, ["count"]: counter } } });
		}
	}, [counter]);
	const removeHandler = () => {
		delete cart.products[unicName];
		setCart({ type: "addToCart", payload: cart });
	};
	return (
		<div>
			<li className="">
				{/* <img src={image} alt="Product Image" /> */}
				<h2>{title.split(" ").slice(0, 3).join(" ")}</h2>
				<button onClick={() => setCounter((counter) => counter + 1)}>+</button>
				<h2>count (FromCart) {count}</h2>
				{counter == 1 ? <button onClick={() => removeHandler()}>remove</button> : <button onClick={() => setCounter((counter) => counter - 1)}>-</button>}
			</li>
		</div>
	);
}
