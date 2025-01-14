import React, { FC, useRef } from "react";
import Image from "next/image";

import { ContactForm, Footer, Header, Modal, Seo } from "../components";

import { useLanguage } from "../hooks/useLanguage";
import { useModal } from "../hooks/useModal";

import { humanitarianSector, translation } from "../utils/translation";

const HumanitarianSector: FC = () => {
	const { isActive, closeModal, openModal } = useModal();
	const { language, changeLanguage } = useLanguage();

	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<Seo language={language} title={humanitarianSector["seoTitle"][language]} />
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} language={language} translation={translation} />
				</Modal>
				<div className="service">
					<div className="service__wrapper">
						<Image
							src="/img/humanitarianSector/bg.png"
							alt={humanitarianSector["mainTitle"][language]}
							className="service__img"
							fill
						/>
						<h1 className="service__title">{humanitarianSector["mainTitle"][language]}</h1>
					</div>
					<div className="container">
						<article className="service__article">
							<div className="service__description">
								<div className="article__wrapper">
									<h2 className="article__h2">{humanitarianSector["title1"][language]}</h2>
									<div className="article__dec"></div>
								</div>

								<p className="article__text">{humanitarianSector["text1"][language]}</p>
								<p className="article__text">{humanitarianSector["text2"][language]}</p>
								<p className="article__text">{humanitarianSector["text3"][language]}</p>

								<div className="article__wrapper">
									<h2 className="article__h2">{humanitarianSector["title2"][language]}</h2>
									<div className="article__dec"></div>
								</div>

								<p className="article__text">{humanitarianSector["text4"][language]}</p>
								<p className="article__text">{humanitarianSector["text5"][language]}</p>
								<p className="article__text">{humanitarianSector["text6"][language]}</p>
								<p className="article__text">{humanitarianSector["text7"][language]}</p>

								<div className="article__wrapper">
									<h2 className="article__h2">{humanitarianSector["title3"][language]}</h2>
									<div className="article__dec"></div>
								</div>

								<p className="article__text">{humanitarianSector["text8"][language]}</p>
								<p className="article__text">{humanitarianSector["text9"][language]}</p>
								<p className="article__text">{humanitarianSector["text10"][language]}</p>
								<p className="article__text">{humanitarianSector["text11"][language]}</p>
								<p className="article__text">{humanitarianSector["text12"][language]}</p>
								<p className="article__text">{humanitarianSector["text13"][language]}</p>

								<div className="article__wrapper">
									<h2 className="article__h2">{humanitarianSector["title4"][language]}</h2>
									<div className="article__dec"></div>
								</div>

								<ul className="article__list">
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li1"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li2"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li3"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li4"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li5"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li6"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li7"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li8"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li9"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li10"][language]}</p>
									</li>
								</ul>

								<div className="article__wrapper">
									<h2 className="article__h2">{humanitarianSector["title5"][language]}</h2>
									<div className="article__dec"></div>
								</div>

								<ul className="article__list">
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li11"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li12"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li13"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li14"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li15"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li16"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li17"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li18"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li19"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li20"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li21"][language]}</p>
									</li>
									<li className="article__item">
										<p className="article__text">{humanitarianSector["li22"][language]}</p>
									</li>
								</ul>

								<div className="article__wrapper">
									<h2 className="article__h2">{humanitarianSector["title6"][language]}</h2>
									<div className="article__dec"></div>
								</div>

								<Image
									placeholder="blur"
									className="article__img"
									width={language === "en" ? 928 : 852}
									height={language === "en" ? 1304 : 852}
									src={
										language === "en"
											? "/img/humanitarianSector/productsEn.png"
											: "/img/humanitarianSector/productsUa.png"
									}
									alt={language === "en" ? "List of products" : "Список товарів"}
									blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNkNWQ1ZDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cxKSIvPjwvc3ZnPg=="
								/>

								<p className="article__text">
									<b>{humanitarianSector["text14"][language]}</b>
								</p>
							</div>
							<button ref={btnRef} className="btn services__btn" type="button" onClick={() => openModal(btnRef)}>
								{translation["contactBtn"][language]}
							</button>
						</article>
					</div>
				</div>
			</main>
			<Footer language={language} translation={translation} openModal={openModal} />
		</>
	);
};

export default HumanitarianSector;
