(function(){
var ASSET_MAP = {"https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/css/main.css": "assets/6de11f57469969a7_main.css", "https://nynjfwc26.com/wp-content/plugins/instagram-feed/css/sbi-styles.min.css?ver=6.11.0": "assets/3a9792f0f57cf889_sbi-styles.min.css", "https://nynjfwc26.com/": "assets/7b264151c73c0551_file.html", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/style.css": "assets/16a5b59488e62b1f_style.css", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/imagesloaded-pkgd-min.js": "assets/86dacb15f649eafe_imagesloaded-pkgd-min.js", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/fonts/FWC26-UltraCondensedBold.otf": "assets/bbd552cdf6c55fc1_FWC26-UltraCondensedBold.otf", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/jquery-min.js": "assets/f7f6a5894f1d19dd_jquery-min.js", "https://nynjfwc26.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.1.6": "assets/a3b9f5df6bf638a4_styles.css", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/swiper.min.js": "assets/f856886e505a6815_swiper.min.js", "https://app-loader-nynj.neurun.com/": "assets/6afb72196f04e7de_file.js", "https://nynjfwc26.com/wp-content/uploads/2025/06/sample-01.webp": "assets/72995b3d6708072c_sample-01.webp", "https://nynjfwc26.com/wp-content/uploads/2025/06/fifa-cup.png": "assets/c13f3ce54b726846_fifa-cup.png", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/img/fifa-wheel.svg": "assets/8106f6b454624c60_fifa-wheel.svg", "https://nynjfwc26.com/wp-content/uploads/2025/10/New-Image-FIFA-1.webp": "assets/e121672a040d4ed6_New-Image-FIFA-1.webp", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/gsap.min.js": "assets/8154aa9057e3367d_gsap.min.js", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/ScrollMagic.js": "assets/b8c7845106b0927c_ScrollMagic.js", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/animation.gsap.js": "assets/0311a4105d943aef_animation.gsap.js", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/jquery.countdown-timer.js": "assets/022d85e0cb180068_jquery.countdown-timer.js", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/js/demo.js?v=1780954346": "assets/b7e697eba4e94c0f_demo.js", "https://nynjfwc26.com/wp-includes/js/dist/hooks.min.js?ver=dd5603f07f9220ed27f1": "assets/87cee5f49ba0d301_hooks.min.js", "https://nynjfwc26.com/wp-includes/js/dist/i18n.min.js?ver=c26c3dc7bed366793375": "assets/d4efe709c65438ae_i18n.min.js", "https://nynjfwc26.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.6": "assets/29fdd17a7002a2e1_index.js", "https://nynjfwc26.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.6": "assets/ddcce687729cb358_index.js", "https://nynjfwc26.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0": "assets/d857655afd7f378d_wp-polyfill.min.js", "https://www.google.com/recaptcha/api.js?render=6LdHVXQrAAAAAPxwpyvmKP9t6zl7OS6vD-TdU4cs&ver=3.0": "assets/2604cd6aade9a77a_api.js", "https://nynjfwc26.com/wp-content/plugins/contact-form-7/modules/recaptcha/index.js?ver=6.1.6": "assets/df0ec8330290d184_index.js", "https://nynjfwc26.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1": "assets/cb6f2d32c49d1c2b_jquery.min.js", "https://nynjfwc26.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1": "assets/5274f11e6fb32ae0_jquery-migrate.min.js", "https://nynjfwc26.com/wp-content/plugins/instagram-feed/js/sbi-scripts.min.js?ver=6.11.0": "assets/94e63e2a97e68826_sbi-scripts.min.js", "https://cdn.jsdelivr.net/gh/studio-freight/lenis@latest/bundled/lenis.js": "assets/063b076b5cbece18_lenis.js", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/css/reset.css?v1": "assets/57ec828491aab185_reset.css", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/css/swiper-bundle.min.css": "assets/c94a0dc6cbd7f95a_swiper-bundle.min.css", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/css/fonts.css": "assets/7256042228c29f19_fonts.css", "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap": "assets/2ef02affb6edc679_css2.css", "https://nynjfwc26.com/wp-content/uploads/2025/10/New-Image-FIFA.webp": "assets/1068517f788fa234_New-Image-FIFA.webp", "https://nynjfwc26.com/wp-content/uploads/2025/08/FIFA-World-Cup-2026%E2%84%A2%EF%B8%8F-NYNJ-BACK-IN-THE-U.S.-FOR-THE-FIRST-TIME-SINCE-1994-1.webp": "assets/b04446303c5e58e2_FIFA-World-Cup-2026_E2_84_A2_E.webp", "https://nynjfwc26.com/wp-content/uploads/2025/08/Group-738003808.webp": "assets/482b793dba86c02a_Group-738003808.webp", "https://nynjfwc26.com/wp-content/uploads/2025/08/Frame-48-1.svg": "assets/fd1e2286cda2e5e5_Frame-48-1.svg", "https://nynjfwc26.com/wp-content/uploads/2025/08/Frame-48-2.svg": "assets/c32354f45c7ba24a_Frame-48-2.svg", "https://nynjfwc26.com/wp-content/uploads/2025/06/gallery-02.webp": "assets/70a3b8244b8ee12b_gallery-02.webp", "https://nynjfwc26.com/wp-content/uploads/2025/10/Label-Fan-Festival-FIFA26.svg": "assets/7b021450ca97c8a3_Label-Fan-Festival-FIFA26.svg", "https://nynjfwc26.com/wp-content/uploads/2025/10/imgonline-com-ua-resize-scZIVoW1WQTB-1-1.webp": "assets/9bde2d5ddac63e73_imgonline-com-ua-resize-scZIVo.webp", "https://nynjfwc26.com/wp-content/uploads/2025/10/Frame-1-1.svg": "assets/20c780eddbc35cec_Frame-1-1.svg", "https://nynjfwc26.com/wp-content/uploads/2025/12/PSEG-logo-White-CMYK-1-1.webp": "assets/8c044031bb21b29a_PSEG-logo-White-CMYK-1-1.webp", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/img/fifa-news-card-1.svg": "assets/eeb02bd91bf00ee3_fifa-news-card-1.svg", "https://nynjfwc26.dd-nyc.co/wp-content/uploads/2025/10/fifa-marker-2.svg": "assets/d85fece92a709825_fifa-marker-2.svg", "https://nynjfwc26.dd-nyc.co/wp-content/uploads/2025/10/fifa-marker.svg": "assets/dd70b83ab9ca99f6_fifa-marker.svg", "https://nynjfwc26.com/wp-content/uploads/2025/11/PaulWeiss-with-border.svg": "assets/61def9a94bd6815b_PaulWeiss-with-border.svg", "https://nynjfwc26.com/wp-content/uploads/2026/02/Map-Mobile.webp": "assets/f2331fa44de9fbe6_Map-Mobile.webp", "https://nynjfwc26.com/wp-content/uploads/2026/04/Label-Liberty-State-Park-FIFA26.svg": "assets/17050239559c6980_Label-Liberty-State-Park-FIFA2.svg", "https://nynjfwc26.com/wp-content/uploads/2026/04/Related_white-logo.svg": "assets/de529b0b1f8421c3_Related_white-logo.svg", "https://nynjfwc26.com/wp-content/uploads/2026/02/Bristol-Meyers-Squibb-Supporter-White-Logo-for-FIFA-World-Cup-2026%E2%84%A2%EF%B8%8F-NYNJ-1.svg": "assets/1e0ab12c49cf1ae9_Bristol-Meyers-Squibb-Supporte.svg", "https://nynjfwc26.com/wp-content/uploads/2025/11/Onyx-w.svg": "assets/27b6b62a067abbeb_Onyx-w.svg", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/img/timer-top-a.svg": "assets/a610aa6ff42151ee_timer-top-a.svg", "https://nynjfwc26.com/wp-content/uploads/2026/04/NYNJ-World-Cup-26-Map-scaled.webp": "assets/1f310d4be41d19e3_NYNJ-World-Cup-26-Map-scaled.webp", "https://nynjfwc26.com/wp-content/uploads/2026/01/SI_Primary_1C_White.svg": "assets/fd42e93d12a2ae98_SI_Primary_1C_White.svg", "https://nynjfwc26.com/wp-content/uploads/2026/02/HMH-Logo-REV-1.svg": "assets/d32bd30d5a4481d0_HMH-Logo-REV-1.svg", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/fonts/FWC26-NormalBlack.otf": "assets/bd375321a33ebd60_FWC26-NormalBlack.otf", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/img/main-button-hover.gif": "assets/bbf5e7d6d4419757_main-button-hover.gif", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/static/img/timer-bottom-a.svg": "assets/49b3319d942ae108_timer-bottom-a.svg", "https://nynjfwc26.com/wp-content/uploads/2025/06/footer-runner-text.svg": "assets/1e07d70d0afdde5e_footer-runner-text.svg", "https://acsbapp.com/apps/app/dist/js/app.js": "assets/b957913495bfc968_app.js", "https://fonts.gstatic.com/s/notosans/v42/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a7du3mhPy0.woff2": "assets/afc7a910f4ff04ee_o-0bIpQlx3QUlC5A4PNB6Ryti20_6n.woff2", "https://nynjfwc26.com/wp-content/uploads/2025/06/145-m.mp4": "assets/2525e6c2e64309ae_145-m.mp4", "https://www.gstatic.com/recaptcha/releases/ne1iDVwClkE7nKD3uA9Vqsvl/recaptcha__en.js": "assets/028677914128606b_recaptcha__en.js", "https://nynjfwc26.com/wp-content/uploads/2025/06/145.mp4": "assets/04ee89d129064647_145.mp4", "https://nynj-ai.neurun.com/polyfills-FFHMD2TL.js": "assets/69dcea045643dd0d_polyfills-FFHMD2TL.js", "https://nynjfwc26.com/cdn-cgi/challenge-platform/h/g/scripts/jsd/8fc8ed1d8752/main.js?": "assets/24c276382d3fc7a0_main.js", "https://nynj-ai.neurun.com/main-66TYFUSA.js": "assets/2e1e995c5cba4986_main-66TYFUSA.js", "https://nynjfwc26.com/wp-json/contact-form-7/v1/contact-forms/131/feedback/schema": "assets/3146361ffe06cb08_schema.json", "https://nynj-ai.neurun.com/chunk-F5SLTCUS.js": "assets/chunk-F5SLTCUS.js", "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/717186919_17989450508989736_3457061801140803930_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=MUccuaJG5KEQ7kNvwGmWU8R&_nc_oc=AdppC30KQ596ZINIkfTBHgkupSRLtW36W2xfKRjY0VmVXSOkKbXqY9DYQ3EUpU_1jU8&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=w1hQOlHY4xcplGuEo2NaCA&_nc_tpa=Q5bMBQEnzW_ZOwpaQj8V20trWJc0uDSX4rZ6VQ88323n4SDZ9Pg5Eaz3T9PMyMnUQEMaiTYPMM1ATWPYjA&oh=00_Af9-T0sPZMiuu9W4f7b81Ty-XaXG8__C7DU_0oQhV1W3cA&oe=6A2DBEB7": "assets/979977d111975639_717186919_17989450508989736_34.jpg", "https://scontent-ord5-1.cdninstagram.com/v/t51.82787-15/716871526_17989616549989736_308709562638416865_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=atxs3j8zxl0Q7kNvwFRa52N&_nc_oc=Adql8JXvebZF7WCn9ANswBZtqK1bR9gmae_d6a0xjeFkjHFwoV2EkzqII2OcR_cjz0g&_nc_zt=23&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=sE59SvtLQU6zoBR056fToA&_nc_tpa=Q5bMBQEleYSn5cJQ7BT72LKEwl2qywWrpcTW7twWBNIIY069AbgqQlb1ynUBKUjiagFfoyiQMPBgofAdlg&oh=00_Af-_MTenRiOFqe1L2-OjYm-1co-AllZRB5P55KeQPZ339w&oe=6A2DC0E8": "assets/23b5d74c99393cca_716871526_17989616549989736_30.jpg", "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/713283756_17989440389989736_1041357354237456560_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=cFu2ae5ZKtsQ7kNvwFgytW-&_nc_oc=AdpnHUAyVpDnqvlSEssUrDJuUNtzdbLX4jJzH-ieiFlDLuDHrTWBKZgohuGeFBBHf8A&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=w1hQOlHY4xcplGuEo2NaCA&_nc_tpa=Q5bMBQFVx_7jfNmQmztucvpYLTK_sIls0UJeKlv16mtJX46DUjirX7Cm0bpeF5XMKgsL7jyyP2lJipuuyQ&oh=00_Af9358K-hTKcBJTPAFw_JOpYN3os7T4FhwxebnPZPQ5d5w&oe=6A2DD020": "assets/2ce58388eca5cb3c_713283756_17989440389989736_10.jpg", "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/719506248_17989897805989736_432495947878395687_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=3u7iOtjjDuIQ7kNvwFriXCx&_nc_oc=Adrb1tA_rIt0xxZSnHPp58yWk3IbbxZxW4d1xiGxauJp7iloJt7dkRQofk8KVZfR8rQ&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=sE59SvtLQU6zoBR056fToA&_nc_tpa=Q5bMBQFxAXIqSVZqNQniSFdNN2tUGcY9Mk38pUqkEX9M67PLbiVMutBlFg35_qhzEc748LljWjQ4yZgFnw&oh=00_Af-fBQ392DZlO6FbV-Gm8VokJZj3Yuyte-DHX_-7Dzv1pw&oe=6A2DE5A6": "assets/0d910f97b5d2a118_719506248_17989897805989736_43.jpg", "https://scontent-ord5-2.cdninstagram.com/v/t51.82787-15/716986419_17989600817989736_1469242212604512070_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=sSX8cpN5j7oQ7kNvwErAuRi&_nc_oc=AdqSSTMM3FH2G-gcrIuGai_2ovvMsw4d5Rb-qLCLJUSDzAtDwkkeKlHB-ilHI_Vt628&_nc_zt=23&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=sE59SvtLQU6zoBR056fToA&_nc_tpa=Q5bMBQHkF12l8ZHyJdHepmhbNJ-326xofbxW9umNgWdRcsEoOim736dgm1QOzS0QTHDUaqa93o9xlZGZhw&oh=00_Af-SuV9DAB0GHqWw4HLy-Q37ZvxhC_9GPZlVMXRRyCi2Mg&oe=6A2DD52E": "assets/7942f142f5fef17f_716986419_17989600817989736_14.jpg", "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap": "assets/73bfc5f42abd9c76_css2.css", "https://cdn.acsbapp.com/config/nynjfwc26.com/config.json": "assets/9b58a4e10fb13a01_config.json", "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdHVXQrAAAAAPxwpyvmKP9t6zl7OS6vD-TdU4cs&co=aHR0cHM6Ly9ueW5qZndjMjYuY29tOjQ0Mw..&hl=en&v=ne1iDVwClkE7nKD3uA9Vqsvl&size=invisible&anchor-ms=20000&execute-ms=30000&cb=9fici9qfha15": "assets/68e316179d8cc42a_anchor.html", "https://ai.neurun.com/test": "assets/6b3f949297514021_test.html", "https://challenges.cloudflare.com/turnstile/v0/g/8fc8ed1d8752/api.js": "assets/550ee5324f2c405d_api.js", "https://ai.neurun.com/polyfills-FFHMD2TL.js": "assets/69dcea045643dd0d_polyfills-FFHMD2TL.js", "https://ai.neurun.com/styles-ICO2AGON.css": "assets/16712730b2271244_styles-ICO2AGON.css", "https://www.gstatic.com/recaptcha/releases/ne1iDVwClkE7nKD3uA9Vqsvl/styles__ltr.css": "assets/d14a23ec7b08c3ed_styles__ltr.css", "https://o4509088929349632.ingest.us.sentry.io/api/4509088935837696/envelope/?sentry_version=7&sentry_key=3f23f70ef78f8b9783cdb3a2d89910e1&sentry_client=sentry.javascript.angular%2F9.10.1": "assets/4fadf0be86913a31_file.json", "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2": "assets/06b16db7a969135d_JTUSjIg1_i6t8kCHKm459Wlhyw.woff2", "https://ai.neurun.com/chunk-F5SLTCUS.js": "assets/c28773d84c02e4cc_chunk-F5SLTCUS.js", "https://ai.neurun.com/main-YQZYKDCE.js": "assets/5d6a0837b8aba734_main-YQZYKDCE.js", "https://ai.neurun.com/assets/images/satellite.svg": "assets/d0a3ceb803159c17_satellite.svg", "https://www.gstatic.com/recaptcha/api2/logo_48.png": "assets/1b9efb22c9385009_logo_48.png", "https://ai.neurun.com/cdn-cgi/challenge-platform/h/g/scripts/jsd/8fc8ed1d8752/main.js?": "assets/35ec61407814b03a_main.js", "https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2": "assets/8139a402ce239285_KFO7CnqEu92Fr1ME7kSn66aGLdTylU.woff2", "https://nynjfwc26.com/wp-json/contact-form-7/v1/contact-forms/131/refill": "assets/93ec537f24c9fd57_refill.json", "https://www.google.com/recaptcha/api2/webworker.js?hl=en&v=ne1iDVwClkE7nKD3uA9Vqsvl": "assets/b16cedd92a0f432a_webworker.js", "https://www.google.com/recaptcha/api2/reload?k=6LdHVXQrAAAAAPxwpyvmKP9t6zl7OS6vD-TdU4cs": "assets/76eabe5dbf274361_reload.json", "https://www.instagram.com/p/DZKsa3cDr4d/": "assets/d9c4b26a7dd8b29c_file.html", "https://www.instagram.com/fwc26nynj/": "assets/1678b6c70f2dea34_file.html", "https://nynjfwc26.com/fan-events/#fan-village-rockefeller": "assets/c12baaa687354f6f_file.html", "https://www.metlifestadium.com/": "assets/deccd3ffc694ad08_file.html", "https://nynjfwc26.com/about/#our-team": "assets/392a9e7c8c75c05c_file.html", "https://nynjfwc26.com/destination/#accommodations": "assets/3ca7e5599d22ad70_file.html", "https://www.paulweiss.com/": "assets/ba1f5c9b7e6317c3_file.html", "https://nynjfwc26.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fnynjfwc26.com%2F": "assets/f65488363470d2d7_embed.json", "https://www.bms.com/": "assets/6d9b7fa63d594c22_file.html", "https://app-loader-nynj.neurun.com": "assets/6afb72196f04e7de_file.js", "https://nynjfwc26.com/about/#nynj-sonic-id": "assets/bbe39e8434297e01_file.html", "https://nynjfwc26.com/fan-events/#fan-zones-island": "assets/7f421a7d1c052baa_file.html", "https://www.fifa.com/en/tickets": "assets/d43943ccb3c419e2_tickets.html", "https://nynjfwc26.com/fan-events/#fan-zones-bronx": "assets/c523f2893da46bd7_file.html", "https://accessibe.com/blog/knowledgebase/screen-reader-guide": "assets/900c9086ca014b37_screen-reader-guide.html", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums": "assets/d43943ccb3c419e2_tickets.html", "https://nynjfwc26.com/destination/#events-and-toolkit": "assets/d5675a94de9c4f1d_file.html", "https://www.related.com/": "assets/0b4a799873ef412c_file.html", "https://nynjfwc26.com/wp-content/uploads/2026/02/Bristol-Meyers-Squibb-Supporter-White-Logo-for-FIFA-World-Cup-2026\u2122\ufe0f-NYNJ-1.svg": "assets/1e0ab12c49cf1ae9_Bristol-Meyers-Squibb-Supporte.svg", "https://nynjfwc26.com/venues/": "assets/ff0ee96e39d60e34_file.html", "https://nynjfwc26.com/wp-content/uploads/2025/06/cropped-FIFA-DD.NYC-FAVICON-new--32x32.png": "assets/11cfbdc46525d5e9_cropped-FIFA-DD.NYC-FAVICON-ne.png", "https://nynjfwc26.com/venues/#team-base-camps": "assets/a05bd8bb6a874463_file.html", "https://nynjfwc26.com/about/#our-mission": "assets/a156a28b805c703b_file.html", "https://nynjfwc26.com/fan-events/#fan-hub": "assets/6e2250e7f7245af4_file.html", "https://nynjfwc26.com/destination/#welcome-world-rewards-program": "assets/2681c95857f6a510_file.html", "https://nynjfwc26.com/venues/#nynj-stadium": "assets/5dcfdbe236ad159e_file.html", "https://nynjfwc26.com/schedule/": "assets/a7aaa818d8270adc_file.html", "https://nynjfwc26.com/news/": "assets/b1f5af9feea4471f_file.html", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026": "assets/d733ddc5a7e2bd46_canadamexicousa2026.html", "https://nynjfwc26.com/destination/#getting-to-nynj": "assets/9fd713e317048fa9_file.html", "https://nynjfwc26.com/news/#media": "assets/8a1b3f38e2232a80_file.html", "https://nynjfwc26.com/destination/#plan-your-trip": "assets/fc1db7a24ab574cb_file.html", "https://www.si.com/": "assets/59ba8f7258a19fb4_file.html", "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/volunteers?fbclid=PAZXh0bgNhZW0CMTEAAad0nH9qAcV5kjPwaZgJs0pDOvoDr7CRjVPRAmCshry2lwwzBzRGPRO7S8-UTg_aem_2DOcGmMm9UFy0yLPTiviNQ": "assets/d43943ccb3c419e2_tickets.html", "https://www.tiktok.com/@fwc26nynj": "assets/e93dda4115eb0670__fwc26nynj.html", "https://nynjfwc26.com/about/": "assets/eca239881af7a5df_file.html", "https://nynjfwc26.com/wp-content/uploads/2025/08/FIFA-World-Cup-2026\u2122\ufe0f-NYNJ-BACK-IN-THE-U.S.-FOR-THE-FIRST-TIME-SINCE-1994-1.webp": "assets/b04446303c5e58e2_FIFA-World-Cup-2026_E2_84_A2_E.webp", "https://nynjfwc26.com/faq/": "assets/22d2962c17927d24_file.html", "https://nynjfwc26.com/wp-content/themes/fifa-dd.nyc/data/HeaderVideo_Vertical.mp4": "assets/e7bb86025851f269_HeaderVideo_Vertical.mp4", "https://nynjfwc26.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fnynjfwc26.com%2F&format=xml": "assets/00980bac0fcdb973_embed", "https://www.onyxequities.com/": "assets/dcaa43657a1eb235_file.html", "https://nynjfwc26.com/fan-events/": "assets/1d00fd3425426551_file.html", "https://nynjfwc26.com/terms-conditions/": "assets/8b53462e8276eb26_file.html", "https://x.com/FWC26NYNJ": "assets/472c7b0f0f6b8411_FWC26NYNJ.html", "https://www.fifa.com/": "assets/754828953f6b0171_file.html", "https://nynjfwc26.com/fan-events/#fan-zone-queens": "assets/611ab19470f09724_file.html", "https://nynjfwc26.com/wp-content/uploads/2025/06/cropped-FIFA-DD.NYC-FAVICON-new--180x180.png": "assets/d2aaad090b050342_cropped-FIFA-DD.NYC-FAVICON-ne.png", "https://nynjfwc26.com/partners/": "assets/6eae0555a6b3a69a_file.html", "https://www.hackensackmeridianhealth.org/en/": "assets/d9a24d683ae9bfd6_file.html", "https://nynjfwc26.com/vendor-opportunities/": "assets/ee70b267705c25b7_file.html", "https://dd.nyc/?utm_source=fifa&utm_medium=referral&utm_campaign=fifa-footer-link": "assets/b52da2bead47b162_file.html", "https://fifaworldcup26.hospitality.fifa.com/us/en/choose-matches?venue=NN_NYNJ&utm_source=nynj_hc&utm_medium=referral&utm_campaign=fwc26_partners-full_launch_homepage_feature&partnerId=10229204166405&xref=homepage_feature_10229204166405": "assets/117ca2e42f11bfef_choose-matches.html", "https://www.instagram.com/p/DZTMHjmiW_E/": "assets/0659f4a662c3c437_file.html", "https://nj.pseg.com/": "assets/5387e924ece75957_file.html", "https://nynjfwc26.com/about/#nynj-poster": "assets/9a8fbf49099a6599_file.html", "https://www.fifa.com/tickets": "assets/d733ddc5a7e2bd46_canadamexicousa2026.html", "https://www.instagram.com/p/DZK57SnDvyF/": "assets/7bf9188c50d18742_file.html", "https://store.fifa.com/en-en/collections/world-cup-2026-new-york-new-jersey": "assets/6e2cf964a289a6c4_world-cup-2026-new-york-new-je.html", "https://nynjfwc26.com/wp-content/uploads/2025/06/image-1.webp": "assets/33a4c8e23a3b8079_image-1.webp", "https://www.instagram.com/p/DZN8qeFJk7n/": "assets/ebfe56123bcfe583_file.html", "https://nynjfwc26.com/wp-json/": "assets/0382f0fb75745468_file.json", "https://www.instagram.com/p/DZNo3mNp2L7/": "assets/1d7c058b4d7f8929_file.html", "https://www.linkedin.com/company/fwc26nynj/": "assets/f729667325184933_file.html", "https://interestform.getstimulus.ai/nynj": "assets/b13e5253ea51bbb0_nynj.html", "https://store.fifa.com/content/new-york-new-jersey-2026-host-city": "assets/a75a34adca73c493_new-york-new-jersey-2026-host-.html", "https://nynj-ai.neurun.com/chunk-BG7OU4P7.js": "assets/chunk-BG7OU4P7.js"};
// Pre-populate path+query keys: when opened via file://, JS
// resolves '/foo.js' against file://… so we lose the original
// origin. Indexing by pathname+search lets the lookup succeed.
var _add = {};
for (var _k in ASSET_MAP) {
  try { var _u = new URL(_k); _add[_u.pathname + _u.search] = ASSET_MAP[_k]; }
  catch(e){}
}
for (var _k in _add) if (!ASSET_MAP[_k]) ASSET_MAP[_k] = _add[_k];
function resolveLocal(u){
  if (!u || typeof u !== 'string') return null;
  if (u.indexOf('data:') === 0 || u.indexOf('blob:') === 0) return null;
  if (ASSET_MAP[u]) return ASSET_MAP[u];
  try {
    var url = new URL(u, location.href);
    var pq = url.pathname + url.search;
    if (ASSET_MAP[pq]) return ASSET_MAP[pq];
    // The snapshot may be opened from a subdirectory, while
    // ASSET_MAP paths are origin-rooted. Retry with the
    // document's own directory prefix stripped off.
    var dir = location.pathname.replace(/[^/]*$/, '');
    if (dir.length > 1 && pq.indexOf(dir) === 0) {
      var rel = pq.slice(dir.length - 1);
      if (ASSET_MAP[rel]) return ASSET_MAP[rel];
    }
    // Next.js image optimization wrapper — peel the inner CDN URL
    if (/_next\/image$/.test(url.pathname)) {
      var t = url.searchParams.get('url');
      if (t) {
        var dec = decodeURIComponent(t);
        if (ASSET_MAP[dec]) return ASSET_MAP[dec];
        var bare = dec.split('?')[0];
        for (var k in ASSET_MAP) {
          if (k.split('?')[0] === bare) return ASSET_MAP[k];
        }
      }
    }
  } catch(e){}
  return null;
}
function rewriteSrcset(s){
  if (!s || typeof s !== 'string') return s;
  return s.split(',').map(function(it){
    var p = it.trim().split(/\s+/);
    var loc = resolveLocal(p[0]);
    if (loc) p[0] = loc;
    return p.join(' ');
  }).join(', ');
}
// Patch property setters: el.src = '...' / el.href = '...'
// IMPORTANT: skip rewrite when the element has crossOrigin set.
// WebGL textures (UnicornStudio, Three.js, etc.) are loaded via
//   img.crossOrigin = 'anonymous'; img.src = 'https://cdn/...'
// and consumed via gl.texImage2D. file:// resources have no CORS
// headers, so rewriting to local makes WebGL reject the texture
// (Access blocked by CORS policy → black/missing 3D scene).
// Better to keep the original URL: works online, fails offline,
// matches non-patched behaviour.
function patchSetter(klass, prop, transform){
  if (!klass || !klass.prototype) return;
  var desc = Object.getOwnPropertyDescriptor(klass.prototype, prop);
  if (!desc || !desc.set) return;
  Object.defineProperty(klass.prototype, prop, {
    configurable: true,
    get: desc.get,
    set: function(v){
      try {
        if (transform === 'srcset') {
          v = rewriteSrcset(v);
        } else {
          // Captured runtime resource (UnicornStudio texture,
          // etc.) → serve as a data: URI. data: never CORS-
          // taints a WebGL canvas, unlike a file:// texture,
          // so gl.texImage2D still accepts it offline.
          var du = window.__offlineDataUri && window.__offlineDataUri(v);
          if (du) { v = du; }
          else if (!this.crossOrigin) {
            var loc = resolveLocal(v); if (loc) v = loc;
          }
        }
      } catch(e){}
      desc.set.call(this, v);
    }
  });
}
patchSetter(window.HTMLScriptElement, 'src');
patchSetter(window.HTMLLinkElement, 'href');
patchSetter(window.HTMLImageElement, 'src');
patchSetter(window.HTMLImageElement, 'srcset', 'srcset');
patchSetter(window.HTMLSourceElement, 'src');
patchSetter(window.HTMLSourceElement, 'srcset', 'srcset');
patchSetter(window.HTMLMediaElement, 'src');
patchSetter(window.HTMLIFrameElement, 'src');
// Patch setAttribute too — some libs use it instead of property set
var _setAttr = Element.prototype.setAttribute;
Element.prototype.setAttribute = function(name, value){
  try {
    if (typeof value === 'string') {
      if (name === 'src' || name === 'href') {
        var du = window.__offlineDataUri && window.__offlineDataUri(value);
        if (du) { value = du; }
        else if (!this.crossOrigin) {
          var loc = resolveLocal(value); if (loc) value = loc;
        }
      } else if (name === 'srcset' && !this.crossOrigin) {
        value = rewriteSrcset(value);
      }
    }
  } catch(e){}
  return _setAttr.call(this, name, value);
};
// Expose for the late-init script in body
window.__resolveLocal = resolveLocal;
window.__rewriteSrcset = rewriteSrcset;
})();

// --- Combined Script ---


			document.addEventListener('DOMContentLoaded', function() {
				const formContainer = document.querySelector('.s7-4');
				if (!formContainer) return;

				const urlParams = new URLSearchParams(window.location.search);
				const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'utm_knock'];

				utmKeys.forEach(key => {
					const value = urlParams.get(key);
					if (value) localStorage.setItem(key, value);
				});

				utmKeys.forEach(key => {
					const input = formContainer.querySelector(`#${key}`);
					if (input) {
						const urlValue = urlParams.get(key);
						const storedValue = localStorage.getItem(key);
						const valueToSet = urlValue || storedValue;
						if (valueToSet) {
							input.value = valueToSet;
							input.setAttribute('value', valueToSet);
						}
					}
				});

				const urll = formContainer.querySelector('#urll');
				if (urll) {
					urll.value = window.location.href;
					urll.setAttribute('value', window.location.href);
				}

				const now = new Date();
				const dateField = formContainer.querySelector('#dataclient');
				if (dateField) {
					const dateStr = now.toLocaleDateString('en-GB');
					dateField.value = dateStr;
					dateField.setAttribute('value', dateStr);
				}
				const timeField = formContainer.querySelector('#timeclient');
				if (timeField) {
					const timeStr = now.toLocaleTimeString();
					timeField.value = timeStr;
					timeField.setAttribute('value', timeStr);
				}

				const referrer = document.referrer || 'Direct visit or unknown source';
				const urlBackField = formContainer.querySelector('#urlback');
				if (urlBackField) {
					urlBackField.value = referrer;
					urlBackField.setAttribute('value', referrer);
				}
				const linkContactField = formContainer.querySelector('#linkcontact');
				if (linkContactField) {
					linkContactField.value = referrer;
					linkContactField.setAttribute('value', referrer);
				}

				fetch("https://ipinfo.io/json?token=e331fc3befc868")
					.then(response => response.json())
					.then(data => {
						const ipField = formContainer.querySelector('#ipdetails');
						if (ipField) {
							const ipString = `IP: ${data.ip}, City: ${data.city}, Region: ${data.region}, Country: ${data.country}`;
							ipField.value = ipString;
							ipField.setAttribute('value', ipString);
						}
					});
			});
		

