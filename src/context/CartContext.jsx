import React, { useReducer, useContext, useEffect } from "react";

const CartContext = React.createContext();

const initialState = {
	quantity: 0,
	total: 0,
	products: {},
};
const reducer = (state, { type, payload }) => {
	switch (type) {
		case "addToCart":
			return { ...payload };
		case "changeCart":
			return { ...state, products: { ...state.products, [payload.id]: payload.value } };
		case "changeQuantity":
			return { ...state, quantity: payload };
		case "changeTotal":
			return { ...state, total: payload };
		default:
			console.log("Invalid Action");
	}
};

export default function CartContextProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		const cartCoantity = Object.entries(state.products).map((item) => item[1].count);
		const totalPrice = Object.entries(state.products).map((item) => item[1].price * item[1].count);
		dispatch({ type: "changeQuantity", payload: cartCoantity.reduce((partialSum, a) => partialSum + a, 0) });
		dispatch({type: "changeTotal" , payload: totalPrice.reduce((partialSum, a) => partialSum + a, 0)})
		// dispatch({ type: "changeTotal", payload: totalPrice.reduce((partialSum, a) => partialSum + a, 0) });
	}, [state.products, Object.keys(state.products).length]);
	return <CartContext.Provider value={{ state, dispatch }}>{props.children}</CartContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
	const { state, dispatch } = useContext(CartContext);
	return [state, dispatch];
};
