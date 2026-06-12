
			//wpcf7submit wpcf7mailsent
			document.addEventListener('wpcf7mailsent', function(event) {
				//alert(event.detail.contactFormId);
				if ('130' == event.detail.contactFormId) {
					$(".footer-form-wrapper").addClass("success");
				}
				if ('131' == event.detail.contactFormId) {
					$("#section-form").addClass("success");
					lenis.resize();
					lenis.scrollTo('#section-form', {
						offset: 1,
						duration: 1,
					});
				}
			}, false);
		

// --- Combined Script ---


			(function() {
				var FORM_ID = 130,
					MC_U = 'c6249a0ac9aa727cbb2cd940e',
					MC_ID = '7213eae718',
					MC_URL = 'https://nynjfwc26.us21.list-manage.com/subscribe/post',
					MC_TAGS = '3035479',
					OPEN_RESPONSE = false,
					DEBUG = false;

				function log() {
					if (DEBUG) try {
						console.log.apply(console, arguments)
					} catch (e) {}
				}

				function submit(email, fname, tags) {
					var f = document.createElement('form');
					f.action = MC_URL + '?u=' + encodeURIComponent(MC_U) + '&id=' + encodeURIComponent(MC_ID);
					f.method = 'POST';
					f.style.display = 'none';
					f.target = OPEN_RESPONSE ? '_blank' : 'mc_hidden_iframe';
					[
						['EMAIL', email],
						['FNAME', fname || ''],
						['tags', tags || ''],
						['b_' + MC_U + '_' + MC_ID, '']
					].forEach(function(p) {
						var i = document.createElement('input');
						i.type = 'hidden';
						i.name = p[0];
						i.value = p[1];
						f.appendChild(i)
					});
					if (!OPEN_RESPONSE) {
						var iframe = document.getElementById('mc_hidden_iframe');
						if (!iframe) {
							iframe = document.createElement('iframe');
							iframe.name = 'mc_hidden_iframe';
							iframe.id = 'mc_hidden_iframe';
							iframe.style.display = 'none';
							document.body.appendChild(iframe)
						}
					}
					document.body.appendChild(f);
					f.submit();
					setTimeout(function() {
						try {
							f.remove()
						} catch (e) {}
					}, 4000)
				}
				var sent = new WeakSet();
				document.addEventListener('wpcf7mailsent', function(e) {
					if (e.detail && e.detail.contactFormId && String(e.detail.contactFormId) !== String(FORM_ID)) return;
					var form = e.target;
					if (!form || sent.has(form)) return;
					sent.add(form);
					var emailEl = form.querySelector('input[name="your-email"],input[type="email"]');
					var email = emailEl ? emailEl.value.trim() : '';
					if (!email) return;
					var fnameEl = form.querySelector('input[name="your-name"],input[name="first-name"]');
					var fname = fnameEl ? fnameEl.value.trim() : '';
					var tagsEl = form.querySelector('input[name="mc4wp_tags"]');
					var tags = tagsEl ? (tagsEl.value || '') : MC_TAGS;
					log('MC submit', email, fname, tags);
					submit(email, fname, tags)
				}, false)
			})();
		

// --- Combined Script ---


			window.fifaMailchimpProxy = {
				ajaxUrl: 'https://nynjfwc26.com/wp-admin/admin-ajax.php',
				nonce: 'fc438cd8e2'
			};
		