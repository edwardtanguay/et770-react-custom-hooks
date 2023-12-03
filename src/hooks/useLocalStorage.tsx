import { useState } from "react";

export const useLocalStorage = <T = unknown>(initialValue: T) => {
	const [obj, setObj] = useState<T>(initialValue);

	const save = () => {
		const _obj = structuredClone(obj);
		setObj(_obj);
	}

	return [obj, save];
}