// --- Combined Script ---


			document.addEventListener('DOMContentLoaded', function() {
				const formContainer = document.querySelector('.form-footer__class');
				if (!formContainer) return;

				const urlParams = new URLSearchParams(window.location.search);
				const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'utm_knock'];

				utmKeys.forEach(key => {
					const value = urlParams.get(key);
					if (value) localStorage.setItem(key, value);
				});

				utmKeys.forEach(key => {
					const input = formContainer.querySelector(`[name="${key}"]`);
					if (input) {
						const urlValue = urlParams.get(key);
						const storedValue = localStorage.getItem(key);
						const valueToSet = urlValue || storedValue;
						if (valueToSet) {
							input.value = valueToSet;
							input.setAttribute('value', valueToSet);
						}
					}
				});

				const urll = formContainer.querySelector('[name="urll"]');
				if (urll) {
					urll.value = window.location.href;
					urll.setAttribute('value', window.location.href);
				}

				const now = new Date();
				const dateField = formContainer.querySelector('[name="dataclient"]');
				if (dateField) {
					const dateStr = now.toLocaleDateString('en-GB');
					dateField.value = dateStr;
					dateField.setAttribute('value', dateStr);
				}
				const timeField = formContainer.querySelector('[name="timeclient"]');
				if (timeField) {
					const timeStr = now.toLocaleTimeString();
					timeField.value = timeStr;
					timeField.setAttribute('value', timeStr);
				}

				const referrer = document.referrer || 'Direct visit or unknown source';
				const urlBackField = formContainer.querySelector('[name="urlback"]');
				if (urlBackField) {
					urlBackField.value = referrer;
					urlBackField.setAttribute('value', referrer);
				}
				const linkContactField = formContainer.querySelector('[name="linkcontact"]');
				if (linkContactField) {
					linkContactField.value = referrer;
					linkContactField.setAttribute('value', referrer);
				}

				fetch("https://ipinfo.io/json?token=e331fc3befc868")
					.then(response => response.json())
					.then(data => {
						const ipField = formContainer.querySelector('[name="ipdetails"]');
						if (ipField) {
							const ipString = `IP: ${data.ip}, City: ${data.city}, Region: ${data.region}, Country: ${data.country}`;
							ipField.value = ipString;
							ipField.setAttribute('value', ipString);
						}
					});
			});
		