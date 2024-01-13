// Import Libraris
import { Link } from "react-router-dom";
// Import Modules
import styles from "../styles/card.module.css";
// Import Icons
import { BiCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";

export default function ProductCard({ product: { title, image, price, id } }) {
	return (
		<div className={styles.card}>
			<div style={{ textAlign: "center" }}>
				<img src={image} alt="Product Image" />
			</div>
			<h3>{title.split(" ").slice(0, 3)}</h3>
			<h5>{price} $</h5>
			<div className={styles.icons}>
				<button>
					<Link to={`/products/${id}`}>
						<TbListDetails />
					</Link>
				</button>
				<button>
					<BiCartAdd />
				</button>
			</div>
		</div>
	);
}

// {title.split(" ").slice(0, 3)}
