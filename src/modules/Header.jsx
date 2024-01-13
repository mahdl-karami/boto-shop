// Import Modules
import styles from "../styles/layout.module.css";
// Import Lybraries
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className={styles.layout}>
			<h1>
				<Link to="/">BotoShop</Link>
			</h1>
			<button>
				<Link to="/cart">
					<FaOpencart />
				</Link>
			</button>
		</header>
	);
}
