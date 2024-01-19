// Import Hooks
import { useCart } from "../context/CartContext";

// Import Components
import CartCard from "../components/CartCard";

// Import Lybraries
import { BsCurrencyDollar } from "react-icons/bs";
import { FaSlackHash } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";

// Import Modules
import styles from "../styles/cart.module.css";
import { Link } from "react-router-dom";

export default function Cart() {
	const [cart] = useCart();
	return (
		<div className={styles.cart}>
			<div className={styles.details}>
				<div>
					<BsCurrencyDollar /> Total : <p>{cart.total.toFixed(2)} $</p>
				</div>
				<div>
					<FaSlackHash /> Quantity : <p>{cart.quantity}</p>
				</div>
				<div>
					<MdPendingActions /> Status : 
				</div>
			</div>
			<ul className={styles.productList}>
				{!Object.keys(cart.products).length && (
					<div>
						<h2>Your Cart Is Empty ...</h2>
						<Link to="/">
							<h2>Back To Products</h2>
						</Link>
					</div>
				)}
				{Object.entries(cart.products).map((item, i) => {
					return <CartCard key={i} item={item} />;
				})}
			</ul>
		</div>
	);
}
