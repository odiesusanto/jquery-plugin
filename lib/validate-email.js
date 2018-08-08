(function ($) {
	$.fn.emailValidator = function () {
		$('[name="email"]').keypress(function() {

			let email = this.value;
			let emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			let check = emailChecker.test(email.toLowerCase());

			if (check) {
				$("div").text("Valid format").css('color', 'green')
				$('[name="email"]').css("border-color", "green")
			} else {
				$("div").text("Invalid email format").css('color', 'red')
				$('[name="email"]').css('border-color', 'red')
			}
		})
	}
})(jQuery)
