import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { translationType } from "../utils/translation";
import { socials } from "../constants";

type ContactFormProps = {
	language: "en" | "ua";
	translation: translationType;
} & (
	| { isInline: true; active: true; closeModal?: never }
	| { isInline?: never; active: boolean; closeModal: () => void }
);

export const ContactForm: FC<ContactFormProps> = ({ isInline, active, language, translation, closeModal }) => {
	const initialState = {
		name: "",
		phone: "",
		comment: "",
	};

	const [formState, setFormState] = useState(initialState);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const inputHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;

		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const formHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setLoading(true);
		setError(false);
		setSuccess(false);

		const data = JSON.stringify(formState);

		try {
			const response = await fetch(`https://formsubmit.co/ajax/${socials.email}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: data,
			});

			if (!response.ok) {
				setLoading(false);
				throw new Error("Error");
			}

			setLoading(false);
			setSuccess(true);
			setFormState(initialState);
			return;
		} catch (error) {
			setError(true);
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={formHandler}
			className={`contactForm ${active ? "contactForm--active" : ""} ${isInline ? "contactForm--inline" : ""}`}
		>
			<div className="container">
				<div className="contactForm__container">
					<div className="contactForm__wrapper">
						<div className="contactForm__top">
							<h2 className="contactForm__title">{translation["contactTitle1"][language]}</h2>
							{!isInline && (
								<button className="footer__close" type="button" aria-label="Close modal form" onClick={closeModal}>
									<svg width="23" height="22" aria-hidden="true">
										<use xlinkHref="/img/icons.svg#close" />
									</svg>
								</button>
							)}
						</div>
						<input
							type="text"
							name="name"
							required
							minLength={3}
							className="contactForm__input"
							placeholder={translation["contactName"][language]}
							value={formState.name}
							onChange={inputHandler}
						/>
						<input
							type="text"
							name="phone"
							required
							minLength={10}
							className="contactForm__input"
							placeholder={translation["contactPhone"][language]}
							value={formState.phone}
							onChange={inputHandler}
						/>
						<textarea
							className="contactForm__textarea"
							name="comment"
							placeholder={translation["contactComment"][language]}
							value={formState.comment}
							onChange={inputHandler}
						></textarea>
						<input type="hidden" name="_template" value="table" />
						<input type="text" name="_honey" className="contactForm__hidden" />
						<button
							className="contactForm__btn"
							type="submit"
							disabled={success || error || !formState.name.length || !formState.phone.length}
						>
							{translation["contactSend"][language]} {loading && <span className="contactForm__spinner"></span>}
						</button>
						{error && <p className="contactForm__error">{translation["contactError"][language]}</p>}
						{success && <p className="contactForm__error">{translation["contactSuccess"][language]}</p>}
					</div>
					<div className="contactForm__contact">
						<h2 className="contactForm__subtitle">{translation["contactTitle2"][language]}</h2>
						<p className="contactForm__text">{translation["contactText"][language]}</p>
						<div className="contactForm__info">
							<div className="contactForm__contacts">
								<div className="contactForm__emails">
									<svg className="contactForm__email-svg" width="29" height="29" aria-hidden="true">
										<use xlinkHref="/img/icons.svg#email" />
									</svg>
									<a href={`mailto:${socials.email}`} className="contactForm__email">
										{socials.email}
									</a>
								</div>
								<div className="contactForm__phones">
									<svg className="contactForm__email-svg" width="29" height="29" aria-hidden="true">
										<use xlinkHref="/img/icons.svg#call" />
									</svg>
									<div>
										<a href={`tel:${socials.phone1}`} className="contactForm__phone">
											{socials.phone1}
										</a>
										<a href={`tel:${socials.phone2}`} className="contactForm__phone">
											{socials.phone2}
										</a>
									</div>
								</div>
								<div className="contactForm__addresses">
									<p className="contactForm__address">
										<svg className="contactForm__email-svg" width="29" height="29" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#location" />
										</svg>
										<span>
											<span>{translation["contactAddress1"][language]}</span>
											<span>{translation["contactAddress2"][language]}</span>
											<span>{translation["contactAddress3"][language]}</span>
										</span>
									</p>
									<p className="contactForm__address">
										<svg className="contactForm__email-svg" width="29" height="29" aria-hidden="true">
											<use xlinkHref="/img/icons.svg#location" />
										</svg>
										<span>
											<span>{translation["contactAddress4"][language]}</span>
											<span>{translation["contactAddress5"][language]}</span>
											<span>{translation["contactAddress6"][language]}</span>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
