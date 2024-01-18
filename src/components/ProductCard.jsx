// Import Hooks
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

// Import Modules
import styles from "../styles/card.module.css";

// Import Components
import CardPanel from "./CardPanel";

export default function ProductCard({ product, product: { title, image, price, id } }) {
	const [cart, setCart] = useCart(); // Using From Cart Context
	const unicName = `product${id}`;
	const [count, setCount] = useState(cart[unicName] ? cart[unicName].count : 0);
	const removeHandler = () => {
		delete cart[unicName];
		setCart({ type: "addToCart", payload: cart });
	};
	useEffect(() => {
		// Update Count In Ontext (From Component to Contex)
		if (count != 0) {
			setCart({ type: "changeCart", payload: { id: unicName, value: { ...product, ["count"]: count } } });
		}
	}, [count]);
	return (
		<div className={styles.card}>
			<div style={{ textAlign: "center" }}>
				<img src={image} alt="Product Image" />
			</div>
			<h3>{title.split(" ").slice(0, 3).join(" ")}</h3>
			<h5>{price} $</h5>
			<CardPanel count={count} setCount={setCount} removeHandler={removeHandler} id={id} />
		</div>
	);
}
