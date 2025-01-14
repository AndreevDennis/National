import React, { FC } from "react";
import Image from "next/image";

import { AboutUsType } from "../../utils/translation";

type AboutUsValuesProps = {
	language: "en" | "ua";
	translation: AboutUsType;
};

export const AboutUsValues: FC<AboutUsValuesProps> = ({ language, translation }) => {
	return (
		<section className="aboutUsValues" aria-labelledby="values">
			<svg className="aboutUsValues__dec" height="1715" width="262" aria-hidden="true">
				<use xlinkHref="/img/names.svg#blogName" />
			</svg>
			<div className="container">
				<h2 className="aboutUsValues__title" id="values">
					{translation["valuesTitle"][language]}
				</h2>
				<div className="aboutUsValues__cards">
					<article className="aboutUsValues__card">
						<div className="aboutUsValues__picture">
							<Image fill alt="" aria-hidden={true} className="aboutUsValues__img" src="/img/aboutUs/values/1.jpg" />
						</div>
						<div className="aboutUsValues__content">
							<h3 className="aboutUsValues__subTitle">{translation["valuesSubTitle1"][language]}</h3>
							<p className="aboutUsValues__text">{translation["valuesText1"][language]}</p>
						</div>
					</article>
					<article className="aboutUsValues__card">
						<div className="aboutUsValues__picture">
							<Image fill alt="" aria-hidden={true} className="aboutUsValues__img" src="/img/aboutUs/values/2.jpg" />
						</div>
						<div className="aboutUsValues__content">
							<h3 className="aboutUsValues__subTitle">{translation["valuesSubTitle2"][language]}</h3>
							<p className="aboutUsValues__text">{translation["valuesText2"][language]}</p>
						</div>
					</article>
					<article className="aboutUsValues__card">
						<div className="aboutUsValues__picture">
							<Image fill alt="" aria-hidden={true} className="aboutUsValues__img" src="/img/aboutUs/values/3.jpg" />
						</div>
						<div className="aboutUsValues__content">
							<h3 className="aboutUsValues__subTitle">{translation["valuesSubTitle3"][language]}</h3>
							<p className="aboutUsValues__text">{translation["valuesText3"][language]}</p>
						</div>
					</article>
					<article className="aboutUsValues__card">
						<div className="aboutUsValues__picture">
							<Image fill alt="" aria-hidden={true} className="aboutUsValues__img" src="/img/aboutUs/values/4.jpg" />
						</div>
						<div className="aboutUsValues__content">
							<h3 className="aboutUsValues__subTitle">{translation["valuesSubTitle4"][language]}</h3>
							<p className="aboutUsValues__text">{translation["valuesText4"][language]}</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};
