
			jQuery(function($) {
				$('.js-selector').each(function() {
					var $sel = $(this),
						$holder = $sel.find('.selector-holder'),
						$display = $sel.find('.js-selector-value'),
						$list = $sel.find('.js-selector-list'),
						$form = $sel.closest('form'),
						$hidden = $form.find('[name="your-select"]');
					$holder.on('click', function(e) {
						e.preventDefault();
						$sel.toggleClass('open');
					});
					$list.on('mousedown click touchstart', '.js-selector-option, .selector-option, .selector-option-inner', function(e) {
						e.preventDefault();
						e.stopPropagation();
						var $base = $(this).closest('.selector-option').find('.js-selector-option').eq(0);
						if (!$base.length) {
							$base = $(this);
						}
						var val = $base.data('value') || $base.text().trim();
						var msg = $base.data('message') || '';
						$display.val(val);
						if ($hidden.length) {
							$hidden.val(val).trigger('change');
						}
						$list.find('.js-selector-option').removeClass('is-selected');
						$base.addClass('is-selected');
						$sel.removeClass('open');
						var $msgGroup = $sel.closest('.formbox-cell, .formbox').find('.selector-message-group');
						if ($msgGroup.length) {
							$msgGroup.find('.selector-message').hide();
							if (msg) {
								$msgGroup.find(msg).show();
							}
						}
					});
					$list.on('keydown', '.js-selector-option, .selector-option-inner', function(e) {
						if (e.key === 'Enter' || e.key === ' ') {
							$(this).trigger('click');
						}
					});
					$(document).on('click', function(e) {
						if (!$(e.target).closest('.js-selector').length) {
							$('.js-selector').removeClass('open');
						}
					});
					if ($form.length) {
						$form.on('submit', function(e) {
							var required = $hidden.hasClass('wpcf7-validates-as-required') || $hidden.prop('required'),
								val = $hidden.val();
							if (!val && $display.val()) {
								$hidden.val($display.val());
								val = $hidden.val();
							}
							if (required && !val) {
								e.preventDefault();
								$display.addClass('is-error').attr('aria-invalid', 'true');
							} else {
								$display.removeClass('is-error').removeAttr('aria-invalid');
							}
						});
					}
				});
				document.addEventListener('wpcf7mailsent', function(ev) {
					var $form = $(ev.target);
					$form.find('.js-selector-value').val('');
					$form.find('[name="your-select"]').val('');
					$form.find('.js-selector').removeClass('open');
					$form.find('.selector-message').hide();
				}, false);
			});
		