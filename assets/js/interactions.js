
			$('.timer').countdownTimer('2026/06/11 12:00', function() {});

			const lenis = new Lenis({
				duration: 0.0,
				//easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
				direction: "vertical",
				gestureDirection: "vertical",
				smooth: true,
				smoothTouch: true,
				touchMultiplier: 1.0,
			});

			function raf(time) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			$(function() {

				const scrollButtons = $('[data-target]');

				scrollButtons.each(function(i) {


					var button = $(this),
						target = button.data("target");


					button.click(function(e) {

						var el = $(target);

						if (el.length) {

							e.preventDefault();

							lenis.scrollTo(target, {
								offset: 1,
								duration: 1,
							});

						} else {

						}

					});

				});

			});

			requestAnimationFrame(raf);
		