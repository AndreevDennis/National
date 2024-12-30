import React, { FC } from "react";
import { useSwiper } from "swiper/react";

type AboutUsTeamNavigationProps = {
	language: "en" | "ua";
};

export const AboutUsTeamNavigation: FC<AboutUsTeamNavigationProps> = ({ language }) => {
	const swiper = useSwiper();

	return (
		<div className="aboutUsTeam__navigation">
			<div className="blog__pagination">
				<button
					type="button"
					onClick={() => swiper.slidePrev()}
					className="blog__nav blog__prev blog__active"
					aria-label={language === "en" ? "Back" : "Назад"}
				>
					<svg width="11" height="18" aria-hidden="true">
						<use xlinkHref="/img/icons.svg#arrow" />
					</svg>
				</button>
				<button
					type="button"
					onClick={() => swiper.slideNext()}
					className="blog__nav blog__next blog__active"
					aria-label={language === "en" ? "Next" : "Вперед"}
				>
					<svg width="11" height="18" aria-hidden="true">
						<use xlinkHref="/img/icons.svg#arrow" />
					</svg>
				</button>
			</div>
		</div>
	);
};
