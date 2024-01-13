import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import styles from "../styles/details.module.css";
import { IoPricetagOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ProductDetails() {
	const { data } = useContext(ShopContext);
	const urlParams = useParams();
	const { image, title, description, category, price } = !data.isLoading && data.products.filter((product) => product.id == urlParams.id)[0];
	return (
		<>
			{data.isLoading ? (
				<h1>Loading ...</h1>
			) : (
				<div className={styles.container}>
					<img src={image} alt="" className={styles.image} />
					<div className={styles.details}>
						<h3>{title}</h3>
						<p>{description}</p>
						<div className={styles.datailsFooter}>
							<span>
								<div><TbCategory /> {category}</div>
								<div><IoPricetagOutline /> {price}</div>
							</span>
							<Link to="/">
								<button>Back To Shop</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
