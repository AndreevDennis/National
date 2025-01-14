import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { translationType } from "../utils/translation";

type HeaderProps = {
	language: "en" | "ua";
	translation: translationType;
	changeLanguage: () => void;
};

export const Header: FC<HeaderProps> = ({ language, translation, changeLanguage }) => {
	const [isOpen, setOpen] = useState(false);
	const [isOpenDeskSubNav, setOpenDeskSubNav] = useState(false);
	const [deskSubNavheight, setDeskSubNavHeight] = useState("0px");

	const [isOpenMobileSubNav, setOpenMobileSubNav] = useState(false);
	const [mobileSubNavheight, setMobileSubNavHeight] = useState("0px");

	const deskContent = useRef<HTMLDivElement>(null);
	const mobileContent = useRef<HTMLDivElement>(null);

	const toggleMobileNav = () => {
		setOpen((prev) => !prev);
	};

	const toggleDeskSubNav = () => {
		setOpenDeskSubNav((prev) => !prev);
		setDeskSubNavHeight(!isOpenDeskSubNav && deskContent.current ? `${deskContent.current.scrollHeight}px` : "0px");
	};

	const toggleMobileSubNav = () => {
		setOpenMobileSubNav((prev) => !prev);
		setMobileSubNavHeight(
			!isOpenMobileSubNav && mobileContent.current ? `${mobileContent.current.scrollHeight}px` : "0px"
		);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("body--hidden");
		} else {
			document.body.classList.remove("body--hidden");
		}
	}, [isOpen]);

	return (
		<header className="header">
			<div className="header__top"></div>
			<div className="header__main">
				<div className="header__section">
					<Link href="/">
						<svg className="header__logo" width="142" height="21" aria-label="National">
							<use xlinkHref="/img/icons.svg#preloader" />
						</svg>
					</Link>
					<div className="header__wrapper">
						<div className="header__item">
							<button
								type="button"
								onClick={toggleDeskSubNav}
								className={`header__navBtn ${isOpenDeskSubNav ? "header__navBtn--open" : ""}`}
							>
								{translation["navAboutUs"][language]}
								<svg width="14" height="9" aria-hidden="true">
									<use xlinkHref="/img/icons.svg#navArrow" />
								</svg>
							</button>
							<div ref={deskContent} className="header__subNav" style={{ maxHeight: `${deskSubNavheight}` }}>
								<ul className="header__subNav-ul">
									<li className="header__element">
										<Link href="/aboutUs" className="header__link" onClick={toggleDeskSubNav} scroll={false}>
											{translation["navAboutUs"][language]}
										</Link>
									</li>
									{/* <li className="header__element">
										<Link href="/aboutUs#history" className="header__link" onClick={toggleDeskSubNav} scroll={false}>
											{translation["navHistory"][language]}
										</Link>
									</li> */}
									<li className="header__element">
										<Link href="/aboutUs#values" className="header__link" onClick={toggleDeskSubNav} scroll={false}>
											{translation["navValues"][language]}
										</Link>
									</li>
									<li className="header__element">
										<Link href="/humanitarianSector" className="header__link" onClick={toggleDeskSubNav} scroll={false}>
											{translation["navHumanitarianSector"][language]}
										</Link>
									</li>
									{/* <li className="header__element">
										<Link href="/aboutUs#team" className="header__link" onClick={toggleDeskSubNav} scroll={false}>
											{translation["navTeam"][language]}
										</Link>
									</li> */}
								</ul>
							</div>
						</div>
						<nav className="header__nav">
							<ul className="header__list">
								<li className="header__element">
									<Link href="/#services" className="header__link" scroll={false}>
										{translation["navServices"][language]}
									</Link>
								</li>
								<li className="header__element">
									<Link href="/#products" className="header__link" scroll={false}>
										{translation["navProducts"][language]}
									</Link>
								</li>
								<li className="header__element">
									<a href="/Certificates.pdf" className="header__link" target="_blank" rel="noreferrer noopener">
										{translation["navCertificate"][language]}
									</a>
								</li>
								<li className="header__element">
									<Link href="/#partners" className="header__link" scroll={false}>
										{translation["navPartners"][language]}
									</Link>
								</li>
								<li className="header__element">
									<Link href="/#blog" className="header__link" scroll={false}>
										{translation["navBlog"][language]}
									</Link>
								</li>
								<li className="header__element">
									<Link href="/#contacts" className="header__link" scroll={false}>
										{translation["navContacts"][language]}
									</Link>
								</li>
							</ul>
						</nav>
						<select id="language" className="header__lng" value={language} onChange={changeLanguage}>
							<option className="header__option" value="en">
								ENG
							</option>
							<option className="header__option" value="ua">
								УКР
							</option>
						</select>
					</div>
					<button type="button" className="header__btn" aria-label="Open menu" onClick={toggleMobileNav}>
						<svg width="25" height="19" aria-hidden="true">
							<use xlinkHref="/img/icons.svg#burger" />
						</svg>
					</button>
				</div>
			</div>
			<div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
				<nav className="header__mobile-nav">
					<button
						type="button"
						onClick={toggleMobileSubNav}
						className={`header__mobile-btn ${isOpenMobileSubNav ? "header__mobile-btn--open" : ""}`}
					>
						{translation["navAboutUs"][language]}
						<svg width="14" height="9" aria-hidden="true">
							<use xlinkHref="/img/icons.svg#navArrow" />
						</svg>
					</button>
					<div ref={mobileContent} style={{ maxHeight: `${mobileSubNavheight}` }} className="header__mobile-subNav">
						<ul className={`header__mobile-list header__mobile-list--first `}>
							<li className="header__element">
								<Link href="/aboutUs" className="header__link" onClick={toggleMobileNav} scroll={false}>
									{translation["navAboutUs"][language]}
								</Link>
							</li>
							{/* <li className="header__element">
								<Link href="/aboutUs#history" className="header__link" onClick={toggleMobileNav} scroll={false}>
									{translation["navHistory"][language]}
								</Link>
							</li> */}
							<li className="header__element">
								<Link href="/aboutUs#values" className="header__link" onClick={toggleMobileNav} scroll={false}>
									{translation["navValues"][language]}
								</Link>
							</li>
							<li className="header__element">
								<Link href="/humanitarianSector" className="header__link" onClick={toggleMobileNav} scroll={false}>
									{translation["navHumanitarianSector"][language]}
								</Link>
							</li>
							{/* <li className="header__element">
								<Link href="/aboutUs#team" className="header__link" onClick={toggleMobileNav} scroll={false}>
									{translation["navTeam"][language]}
								</Link>
							</li> */}
						</ul>
					</div>
					<ul className="header__mobile-list">
						<li className="header__element">
							<Link href="/#services" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navServices"][language]}
							</Link>
						</li>
						<li className="header__element">
							<Link href="/#products" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navProducts"][language]}
							</Link>
						</li>
						<li className="header__element">
							<a
								href="/Certificates.pdf"
								className="header__link"
								target="_blank"
								rel="noreferrer noopener"
								onClick={toggleMobileNav}
							>
								{translation["navCertificate"][language]}
							</a>
						</li>
						<li className="header__element">
							<Link href="/#partners" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navPartners"][language]}
							</Link>
						</li>
						<li className="header__element">
							<Link href="/#blog" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navBlog"][language]}
							</Link>
						</li>
						<li className="header__element">
							<Link href="/#contacts" className="header__link" onClick={toggleMobileNav} scroll={false}>
								{translation["navContacts"][language]}
							</Link>
						</li>
					</ul>
				</nav>
				<select id="language" className="header__lng header__lng--mobile" value={language} onChange={changeLanguage}>
					<option className="header__option" value="en">
						ENG
					</option>
					<option className="header__option" value="ua">
						УКР
					</option>
				</select>
			</div>
		</header>
	);
};
