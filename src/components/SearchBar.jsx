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
	const submitHandler=(e)=>{
		e.preventDefault();
	}
	return (
		<form className={styles.searchBar} style={{ margin: "2rem 0" }} onSubmit={submitHandler}>
			<input placeholder="Search Here" value={search} onChange={({ target }) => dispatch({ type: "setSearch", payload: target.value })} />
			<button onClick={() => dispatch({ type: "setQuery", payload: {name: "search" , value : search.toLowerCase()} })}>
				<FiSearch />
			</button>
		</form>
	);
}
