import styles from "../styles/products.module.css";
import { TbCategory } from "react-icons/tb";
import { useShopContext } from "../context/ShopContext";

export default function Categoris() {
	const { dispatch } = useShopContext();
	// Functions
	const filteringHandler = ({ target: { innerText, tagName } }) => {
		if (tagName !== "LI") {
			return;
		}
		dispatch({ type: "setCategory", payload: innerText.toLowerCase() });
	};
	return (
		<div className={styles.category}>
			<span>
				<TbCategory />
				<p>Categoris</p>
			</span>
			<ul onClick={filteringHandler}>
				<li>All</li>
				<li>Electronics</li>
				<li>Jewelery</li>
				<li>{"Men's Clothing"}</li>
				<li>{"Women's Clothing"}</li>
			</ul>
		</div>
	);
}
