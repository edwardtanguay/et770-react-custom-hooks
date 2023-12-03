/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url:string) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(url);
			const _items = response.data;
			setItems(_items);
		})();
	}, []);

	return { items };
}