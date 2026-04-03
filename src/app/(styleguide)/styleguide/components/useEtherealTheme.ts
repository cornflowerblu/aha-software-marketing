"use client";

import { useCallback, useEffect, useState } from "react";

export const ETHEREAL_THEME_KEY = "ea-theme";

export function useEtherealTheme() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem(ETHEREAL_THEME_KEY);
		if (stored === "dark") setIsDark(true);
	}, []);

	const toggleTheme = useCallback(() => {
		setIsDark((prev) => {
			const next = !prev;
			localStorage.setItem(ETHEREAL_THEME_KEY, next ? "dark" : "light");
			return next;
		});
	}, []);

	return { isDark, toggleTheme };
}
