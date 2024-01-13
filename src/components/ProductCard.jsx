import styles from "../styles/card.module.css";
import { BiCartAdd } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
export default function ProductCard({ product: { title, image, price } }) {
	return (
		<div className={styles.card}>
			<div style={{ textAlign: "center" }}>
				<img src={image} alt="Product Image" />
			</div>
			<h3>{title.split(" ").slice(0, 3)}</h3>
			<h5>{price} $</h5>
			<div className={styles.icons}>
				<button>
					<TbListDetails />
				</button>
				<button>
					<BiCartAdd />
				</button>
			</div>
		</div>
	);
}

// {title.split(" ").slice(0, 3)}
