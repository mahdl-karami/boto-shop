/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

// Import Components
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import Categoris from "../components/Categoris";

// Import Hooks
import { useShopContext } from "../context/ShopContext";

// Import Libraris
import { RotatingLines } from "react-loader-spinner";

// Import Modules
import styles from "../styles/products.module.css";

export default function Products() {
	const {
		data: { products, isLoading },
	} = useShopContext();

	return (
		<>
			<SearchBar />
			<div className={styles.products}>
				<div className={isLoading ? styles.loading : styles.none}>
					<RotatingLines visible={isLoading} height="200" width="200" color="grey" strokeWidth="5" strokeColor="#6433ff" animationDuration="0.75" ariaLabel="rotating-lines-loading" />
				</div>
				<div className={isLoading ? styles.none : styles.productsList}>
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
				<Categoris />
			</div>
		</>
	);
}
