const main = function () {
	const hero = document.querySelector(".hero");
	const imgs = document.querySelectorAll(".parallax img");

	window.addEventListener("scroll", function () {
		let windowY = window.scrollY;

		imgs[0].style.transform = `translate(0px, ${windowY / 20}%)`;

		imgs[1].style.transform = `translate(0px, ${windowY / 30}%)`;

		imgs[2].style.transform = `translate(0px, ${windowY / 40}%)`;

		imgs[3].style.transform = `translate(0px, ${windowY / 50}%)`;

		imgs[4].style.transform = `translate(0px, ${windowY / 60}%)`;

		imgs[5].style.transform = `translate(0px, ${windowY / 70}%)`;
	});
};

// Execute main function
main();
