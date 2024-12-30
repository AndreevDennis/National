import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = (options: IntersectionObserverInit) => {
	const containerRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	const callbackFunction = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		const [entry] = entries;
		if (entry.isIntersecting) {
			setIsVisible(entry.isIntersecting);
			observer.unobserve(entry.target);
		}
	};

	useEffect(() => {
		const container = containerRef.current;

		const observer = new IntersectionObserver(callbackFunction, options);

		if (container) observer.observe(container);

		return () => {
			if (container) observer.unobserve(container);
		};
	}, [containerRef, options]);

	return [containerRef, isVisible] as const;
};
