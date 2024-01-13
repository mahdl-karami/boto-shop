// Import Modules
import styles from "../styles/layout.module.css";

export default function Footer() {
	return (
		<footer className={styles.layout}>
			<h3>
				Developer :{" "}
				<a href="https://github.com/mahdl-karami/" target="_blank" rel="noreferrer">
					mahdl-karami
				</a>{" "}
				| With Love
			</h3>
		</footer>
	);
}
