const hoverBookmark = (event) => {
	if (event.type === "mouseover" && event.target.className === "bi bi-bookmark") {
		event.target.className = "bi bi-bookmark-fill";
	} else if (event.type === "mouseout" && event.target.className === "bi bi-bookmark-fill") {
		event.target.className = "bi bi-bookmark";
	}
}

$('.carousel .carousel-item').each(function () {
	var minPerSlide = 4;
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < minPerSlide; i++) { next = next.next(); if (!next.length) { next = $(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); }
});

document.addEventListener('mouseover', hoverBookmark);
document.addEventListener('mouseout', hoverBookmark);
