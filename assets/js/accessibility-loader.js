
		(function() {
			var s = document.createElement('script');
			var h = document.querySelector('head') || document.body;
			s.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
			s.async = true;
			s.onload = function() {
				acsbJS.init({
					statementLink: '',
					footerHtml: 'Web Accessibility by DD.NYC®',
					hideMobile: false,
					hideTrigger: false,
					disableBgProcess: false,
					language: 'en',
					position: 'left',
					leadColor: '#000000',
					triggerColor: '#000000',
					triggerRadius: '50%',
					triggerPositionX: 'right',
					triggerPositionY: 'bottom',
					triggerIcon: 'people',
					triggerSize: 'medium',
					triggerOffsetX: 40,
					triggerOffsetY: 40,
					mobile: {
						triggerSize: 'small',
						triggerPositionX: 'right',
						triggerPositionY: 'center',
						triggerOffsetX: 10,
						triggerOffsetY: 0,
						triggerRadius: '50%'
					}
				});
			};
			h.appendChild(s);
		})();
	