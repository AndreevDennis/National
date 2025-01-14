import React, { FC } from "react";

import { AboutUsType } from "../../utils/translation";

type AboutUsCompanyProps = {
	language: "en" | "ua";
	translation: AboutUsType;
};

export const AboutUsCompany: FC<AboutUsCompanyProps> = ({ language, translation }) => {
	return (
		<section className="aboutUsCompany" aria-labelledby="company">
			<div className="container">
				<h2 className="aboutUsCompany__title" id="company">
					{translation["companyTitle"][language]}
				</h2>
				<p className="aboutUsCompany__description">{translation["companyDescription"][language]}</p>
				<div className="aboutUsCompany__cards">
					<article className="aboutUsCompany__card">
						<div className="aboutUsCompany__header" style={{ gridTemplateColumns: "84px 1fr" }}>
							<svg className="aboutUsCompany__svg" width="84" height="74" aria-hidden="true">
								<use xlinkHref="/img/icons.svg#company1" />
							</svg>
							<h3 className="aboutUsCompany__subTitle">{translation["companySubTitle1"][language]}</h3>
						</div>
						<div className="aboutUsCompany__body">
							<ul className="aboutUsCompany__list">
								<li className="aboutUsCompany__li">{translation["companyLi1"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi2"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi3"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi4"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi5"][language]}</li>
							</ul>
						</div>
					</article>
					<article className="aboutUsCompany__card">
						<div className="aboutUsCompany__header" style={{ gridTemplateColumns: "69px 1fr" }}>
							<svg className="aboutUsCompany__svg" width="69" height="81" aria-hidden="true">
								<use xlinkHref="/img/icons.svg#company2" />
							</svg>
							<h3 className="aboutUsCompany__subTitle">{translation["companySubTitle2"][language]}</h3>
						</div>
						<div className="aboutUsCompany__body">
							<p className="aboutUsCompany__text">{translation["companyText"][language]}</p>
						</div>
					</article>
					<article className="aboutUsCompany__card">
						<div className="aboutUsCompany__header" style={{ gridTemplateColumns: "87px 1fr" }}>
							<svg className="aboutUsCompany__svg" width="87" height="85" aria-hidden="true">
								<use xlinkHref="/img/icons.svg#company3" />
							</svg>
							<h3 className="aboutUsCompany__subTitle">{translation["companySubTitle3"][language]}</h3>
						</div>
						<div className="aboutUsCompany__body">
							<ul className="aboutUsCompany__list">
								<li className="aboutUsCompany__li">{translation["companyLi6"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi7"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi8"][language]}</li>
								<li className="aboutUsCompany__li">{translation["companyLi9"][language]}</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};
