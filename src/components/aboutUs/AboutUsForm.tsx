import React, { FC } from "react";

import { ContactForm } from "../ContactForm";

import { translationType } from "../../utils/translation";

type AboutUsFormProps = {
	language: "en" | "ua";
	translation: translationType;
};

export const AboutUsForm: FC<AboutUsFormProps> = ({ language, translation }) => {
	return (
		<section className="aboutUsForm">
			<ContactForm isInline active={true} language={language} translation={translation} />
		</section>
	);
};
