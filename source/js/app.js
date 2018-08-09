/*jslint browser: true */
/*global window */
(function () {
	'use strict';
	
	window.onload = function () {
		const menuVm = new Vue({
			el: '.section-menu',
			data: {
				active: false
			}
		});
	};
}());