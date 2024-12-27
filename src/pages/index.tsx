import type { NextPage } from "next";

import {
	About,
	Banner,
	Blog,
	Footer,
	Header,
	Modal,
	ContactForm,
	Partners,
	Services,
	Products,
	Seo,
} from "../components";

import { getAllArticles, getAllServices, getProducts } from "../contentful";
import { useModal } from "../hooks/useModal";
import { useLanguage } from "../hooks/useLanguage";

import { translation } from "../utils/translation";

import { GetAllArticlesQuery, GetAllServicesQuery } from "../@types/contentfulSchema";
import { CategoriesListType, ProductsInfoType, ProductType, SubCategoriesList } from "../@types/products";

export const getStaticProps = async () => {
	const services = await getAllServices();
	const products = await getProducts();
	const allArticles = await getAllArticles();

	const categoriesList = products.categoriesList.items;
	const subCategoriesList = products.subCategoriesList.items;

	const categories = products.categories.items;

	const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
	const allProducts = products.products.items;

	const productsInfo: { [key: string]: { [key: string]: ProductType[] } } = {};

	for (let i = 0; i < sortedCategories.length; i++) {
		if (!sortedCategories[i].linkedFrom.productSubcategoryCollection.items.length) continue;

		const category = sortedCategories[i].name;
		let obj: { [key: string]: [] } = {};
		for (let j = 0; j < sortedCategories[i].linkedFrom.productSubcategoryCollection.items.length; j++) {
			const subCategory = sortedCategories[i].linkedFrom.productSubcategoryCollection.items[j].name;
			obj[subCategory] = [];
		}
		productsInfo[category] = obj;
	}

	for (let i = 0; i < allProducts.length; i++) {
		const category = allProducts[i].category.name;
		const subcategory = allProducts[i].subcategory.name;

		productsInfo[category][subcategory].push(allProducts[i]);
	}

	return {
		props: {
			services,
			allArticles,
			productsInfo,
			categoriesList,
			subCategoriesList,
		},
	};
};

type HomeProps = {
	services: GetAllServicesQuery;
	allArticles: GetAllArticlesQuery;
	productsInfo: ProductsInfoType;
	categoriesList: CategoriesListType;
	subCategoriesList: SubCategoriesList;
};

const Home: NextPage<HomeProps> = ({ services, allArticles, productsInfo, categoriesList, subCategoriesList }) => {
	const { isActive, closeModal, openModal } = useModal();
	const { language, changeLanguage } = useLanguage();

	return (
		<>
			<Seo language={language} />
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} language={language} translation={translation} />
				</Modal>
				<Banner language={language} translation={translation} openModal={openModal} />
				<About language={language} translation={translation} />
				<Services services={services} language={language} translation={translation} openModal={openModal} />
				<Products
					language={language}
					translation={translation}
					categoriesList={categoriesList}
					subCategoriesList={subCategoriesList}
					productsInfo={productsInfo}
				/>
				<Partners language={language} translation={translation} />
				<Blog language={language} translation={translation} articles={allArticles} />
			</main>
			<Footer language={language} translation={translation} openModal={openModal} />
		</>
	);
};

export default Home;
