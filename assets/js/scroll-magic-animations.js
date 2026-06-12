var controller = typeof controller !== 'undefined' ? controller : new ScrollMagic.Controller();

		$(function() {


			new ScrollMagic.Scene({
				triggerElement: $("#logo-trigger")[0],
				duration: "100%",
				triggerHook: 1.0,
			}).setTween(

				new TimelineMax()
				.from(
					$(".topbar-logo-static"),
					1.0, {
						opacity: 1,
					}
				)

			).addTo(controller);

			let logoAnimation;

			$(window).on("resize", function() {

				var logoMax = 0;

				if (window.innerWidth >= 1024) {

					logoMax = window.innerHeight * 160 / 100;

				} else {

					logoMax = $(".topbar").outerWidth();

				}


				controller.removeScene(logoAnimation);

				$(".topbar-logo-inner").removeAttr("style");

				logoAnimation = new ScrollMagic.Scene({
					triggerElement: $("#logo-trigger")[0],
					duration: "100%",
					triggerHook: 1.0,
				}).setTween(

					new TimelineMax()
					.from(
						$(".topbar-logo-inner"),
						1.0, {
							//width: $(".topbar").outerWidth(),
							width: logoMax,
							"padding-right": "30rem",
							"padding-left": "30rem",
							//height: window.innerHeight,
						}
					)

				).addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $("#logo-trigger")[0],
					duration: "100%",
					triggerHook: 1.0,
				}).addTo(controller).on(

					"leave",

					function(e) {


						var triggerPos = $("#logo-trigger").offset().top;
						var wt = $(window).scrollTop();

						$(".header").toggleClass("clip-header", wt > triggerPos);


					}
				).on(

					"enter",

					function(e) {
						$(".header").removeClass("clip-header");
					}
				);

			});


			/*
			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-1")[0],
				duration: "50%",
				triggerHook: 1.0,
				reverse: true,
			}).setTween(

				new TimelineMax()
				.from(
					$(".s2-8"),
					1.0, {
						x: 0,
						y: 0,
					}
				)

			).addTo(controller).on(

				"enter",

				function(e) {
					$(".s2-3 .s2-7").toggleClass("hidden");

					if ($(".s2-3 .s2-7").hasClass("hidden")) {

						$(".s2-11 .s2-7").toggleClass("hidden", false);
						$(".s2-4 .s2-7").toggleClass("hidden", true);

					} else {

						$(".s2-11 .s2-7").toggleClass("hidden", true);
						$(".s2-4 .s2-7").toggleClass("hidden", true);

					}

				}
			);

			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-1")[0],
				duration: "50%",
				triggerHook: 1.0,
			}).setTween(

				new TimelineMax()
				.from(
					$(".s2-8 img"),
					1.0, {
						rotation: 0,
					}
				)

			).addTo(controller);



			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-2")[0],
				duration: "25%",
				triggerHook: 1.0,
			}).setTween(

				new TimelineMax()
				.to(
					$(".s2-8"),
					1.0, {
						x: 0,
						y: 0,
					}
				)

			).addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-2")[0],
				duration: "100%",
				triggerHook: 1.0,
				reverse: true,
			}).addTo(controller).on(

				"enter",

				function(e) {
					$(".s2-4 .s2-7").toggleClass("hidden");

					if ($(".s2-4 .s2-7").hasClass("hidden")) {

						$(".s2-11 .s2-7").toggleClass("hidden", false);
						$(".s2-3 .s2-7").toggleClass("hidden", true);

					} else {

						$(".s2-11 .s2-7").toggleClass("hidden", true);
						$(".s2-3 .s2-7").toggleClass("hidden", true);

					}

				}
			);

			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-2")[0],
				duration: "25%",
				triggerHook: 1.0,
			}).setTween(

				new TimelineMax()
				.to(
					$(".s2-8 img"),
					1.0, {
						rotation: 0,
					}
				)

			).addTo(controller);


			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-4")[0],
				duration: "200%",
				triggerHook: 1.0,
				reverse: true,
			}).setTween(

				new TimelineMax()
				.to(
					$(".s2-10"),
					1.0, {
						x: "-100%",
					}
				)

			).addTo(controller);
			*/

			// Efeito de revelação progressiva (staggered fade-in, scale & slide-up) ao rolar até os cards
			new ScrollMagic.Scene({
				triggerElement: $(".section-players")[0],
				triggerHook: 0.85,
				reverse: false,
			}).setTween(
				TweenMax.staggerFrom(
					$(".player-card"),
					0.8, {
						opacity: 0,
						y: 60,
						scale: 0.95,
						ease: Power3.easeOut
					},
					0.08
				)
			).addTo(controller);


			/*
			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-5")[0],
				duration: "100%",
				triggerHook: 1.0,
				reverse: true,
			}).setClassToggle(
				$(".document")[0],
				"invert"
			).addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-5")[0],
				duration: "100%",
				triggerHook: 1.0,
				reverse: true,
			}).setClassToggle(
				$(".s2")[0],
				"invert"
			).addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-6")[0],
				duration: "100%",
				triggerHook: 1.0,
				reverse: true,
			}).setClassToggle(
				$(".document")[0],
				"invert"
			).addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $(".s2-9-6")[0],
				duration: "100%",
				triggerHook: 1.0,
				reverse: true,
			}).setClassToggle(
				$(".s2")[0],
				"invert"
			).addTo(controller);
			*/


			new ScrollMagic.Scene({
				triggerElement: $(".s3")[0],
				duration: "100%",
				triggerHook: 1,
			}).setTween(

				new TimelineMax()
				.from(
					$(".s3-5-1"),
					1.0, {
						height: "0%",
					}
				)

			).addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $(".s4")[0],
				duration: "100%",
				triggerHook: 1,
			}).setTween(

				new TimelineMax()
				.to(
					$(".s3-6-1"),
					1.0, {
						height: "0%",
					}
				)

			).addTo(controller);




		});


		document.addEventListener("visibilitychange", function() {
			if (document.hidden) {

				$(document).scrollTop(0);
			}
		});
	