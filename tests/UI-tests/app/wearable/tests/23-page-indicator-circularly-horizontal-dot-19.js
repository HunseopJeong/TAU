/*global tau */
(function () {

	var page = document.getElementById("pageIndicatorPage19") || document.getElementById("pageIndicatorCirclePage19"),
		changer = document.getElementById("hsectionchangerc19"),
		sections = document.querySelectorAll("section"),
		sectionChanger,
		elPageIndicator = document.getElementById("pageIndicatorc19"),
		pageIndicator,
		pageIndicatorHandler;

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener("pagebeforeshow", function () {
		// make PageIndicator
		pageIndicator = tau.widget.PageIndicator(elPageIndicator, {numberOfPages: sections.length});
		pageIndicator.setActive(9);
		// make SectionChanger object
		sectionChanger = new tau.widget.SectionChanger(changer, {
			orientation: "horizontal",
			useBouncingEffect: true
		});
	});

	/**
	 * pagehide event handler
	 * Destroys and removes event listeners
	 */
	page.addEventListener("pagehide", function () {
		// release object
		sectionChanger.destroy();
		pageIndicator.destroy();
	});

	/**
	 * sectionchange event handler
	 * @param {Event} e
	 */
	pageIndicatorHandler = function (e) {
		pageIndicator.setActive(e.detail.active);
	};

	changer.addEventListener("sectionchange", pageIndicatorHandler, false);

}());
