const increaseHandler = (setCount) => {
	setCount((count) => count + 1);
};
const decreaseHandler = (setCount) => {
	setCount((count) => count - 1);
};

export { decreaseHandler, increaseHandler };
