/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = <T = unknown>(url:string) => {
	const [items, setItems] = useState<T>([] as T);

	useEffect(() => {
		(async () => {
			const response = await axios.get(url);
			const _items = response.data;
			setItems(_items);
		})();
	}, []);

	return { items };
}