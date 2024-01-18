// Import Lybraries
import { TbShoppingBagCheck, TbListDetails } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineMinusSm, HiOutlinePlus } from "react-icons/hi";

// Import Modules
import styles from "../styles/card.module.css";
import { Link } from "react-router-dom";
import { decreaseHandler, increaseHandler } from "../Helpers/CartHandler";

export default function CardPanel({ count, setCount, removeHandler, id }) {
	return (
		<div className={styles.icons}>
			<Link to={`/products/${id}`}>
				<button>
					<TbListDetails />
				</button>
			</Link>

			<div className={styles.panel}>
				{!count && (
					<button onClick={() => increaseHandler(setCount)}>
						<TbShoppingBagCheck />
					</button>
				)}

				{count > 0 && (
					<div>
						{count == 1 ? (
							<button
								onClick={() => {
									removeHandler(), setCount(0);
								}}
							>
								<RiDeleteBinLine />
							</button>
						) : (
							<button onClick={() => decreaseHandler(setCount)}>
								<HiOutlineMinusSm />
							</button>
						)}
						<p>{count}</p>
						<button onClick={() => increaseHandler(setCount)}>
							<HiOutlinePlus />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
