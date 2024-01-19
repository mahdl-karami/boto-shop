import CartCard from "../components/CartCard";
import { useCart } from "../context/CartContext";

export default function Cart() {
	const [cart, setCart] = useCart();
	return (
		<div className="">
			<div>details</div>
			<ul>
				{Object.entries(cart.products).map((item, i) => {
					return <CartCard key={i} item={item} />;
				})}
			</ul>
		</div>
	);
}
