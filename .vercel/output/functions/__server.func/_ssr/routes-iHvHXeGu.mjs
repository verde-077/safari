import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as ArrowDown, i as ArrowRight, n as Menu, r as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-iHvHXeGu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_desktop_default = "/assets/hero-mobile-Dyit0qED.mp4";
var hero_mobile_default = "/assets/hero-mobile-Dyit0qED.mp4";
var safari_hills_still_default = "/assets/safari-hills-still-BneLAx9_.jpg";
var resort_pool_landscape_default = "/assets/resort-pool-landscape-DPgEYi53.jpg";
var stay_hillside_default = "/assets/stay-hillside-rHgXLY6S.jpg";
var stay_villas_default = "/assets/stay-villas-pEpOPBaF.jpg";
var stay_forest_default = "/assets/stay-forest-DcD2wnho.jpg";
var exp_main_default = "/assets/exp-main-BTVLPJjH.jpg";
var exp_trails_default = "/assets/exp-trails-BBrRaBus.jpg";
var exp_dining_default = "/assets/exp-dining-BI-qH7jm.jpg";
var exp_wellness_default = "/assets/exp-wellness-BNDvpMrf.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var navigation = [
	{
		label: "The feeling",
		href: "#feeling"
	},
	{
		label: "The stay",
		href: "#stay"
	},
	{
		label: "Find your way",
		href: "#discover"
	}
];
function SafariHillsPage() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [preloadMode, setPreloadMode] = (0, import_react.useState)("metadata");
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		setPreloadMode(mediaQuery.matches ? "auto" : "metadata");
		const handler = (e) => {
			setPreloadMode(e.matches ? "auto" : "metadata");
		};
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, []);
	(0, import_react.useEffect)(() => {
		const targets = document.querySelectorAll("[data-reveal]");
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .14 });
		targets.forEach((target) => observer.observe(target));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!menuOpen) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "safari-hero relative isolate flex min-h-[780px] h-[94svh] max-h-[1120px] flex-col justify-between",
				"aria-label": "Safari Hills",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
						"aria-hidden": "true",
						className: "safari-hero__video absolute inset-0 -z-20 h-full w-full object-cover",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						preload: preloadMode,
						poster: safari_hills_still_default,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: hero_desktop_default,
							type: "video/mp4",
							media: "(min-width: 768px)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: hero_mobile_default,
							type: "video/mp4"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "safari-hero__shade absolute inset-0 -z-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "safari-header relative z-20 mx-auto grid w-full max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-6 md:px-12 md:py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "safari-wordmark",
								href: "#top",
								"aria-label": "Safari Hills home",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "safari-wordmark__mark",
									"aria-hidden": "true",
									children: "S"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "safari-wordmark__text",
									children: "SAFARI HILLS"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden items-center gap-11 lg:flex",
								"aria-label": "Main navigation",
								children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "safari-nav-link",
									href: item.href,
									children: item.label
								}, item.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "safari-enquire hidden sm:inline-flex",
									href: "#discover",
									children: ["Begin an enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										"aria-hidden": "true",
										size: 13,
										strokeWidth: 1.5
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
									"aria-expanded": menuOpen,
									className: "safari-menu-button",
									onClick: () => setMenuOpen((open) => !open),
									size: "icon",
									variant: "ghost",
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "top",
						className: "relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pb-8 md:px-12 md:pb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-copy",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow safari-hero__eyebrow mb-6",
								children: "A considered retreat in nature"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "display-serif safari-title",
								children: [
									"Come back",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "to quiet." })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-11 flex items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "safari-location eyebrow",
								children: "A place to pause, and be present"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "safari-scroll",
								href: "#feeling",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow hidden sm:block",
									children: "Scroll to discover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
									"aria-hidden": "true",
									size: 17,
									strokeWidth: 1.4
								})]
							})]
						})]
					}),
					menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "safari-menu-panel",
						role: "dialog",
						"aria-modal": "true",
						"aria-label": "Navigation menu",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "safari-menu-links",
							"aria-label": "Full navigation",
							children: [navigation.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: item.href,
								onClick: closeMenu,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "eyebrow",
										children: ["0", index + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "display-serif",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										"aria-hidden": "true",
										size: 18,
										strokeWidth: 1.4
									})
								]
							}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#discover",
								onClick: closeMenu,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "04"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "display-serif",
										children: "Make an enquiry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										"aria-hidden": "true",
										size: 18,
										strokeWidth: 1.4
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow safari-menu-caption",
							children: "SAFARI HILLS · A PLACE TO PAUSE"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "resort",
				className: "bg-[#fcfcfb] text-neutral-900 px-6 py-20 md:px-12 md:py-28 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1400px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col max-md:items-center max-md:text-center md:grid md:grid-cols-12 md:gap-16 md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-md:flex max-md:flex-col max-md:items-center md:col-span-5 text-left",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-500 mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE RESORT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-8 bg-neutral-300" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.12] mb-6",
									children: [
										"Nature,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"without the noise."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md font-normal",
									children: "Safari Hills is a quiet hillside retreat surrounded by forests, open skies and the landscape beyond."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#stays",
									className: "inline-flex items-center gap-3 bg-[#1e241e] text-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-colors",
									children: ["Discover the resort ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full max-md:mt-10 md:col-span-7",
							"data-reveal": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: resort_pool_landscape_default,
								alt: "Safari Hills infinity pool looking over pine forest valley",
								className: "w-full h-[280px] sm:h-[380px] md:h-[460px] object-cover rounded-md shadow-sm",
								loading: "lazy"
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "stays",
				className: "bg-[#fcfcfb] text-neutral-900 px-6 py-20 md:px-12 md:py-28 lg:py-36 border-t border-neutral-200/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col max-md:items-center max-md:text-center md:flex-row md:items-end md:justify-between mb-12 md:mb-16",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-md:flex max-md:flex-col max-md:items-center text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-500 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "OUR SPACES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-8 bg-neutral-300" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.12] mb-3",
									children: [
										"Stays for",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"meaningful moments."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-neutral-600 text-sm md:text-base max-w-lg font-normal",
									children: "Thoughtfully designed spaces that blend modern comfort with the beauty of nature."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#discover",
							className: "max-md:mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-neutral-900 hover:text-neutral-600 transition-colors",
							children: ["View all stays ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative overflow-hidden rounded-md cursor-pointer",
								"data-reveal": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: stay_hillside_default,
									alt: "Hillside Rooms interior suite",
									className: "w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-medium text-lg md:text-xl tracking-tight",
										children: "Hillside Rooms"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "text-white w-5 h-5 transition-transform group-hover:translate-x-1" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative overflow-hidden rounded-md cursor-pointer",
								"data-reveal": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: stay_villas_default,
									alt: "Private Villas exterior pool deck",
									className: "w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-medium text-lg md:text-xl tracking-tight",
										children: "Private Villas"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "text-white w-5 h-5 transition-transform group-hover:translate-x-1" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative overflow-hidden rounded-md cursor-pointer",
								"data-reveal": true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: stay_forest_default,
									alt: "Forest Suites balcony view",
									className: "w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-medium text-lg md:text-xl tracking-tight",
										children: "Forest Suites"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "text-white w-5 h-5 transition-transform group-hover:translate-x-1" })]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "experiences",
				className: "bg-[#fcfcfb] text-neutral-900 px-6 py-20 md:px-12 md:py-28 lg:py-36 border-t border-neutral-200/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[1400px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col-reverse md:grid md:grid-cols-12 md:gap-16 md:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full max-md:mt-10 md:col-span-7 flex flex-col gap-6",
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: exp_main_default,
								alt: "Safari Hills mist-covered mountain forest landscape",
								className: "w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover rounded-md shadow-sm",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 sm:gap-4 md:gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: exp_trails_default,
										alt: "Nature Trails",
										className: "w-full h-[120px] sm:h-[150px] md:h-[170px] object-cover rounded-md shadow-sm",
										loading: "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-[0.7rem] sm:text-xs uppercase tracking-wider font-medium text-neutral-800",
										children: "Nature Trails"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: exp_dining_default,
										alt: "Dining",
										className: "w-full h-[120px] sm:h-[150px] md:h-[170px] object-cover rounded-md shadow-sm",
										loading: "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-[0.7rem] sm:text-xs uppercase tracking-wider font-medium text-neutral-800",
										children: "Dining"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: exp_wellness_default,
										alt: "Wellness",
										className: "w-full h-[120px] sm:h-[150px] md:h-[170px] object-cover rounded-md shadow-sm",
										loading: "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-[0.7rem] sm:text-xs uppercase tracking-wider font-medium text-neutral-800",
										children: "Wellness"
									})] })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-md:flex max-md:flex-col max-md:items-center max-md:text-center md:col-span-5 flex flex-col justify-center pt-2 md:pt-10 text-left",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium text-neutral-500 mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EXPERIENCES" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-8 bg-neutral-300" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-[1.12] mb-6",
									children: [
										"More than",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"a stay"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md font-normal",
									children: "From nature trails to local flavours, discover experiences that let you slow down and connect with what matters."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#discover",
									className: "inline-flex items-center gap-3 bg-[#1e241e] text-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider rounded-md hover:bg-neutral-800 transition-colors",
									children: ["Explore experiences ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#181d18] text-neutral-200 px-6 py-12 md:px-12 md:py-16 border-t border-neutral-800",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "safari-wordmark text-white",
							href: "#top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "safari-wordmark__mark",
								"aria-hidden": "true",
								children: "S"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "safari-wordmark__text",
								children: "SAFARI HILLS"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-neutral-400",
							children: "A considered retreat in nature"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors",
							href: "#top",
							children: "Return to top ↑"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { SafariHillsPage as component };
