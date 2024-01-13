/* eslint-disable react-hooks/exhaustive-deps */

// Import Components
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

// Import Hooks
import { useContext } from "react";

// Import Libraris
import { TbCategory } from "react-icons/tb";
import { RotatingLines } from "react-loader-spinner";

// Import Modules
import { ShopContext } from "../context/ShopContext";
import styles from "../styles/products.module.css";

export default function Products() {
	const {
		data: { products, isLoading, searchParams, setSearchParams },
	} = useContext(ShopContext);
	// Functions
	const filteringHandler = ({ target: { innerText, tagName } }) => {
		if (tagName !== "LI") {
			return;
		}
		setSearchParams({ category: innerText.toLowerCase() });
	};
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
						<p onClick={() => console.log(searchParams.toString())}>Categoris</p>
					</span>
					<ul onClick={filteringHandler}>
						<li>All</li>
						<li>Electronics</li>
						<li>Jewelery</li>
						<li>{"Men's Clothing"}</li>
						<li>{"Women's Clothing"}</li>
					</ul>
				</div>
			</div>
		</>
	);
}
