
							const currentYear = new Date().getFullYear();
							document.getElementById('current-year').textContent = currentYear;
						

// --- Combined Script ---


			document.addEventListener("DOMContentLoaded", function() {
				const cookieBanner = document.getElementById("cookie-banner");
				const acceptButton = document.getElementById("cookies-accept");

				if (!localStorage.getItem("cookiesAccepted")) {
					setTimeout(() => {
						cookieBanner.classList.add("cookie--visible");
					}, 1000);
				}

				acceptButton.addEventListener("click", function(e) {
					e.preventDefault();
					localStorage.setItem("cookiesAccepted", "true");
					cookieBanner.classList.remove("cookie--visible");
				});
			});
		