import React, { FC, useEffect, useRef, useState } from "react";

import { BlogItem } from "./BlogItem";

import { translationType } from "../utils/translation";

import { GetAllArticlesQuery } from "../@types/contentfulSchema";

type BlogProps = {
	articles: GetAllArticlesQuery;
	language: "en" | "ua";
	translation: translationType;
};

export const Blog: FC<BlogProps> = ({ articles, language, translation }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const sectionRef = useRef<HTMLDivElement>(null);

	const articlesPerPage = 1;
	const lastArticleInex = currentPage * articlesPerPage;
	const firstArticleIndex = lastArticleInex - articlesPerPage;
	const currentArticles = articles.articleCollection.items.slice(firstArticleIndex, lastArticleInex);

	const totalPages = Math.ceil(articles.articleCollection.total / articlesPerPage);

	const prevPageHandler = () => {
		setCurrentPage((prevState) => (prevState === 1 ? 1 : prevState - 1));
	};

	const nextPageHandler = () => {
		setCurrentPage((prevState) => (prevState === totalPages ? prevState : prevState + 1));
	};

	useEffect(() => {
		if (currentPage !== 1 && sectionRef.current) {
			window.scrollTo({
				top: sectionRef.current.offsetTop,
				left: 0,
				behavior: "smooth",
			});
		}
	}, [currentPage]);

	return (
		<section ref={sectionRef} className="blog" aria-labelledby="blog">
			<svg className="blog__dec" height="1715" width="262" aria-hidden="true">
				<use xlinkHref="/img/names.svg#blogName" />
			</svg>
			<div className="container">
				<h2 className="blog__title" id="blog">
					{translation["blogTitle"][language]}
				</h2>
				<div className="blog__container">
					{currentArticles.map((item) => (
						<BlogItem key={item.slug} data={item} language={language} translation={translation} />
					))}
				</div>
				<div className="blog__pagination">
					<button
						className={`blog__nav blog__prev ${currentPage !== 1 ? "blog__active" : ""}`}
						disabled={currentPage === 1}
						aria-label="Prev 1 article from blog"
						onClick={prevPageHandler}
					>
						<svg width="11" height="18" aria-hidden="true">
							<use xlinkHref="/img/icons.svg#arrow" />
						</svg>
					</button>
					<button
						className={`blog__nav blog__next ${currentPage !== totalPages ? "blog__active" : ""} `}
						disabled={currentPage === totalPages}
						aria-label="Next 1 article from blog"
						onClick={nextPageHandler}
					>
						<svg width="11" height="18" aria-hidden="true">
							<use xlinkHref="/img/icons.svg#arrow" />
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};
