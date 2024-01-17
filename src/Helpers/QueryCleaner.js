/* eslint-disable no-unused-vars */
export const cleaner = (query) => {
	var newQuery = query;
	if (!query.search) {
		const { search, ...rest } = query;
		newQuery = { ...rest };
	}
	if (query.category == "all") {
		const { category, ...rest } = newQuery;
		newQuery = { ...rest };
	}
	return newQuery;
};
