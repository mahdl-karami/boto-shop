// Import Hooks & Context
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
// Import Style Mudoles & Icons
import styles from "../styles/searchBar.module.css";
import { ImSearch } from "react-icons/im";

export default function SearchBar() {
	const { data, dispatch } = useContext(ShopContext);
	return (
		<div className={styles.searchBar} style={{ margin: "2rem 0" }}>
			<input placeholder="Search Here" value={data.search} onChange={({ target }) => dispatch({ type: "setSearchValue", payload: target.value })} />
			<button>
				<ImSearch />
			</button>
		</div>
	);
}
