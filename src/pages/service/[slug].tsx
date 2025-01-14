import React, { useRef } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { ParsedUrlQuery } from "querystring";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { ContactForm, Footer, Header, Modal, Seo } from "../../components";

import { useLanguage } from "../../hooks/useLanguage";
import { useModal } from "../../hooks/useModal";
import { getAllServicesSlugs, geServiceBySlug } from "../../contentful";

import { translation } from "../../utils/translation";
import { renderOptions } from "../../utils/renderOptions";
import { renderOptionsForStages } from "../../utils/renderOptionsForStages";

import { GeServiceBySlugQuery } from "../../@types/contentfulSchema";

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getAllServicesSlugs();

	return {
		paths: slugs.serviceCollection.items.map((item) => ({ params: { slug: item.slug } })),
		fallback: false,
	};
};

type Props = {
	service: GeServiceBySlugQuery;
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
	const slugName = context.params!.slug;

	const service = await geServiceBySlug(slugName);

	return {
		props: { service },
	};
};

type ArticleProps = {
	service: GeServiceBySlugQuery;
};

const Service: NextPage<ArticleProps> = ({ service }) => {
	const { isActive, closeModal, openModal } = useModal();
	const { language, changeLanguage } = useLanguage();

	const btnRef = useRef<HTMLButtonElement>(null);

	const { title, titleEn, description, descriptionEn, subTitle, subTitleEn, bgImg, stages, stagesEn } =
		service.serviceCollection.items[0];

	return (
		<>
			<Seo language={language} title={language === "ua" ? `National - ${title}` : `National - ${titleEn}`} />
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} language={language} translation={translation} />
				</Modal>
				<div className="service">
					<div className="service__wrapper">
						<Image src={bgImg.url} alt={language === "ua" ? title : titleEn} className="service__img" fill />
						<h1 className="service__title">{language === "ua" ? title : titleEn}</h1>
					</div>
					<div className="container">
						<article className="service__article">
							<div className="service__description">
								{documentToReactComponents(
									language === "ua" ? description.json : descriptionEn.json,
									language === "ua" ? renderOptions(description.links) : renderOptions(descriptionEn.links)
								)}
							</div>
							{subTitle && subTitleEn && <h2 className="service__h2">{language === "ua" ? subTitle : subTitleEn}</h2>}
							{stages && stagesEn && (
								<div className="service__content">
									{documentToReactComponents(
										language === "ua" ? stages.json : stagesEn.json,
										language === "ua" ? renderOptionsForStages(stages.json) : renderOptionsForStages(stagesEn.json)
									)}
								</div>
							)}
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

export default Service;
