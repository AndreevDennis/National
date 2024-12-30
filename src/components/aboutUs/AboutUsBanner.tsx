import React, { FC } from "react";
import Image from "next/image";

import { AboutUsType } from "../../utils/translation";

type AboutUsBannerProps = {
	language: "en" | "ua";
	translation: AboutUsType;
};

export const AboutUsBanner: FC<AboutUsBannerProps> = ({ language, translation }) => {
	return (
		<section className="aboutUsBanner">
			<Image fill alt="" aria-hidden="true" src="/img/aboutUs/bg.jpg" className="aboutUsBanner__bg" />
			<div className="aboutUsBanner__shadow"></div>
			<div className="container">
				<div className="aboutUsBanner__content">
					<Image
						alt=""
						height="170"
						width="1113"
						aria-hidden="true"
						src="/img/aboutUs/name.svg"
						className="aboutUsBanner__svg"
					/>
					<div className="aboutUsBanner__header">
						<h1 className="aboutUsBanner__titel aboutUsBanner__titel--desk">{translation["bannerTitle"][language]}</h1>
						<div className="aboutUsBanner__picture">
							<div className="aboutUsBanner__dec"></div>
							<Image fill alt="" aria-hidden="true" src="/img/honey.png" className="aboutUsBanner__img" />
						</div>
					</div>
					<div className="aboutUsBanner__footer">
						<h1 className="aboutUsBanner__titel aboutUsBanner__titel--mob">{translation["bannerTitle"][language]}</h1>
						<p className="aboutUsBanner__text">
							<b>{translation["bannerText1"][language]}</b> {translation["bannerText2"][language]}
						</p>
						<p className="aboutUsBanner__text">{translation["bannerText3"][language]}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
