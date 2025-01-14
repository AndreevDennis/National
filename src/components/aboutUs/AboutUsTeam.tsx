import React, { FC } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { AboutUsTeamNavigation } from "./AboutUsTeamNavigation";

import { AboutUsType } from "../../utils/translation";

type AboutUsTeamProps = {
	language: "en" | "ua";
	translation: AboutUsType;
};

export const AboutUsTeam: FC<AboutUsTeamProps> = ({ language, translation }) => {
	return (
		<section className="aboutUsTeam" aria-labelledby="team">
			<div className="container">
				<h2 className="aboutUsTeam__title" id="team">
					{translation["teamTitle"][language]}
				</h2>
				<div className="aboutUsTeam__content">
					<Swiper
						loop={true}
						modules={[A11y]}
						slidesPerView={1}
						spaceBetween={20}
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
					>
						<SwiperSlide>
							<div className="aboutUsTeam__card">
								<div className="aboutUsTeam__picture">
									<Image fill alt="" aria-hidden="true" className="aboutUsTeam__img" src="/img/aboutUs/team/1.png" />
								</div>
								<p className="aboutUsTeam__name">Давід Ван</p>
								<p className="aboutUsTeam__position">Заступник директора підприємства</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="aboutUsTeam__card">
								<div className="aboutUsTeam__picture">
									<Image fill alt="" aria-hidden="true" className="aboutUsTeam__img" src="/img/aboutUs/team/1.png" />
								</div>
								<p className="aboutUsTeam__name">Давід Ван</p>
								<p className="aboutUsTeam__position">Заступник директора підприємства</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="aboutUsTeam__card">
								<div className="aboutUsTeam__picture">
									<Image fill alt="" aria-hidden="true" className="aboutUsTeam__img" src="/img/aboutUs/team/1.png" />
								</div>
								<p className="aboutUsTeam__name">Давід Ван</p>
								<p className="aboutUsTeam__position">Заступник директора підприємства</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="aboutUsTeam__card">
								<div className="aboutUsTeam__picture">
									<Image fill alt="" aria-hidden="true" className="aboutUsTeam__img" src="/img/aboutUs/team/1.png" />
								</div>
								<p className="aboutUsTeam__name">Давід Ван</p>
								<p className="aboutUsTeam__position">Заступник директора підприємства</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="aboutUsTeam__card">
								<div className="aboutUsTeam__picture">
									<Image fill alt="" aria-hidden="true" className="aboutUsTeam__img" src="/img/aboutUs/team/1.png" />
								</div>
								<p className="aboutUsTeam__name">Давід Ван</p>
								<p className="aboutUsTeam__position">Заступник директора підприємства</p>
							</div>
						</SwiperSlide>
						<AboutUsTeamNavigation language={language} />
					</Swiper>
				</div>
			</div>
		</section>
	);
};
