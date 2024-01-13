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
import { RotatingLines } from "react-loader-spinner";

export default function Products() {
	const {
		data: { products, isLoading },
	} = useContext(ShopContext);
	return (
		<>
			<SearchBar />
			<div className={styles.products}>
				{isLoading ? (
					<div className={styles.loading}>
						<RotatingLines visible={true} height="200" width="200" color="grey" strokeWidth="5" strokeColor="#6433ff" animationDuration="0.75" ariaLabel="rotating-lines-loading" />
					</div>
				) : (
					<div className={styles.productsList}>
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				)}
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
