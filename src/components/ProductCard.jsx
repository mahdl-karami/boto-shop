// Import Modules
import styles from "../styles/card.module.css";
import { Link } from "react-router-dom";

// Import Lybraries
import { BiCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";

export default function ProductCard({ product: { title, image, price, id } }) {
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
				<button>
					<BiCartAdd />
				</button>
			</div>
		</div>
	);
}
