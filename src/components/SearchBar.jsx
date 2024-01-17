// Import Hooks
import { useShopContext } from "../context/ShopContext";

// Import Modules
import styles from "../styles/searchBar.module.css";

// Import Lybaries
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
	const {
		data: { search },
		dispatch,
	} = useShopContext();

	return (
		<div className={styles.searchBar} style={{ margin: "2rem 0" }}>
			<input placeholder="Search Here" value={search} onChange={({ target }) => dispatch({ type: "setSearch", payload: target.value })} />
			<button>
				<FiSearch />
			</button>
		</div>
	);
}
