// Import Modules
import styles from "../styles/layout.module.css";
// Import Lybraries
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className={styles.layout}>
			<h1>
				<a href="products">BotoShop</a>
			</h1>
			<Link to="/cart">
				<button>
					<FaOpencart />
				</button>
			</Link>
		</header>
	);
}
