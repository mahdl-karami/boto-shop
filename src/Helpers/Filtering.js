export const filter = (products, { search, category }) => {
	function searchHandler(initialProducts) {
		if (!search) return initialProducts;
		else {
			// return products.filter();
            return(initialProducts.filter((p)=> p.title.split(" ").slice(0, 3).join(" ").toLowerCase().includes(search)));
		}
	}
	function categoryHandler(initialProducts) {
        if (category == "all") return initialProducts;
        else{
            return(initialProducts.filter((p)=> p.category.toLowerCase().includes(category)));
        }
    }

	return(categoryHandler(searchHandler(products)));
};