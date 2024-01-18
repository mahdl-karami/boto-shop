/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Import Hooks
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

// Import Modules
import styles from "../styles/card.module.css";
import { Link, useLinkClickHandler } from "react-router-dom";
import { decreaseHandler, increaseHandler, removeHandler } from "../Helpers/CartHandler";

// Import Lybraries
import { TbShoppingBagCheck, TbListDetails } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";

export default function ProductCard({ product, product: { title, image, price, id } }) {
	const unicName = `product${id}`;
	const [cart, setCart] = useCart();
	const [count, setCount] = useState(cart[unicName] ? cart[unicName].count : 0);
	useEffect(() => {
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
			<div className={styles.icons}>
				<Link to={`/products/${id}`}>
					<button>
						<TbListDetails />
					</button>
				</Link>

				<div>
					{!count && (
						<button onClick={() => increaseHandler(setCount)}>
							<TbShoppingBagCheck />
						</button>
					)}

					{count > 0 && (
						<div>
							{count == 1 ? (
								<button
									onClick={() => {
										removeHandler(cart, unicName, setCart), setCount(0);
									}}
								>
									<RiDeleteBinLine />
								</button>
							) : (
								<button onClick={() => decreaseHandler(setCount)}>-</button>
							)}
							<button onClick={() => console.log(cart)}>{count}</button>
							<button onClick={() => increaseHandler(setCount)}>+</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
