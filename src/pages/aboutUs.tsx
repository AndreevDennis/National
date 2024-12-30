import type { NextPage } from "next";

import { ContactForm, Footer, Header, Modal, Seo } from "../components";

import { AboutUsBanner } from "../components/aboutUs/AboutUsBanner";
import { AboutUsStatistic } from "../components/aboutUs/AboutUsStatistic";
import { AboutUsValues } from "../components/aboutUs/AboutUsValues";
import { AboutUsCompany } from "../components/aboutUs/AboutUsCompany";
import { AboutUsTeam } from "../components/aboutUs/AboutUsTeam";
import { AboutUsForm } from "../components/aboutUs/AboutUsForm";

import { useModal } from "../hooks/useModal";
import { useLanguage } from "../hooks/useLanguage";

import { aboutUs, translation } from "../utils/translation";

const Home: NextPage = () => {
	const { language, changeLanguage } = useLanguage();
	const { isActive, closeModal, openModal } = useModal();

	return (
		<>
			<Seo language={language} />
			<Header language={language} translation={translation} changeLanguage={changeLanguage} />
			<main>
				<Modal overlay active={isActive} closeModal={closeModal} displayType="flex">
					<ContactForm active={isActive} closeModal={closeModal} language={language} translation={translation} />
				</Modal>
				<AboutUsBanner language={language} translation={aboutUs} />
				<AboutUsStatistic language={language} translation={aboutUs} />
				<AboutUsValues language={language} translation={aboutUs} />
				<AboutUsCompany language={language} translation={aboutUs} />
				<AboutUsTeam language={language} translation={aboutUs} />
				<AboutUsForm language={language} translation={translation} />
			</main>
			<Footer language={language} translation={translation} openModal={openModal} />
		</>
	);
};

export default Home;
