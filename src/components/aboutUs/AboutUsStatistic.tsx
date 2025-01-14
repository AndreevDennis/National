import React, { FC, useEffect } from "react";

import { useElementOnScreen } from "../../hooks/useElementOnScreen";

import { AboutUsType } from "../../utils/translation";

type AboutUsStatisticProps = {
	language: "en" | "ua";
	translation: AboutUsType;
};

function animateValue(obj: HTMLSpanElement, start: number, end: number, duration: number, fixedPoint = false) {
	let startTimestamp: DOMHighResTimeStamp | null = null;

	const step = (timestamp: DOMHighResTimeStamp) => {
		if (!startTimestamp) startTimestamp = timestamp;

		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		const value = fixedPoint
			? Math.fround(progress * (end - start) + start)
			: Math.floor(progress * (end - start) + start);

		const finalValue = value < 10 && !fixedPoint ? `0${value}` : value.toFixed(fixedPoint ? 1 : 0);

		obj.innerHTML = value > end ? end.toFixed(fixedPoint ? 1 : 0) : finalValue;

		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

export const AboutUsStatistic: FC<AboutUsStatisticProps> = ({ language, translation }) => {
	const [aboutUsStatistic1Ref, isVisible1] = useElementOnScreen({ threshold: 0.5 });
	const [aboutUsStatistic2Ref, isVisible2] = useElementOnScreen({ threshold: 0.5 });
	const [aboutUsStatistic3Ref, isVisible3] = useElementOnScreen({ threshold: 0.5 });

	useEffect(() => {
		if (isVisible1 && aboutUsStatistic1Ref.current) {
			animateValue(aboutUsStatistic1Ref.current, 0, 30, 1500);
		}
	}, [isVisible1, aboutUsStatistic1Ref]);

	useEffect(() => {
		if (isVisible2 && aboutUsStatistic2Ref.current) {
			animateValue(aboutUsStatistic2Ref.current, 0, 20, 1500);
		}
	}, [isVisible2, aboutUsStatistic2Ref]);

	useEffect(() => {
		if (isVisible3 && aboutUsStatistic3Ref.current) {
			animateValue(aboutUsStatistic3Ref.current, 0, 2.5, 1500, true);
		}
	}, [isVisible3, aboutUsStatistic3Ref]);

	return (
		<section className="aboutUsStatistic">
			<div className="container">
				<div className="aboutUsStatistic__wrapper">
					<p className="aboutUsStatistic__item">
						<span className="aboutUsStatistic__item--active">
							<span ref={aboutUsStatistic1Ref}>0</span>+
						</span>
						{translation["statistic1"][language]}
					</p>
					<p className="aboutUsStatistic__item">
						<span className="aboutUsStatistic__item--active">
							<span ref={aboutUsStatistic2Ref}>0</span>
							{language === "en" ? "t" : "т"}
						</span>
						{translation["statistic2"][language]} <br /> {translation["statistic3"][language]}
					</p>
					<p className="aboutUsStatistic__item">
						<span className="aboutUsStatistic__item--active">
							<span ref={aboutUsStatistic3Ref}>0</span>
							{language === "en" ? "k m2" : "к м2"}
						</span>
						{translation["statistic4"][language]} <br /> {translation["statistic5"][language]}
					</p>
				</div>
			</div>
		</section>
	);
};
