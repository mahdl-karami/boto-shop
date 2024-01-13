/* eslint-disable react-hooks/exhaustive-deps */

// Import Components
import SearchBar from "../components/SearchBar";

// Import Hooks
import { useContext } from "react";

// Import Modules
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import styles from "../styles/products.module.css";
import { TbCategory } from "react-icons/tb";

export default function Products() {
	const {
		data: { products },
	} = useContext(ShopContext);
	return (
		<>
			<SearchBar />
			<div className={styles.products}>
				<div className={styles.productsList}>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
				<div className={styles.category}>
						<span>
							<TbCategory />
							<p>Categoris</p>
						</span>
						<ul>
							<li>All</li>
							<li>Electronics</li>
							<li>Jewelery</li>
							<li>{"men's"}</li>
							<li>{"women's"}</li>
						</ul>
				</div>
			</div>
		</>
	);
}
