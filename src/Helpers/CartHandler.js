const removeHandler = (cart, unicName, setCart) => {
	delete cart[unicName];
	setCart({ type: "addToCart", payload: cart });
};
const increaseHandler = (setCount) => {
	setCount((count) => count + 1);
};
const decreaseHandler = (setCount) => {
	setCount((count) => count - 1);
};

export { decreaseHandler, removeHandler, increaseHandler };
