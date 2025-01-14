import { GetServerSideProps } from "next/types";
import { getAllArticlesForSeo, getAllServicesForSeo } from "../contentful";

export default function Sitemap() {
	return null;
}

type SeoData = {
	slug: string;
	date: any;
}[];

const generateSitemap = async (services: SeoData, articles: SeoData) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
			<url>
				<loc>https://www.national.ua</loc>
				<lastmod>2023-02-20T19:33:22.682Z</lastmod>
				<changefreq>daily</changefreq>
				<priority>1.0</priority>
			</url>

			<url>
				<loc>https://www.national.ua/aboutUs</loc>
				<lastmod>2025-01-14T19:36:22.682Z</lastmod>
				<changefreq>daily</changefreq>
				<priority>1.0</priority>
			</url>

			<url>
				<loc>https://www.national.ua/humanitarianSector</loc>
				<lastmod>2025-01-14T19:36:22.682Z</lastmod>
				<changefreq>daily</changefreq>
				<priority>1.0</priority>
			</url>

		${services
			.map(
				(service) => `
					<url>
						<loc>https://www.national.ua/${service.slug}</loc>
						<lastmod>${service.date}</lastmod>
						<changefreq>weekly</changefreq>
						<priority>0.8</priority>
					</url>
				`
			)
			.join("")}

		${articles
			.map(
				(article) => `
					<url>
						<loc>https://www.national.ua/${article.slug}</loc>
						<lastmod>${article.date}</lastmod>
						<changefreq>weekly</changefreq>
						<priority>0.6</priority>
					</url>
				`
			)
			.join("")}
    </urlset>
  `;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const allServicesForSeo = await getAllServicesForSeo();
	const allArticlesForSeo = await getAllArticlesForSeo();

	const services = allServicesForSeo.serviceCollection.items.map((service) => ({
		slug: `service/${service.slug}`,
		date: service.sys.publishedAt,
	}));

	const articles = allArticlesForSeo.articleCollection.items.map((article) => ({
		slug: `article/${article.slug}`,
		date: article.sys.publishedAt,
	}));

	const xml = await generateSitemap(services, articles);

	ctx.res.setHeader("Content-type", "text/xml");
	ctx.res.write(xml);
	ctx.res.end();

	return {
		props: {},
	};
};
