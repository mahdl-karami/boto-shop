import { useCart } from "../context/CartContext";

export default function Cart() {
	const [cart] = useCart();
	return (
		<div>
			<ul>
				{Object.entries(cart.products).map((item) =>{
					const {id , title, image , count} = item[1];
					return (
						<li className="" key={id}>
							<h2>{title}</h2>
							<h1>{count}</h1>
						</li>
					)
				})}
			</ul>
		</div>
	);
}
