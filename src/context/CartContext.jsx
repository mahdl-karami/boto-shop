import React, { useReducer, useContext } from "react";

const CartContext = React.createContext();

const initialState = {
	quantity: 0,
};
const reducer = (state, { type, payload }) => {
	switch (type) {
		case "addToCart":
			return { ...payload };
		case "changeCart":
			return { ...state, [payload.id]: payload.value };
		case "changeQuantity":
			return { ...state };
		case "increase":
			console.log(state);
			console.log(payload);
			return [payload];
		default:
			console.log("Invalid Action");
	}
};

export default function CartContextProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <CartContext.Provider value={{ state, dispatch }}>{props.children}</CartContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
	const { state, dispatch } = useContext(CartContext);
	return [state, dispatch];
};
