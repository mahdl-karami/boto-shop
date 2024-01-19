// Import Hooks
import { useShopContext } from "../context/ShopContext";
// Import Modules
import styles from "../styles/layout.module.css";
// Import Lybraries
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
	const { dispatch } = useShopContext();
	return (
		<header className={styles.layout}>
			<h1
				onClick={() => {
					dispatch({ type: "setQuery", payload: { name: "search", value: "" } });
					dispatch({ type: "setQuery", payload: { name: "category", value: "all" } });
				}}
			>
				<Link to="/products">BotoShop</Link>
			</h1>
			<Link to="/cart">
				<button>
					<FaOpencart />
				</button>
			</Link>
		</header>
	);
}
