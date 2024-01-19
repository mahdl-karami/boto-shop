// Import Hooks
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

// Import Libraries
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineMinusSm, HiOutlinePlus } from "react-icons/hi";

export default function CartCard({ item }) {
	const [cart, setCart] = useCart(); // Using From Cart Context
	const product = item[1];
	const unicName = item[0];
	const { title, count, image } = product;
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
				<img src={image} alt="Product Image" />
				<h2>{title.split(" ").slice(0, 3).join(" ")}</h2>
				<div>
					{counter == 1 ? (
						<button onClick={() => removeHandler()}>
							<RiDeleteBinLine />
						</button>
					) : (
						<button onClick={() => setCounter((counter) => counter - 1)}>
							<HiOutlineMinusSm />
						</button>
					)}
					<p>{count}</p>
					<button onClick={() => setCounter((counter) => counter + 1)}>
						<HiOutlinePlus />
					</button>
				</div>
			</li>
		</div>
	);
}
