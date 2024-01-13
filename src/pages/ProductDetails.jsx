// Import Hooks
import { useShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

// Import Modules
import styles from "../styles/details.module.css";
import { Link } from "react-router-dom";

// Import Libraries
import { IoPricetagOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";

export default function ProductDetails() {
	// Import Context Data
	const {
		data: { products, isLoading },
	} = useShopContext();
	// Find Product By ID (ID --->  useParams)
	const urlParams = useParams();
	const { image, title, description, category, price } = !isLoading && products.filter((product) => product.id == urlParams.id)[0];
	return (
		<div className={styles.container}>
			<img src={image} alt="" className={styles.image} />
			<div className={styles.details}>
				{isLoading && <h1>Loading Please Wait ...</h1>}
				<h3>{title}</h3>
				<p>{description}</p>
				<div className={styles.datailsFooter}>
					<span>
						<div>
							<TbCategory /> {category}
						</div>
						<div>
							<IoPricetagOutline /> {price}
						</div>
					</span>
					<Link to="/">
						<button>Back To Shop</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
