import React, { FC } from "react";
import Image from "next/image";

import { translationType } from "../utils/translation";

type PartnersProps = {
	language: "en" | "ua";
	translation: translationType;
};

export const Partners: FC<PartnersProps> = ({ language, translation }) => {
	return (
		<section className="partners" aria-labelledby="partners">
			<div className="container">
				<h2 className="partners__title" id="partners">
					{translation["partnersTitle"][language]}
				</h2>
				<div className="partners__container">
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="211"
							height="39"
							src="/img/partners/borjomi.png"
							alt="Borjomi"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="211"
							height="104"
							src="/img/partners/pripravka.png"
							alt="Pripravka"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="216"
							height="94"
							src="/img/partners/metro.png"
							alt="Metro"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="211"
							height="80"
							src="/img/partners/fozzy.png"
							alt="Fozzy"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="211"
							height="76"
							src="/img/partners/atb.png"
							alt="Atb"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="207"
							height="178"
							src="/img/partners/neftek.png"
							alt="Neftek"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="170"
							height="178"
							src="/img/partners/wog.png"
							alt="Wog"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="251"
							height="178"
							src="/img/partners/morepiva.png"
							alt="More piva"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="211"
							height="127"
							src="/img/partners/shedro.png"
							alt="Shedro"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="147"
							height="191"
							src="/img/partners/okko.png"
							alt="Okko"
							quality="100"
						/>
					</div>
					<div className="parthners__wrapper">
						<Image
							className="pathners__img"
							width="148"
							height="140"
							src="/img/partners/blackfox.png"
							alt="Black fox"
							quality="100"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
