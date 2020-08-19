var modal = document.getElementById("myModal");
//toggle button
if($(".main-content__wrapper").css('display') !== 'none'){
	if (annyang) {    
		var commands = {
			'ravenclaw': function() { 
				// (".main-content__wrapper").toggleClass(house);
				house='ravenclaw';
				$(".sorting-hat,.avatar__mouth").removeClass("animate");
				setTimeout(function () {
					$(".sorting-hat").addClass("animate");
					$(".sorting-hat__answer").text(house + "!");
				}, 1000);
				setTimeout(function () {
					$(".avatar__mouth").addClass("animate");
				}, 1500);
				setTimeout(function () {
					$(".main-content__wrapper").toggleClass(house);
					$("body").css("background", "#006daf");
					$(".ravenclaw").css("background", "#006daf");
				}, 4000);
				setTimeout(()=> {
					$("body").css("background", "black");
					$(".main-content__wrapper").css("display", "none");
					$(".traverse").toggleClass("active");
					$(".traverse").css("animation","0.5s animatetop");
					$("#house-name-1").text("Ravenclaw");
					$("#house-name-2").text("Ravenclaw");
					$(".chibi").attr("src", "assets/img/helenaChibi.png");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			},
			'gryffindor': function() { 
				$(".main-content__wrapper").toggleClass(house);
				house='gryffindor';
				$(".sorting-hat,.avatar__mouth").removeClass("animate");
				setTimeout(function () {
					$(".sorting-hat").addClass("animate");
					$(".sorting-hat__answer").text(house + "!");
				}, 1000);
				setTimeout(function () {
					$(".avatar__mouth").addClass("animate");
				}, 1500);
				setTimeout(function () {
					$(".main-content__wrapper").addClass(house);
					$("body").css("background", "#ad343e");
					$(".gryffindor").css("background", "#ad343e");
				}, 4000);
				setTimeout(()=> {
					$("body").css("background", "black");
					$(".main-content__wrapper").css("display", "none");
					$(".traverse").toggleClass("active");
					$(".traverse").css("animation","0.5s animatetop");
					$("#house-name-1").text("Gryffindor");
					$("#house-name-2").text("Gryffindor");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			},
			'slytherin': function() { 
				$(".main-content__wrapper").toggleClass(house);
				house='slytherin';
				$(".sorting-hat,.avatar__mouth").removeClass("animate");
				setTimeout(function () {
					$(".sorting-hat").addClass("animate");
					$(".sorting-hat__answer").text(house + "!");
				}, 1000);
				setTimeout(function () {
					$(".avatar__mouth").addClass("animate");
				}, 1500);
				setTimeout(function () {
					$(".main-content__wrapper").addClass(house);
					$("body").css("background", "green");
					$(".slytherin").css("background", "green");
				}, 4000);
				setTimeout(()=> {
					$("body").css("background", "black");
					$(".main-content__wrapper").css("display", "none");
					$(".traverse").toggleClass("active");
					$(".traverse").css("animation","0.5s animatetop");
					$("#house-name-1").text("Slytherin");
					$("#house-name-2").text("Slytherin");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			},
			'hufflepuff': function() { 
				$(".main-content__wrapper").toggleClass(house);
				house='hufflepuff';
				$(".sorting-hat,.avatar__mouth").removeClass("animate");
				setTimeout(function () {
					$(".sorting-hat").addClass("animate");
					$(".sorting-hat__answer").text(house + "!");
				}, 1000);
				setTimeout(function () {
					$(".avatar__mouth").addClass("animate");
				}, 1500);
				setTimeout(function () {
					$(".main-content__wrapper").addClass(house);
					$("body").css("background", "#eab000");
					$(".hufflepuff").css("background", "#eab000");
				}, 4000);
				setTimeout(()=> {
					$("body").css("background", "black");
					$(".main-content__wrapper").css("display", "none");
					$(".traverse").toggleClass("active");
					$(".traverse").css("animation","0.5s animatetop");
					$("#house-name-1").text("Hufflepuff");
					$("#house-name-2").text("Hufflepuff");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			}
		};
		console.log(annyang);
		annyang.addCommands(commands);
		annyang.start();
	}
}
$(".js-sort").on("click", ()=> {
	$(".sorting-hat,.avatar__mouth").removeClass("animate");
	var item = "ravenclaw";
	setTimeout(()=> { $(".sorting-hat").addClass("animate"); $(".sorting-hat__answer").text(item + "!"); }, 1000);
	setTimeout(()=> { $(".avatar__mouth").addClass("animate"); }, 1500);
	setTimeout(()=> { $(".main-content__wrapper").addClass(item); $("body").css("background", "#006daf"); }, 4000);
	setTimeout(()=> {
		$("body").css("background", "black");
		$(".main-content__wrapper").css("display", "none");
		$(".traverse").toggleClass("active");
		$(".traverse").css("animation","0.5s animatetop");
	}, 7000);
});
$(".js-first").on("click",()=> {
	$(".butt").css("display", "none");
	$(".map-base").toggleClass("first");
	setTimeout(() => { modal.style.animation="0.5s animatetop"; modal.style.display = "block"; }, 9000);	
});
$(".submit").on("click",()=> {
	var pass = document.getElementById("pass").value;
	switch(pass){
		case "chemical twins":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-1").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-1").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("first"); $(".map-base").toggleClass("second"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-1").toggleClass("active"); $(".loc-2").toggleClass("active");
			$(".msg-1").toggleClass("active"); $(".msg-2").toggleClass("active"); }, 10000);
			break;
		case "dark temptation":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-2").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-2").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-2").toggleClass("active"); $(".msg-3").toggleClass("active"); }, 5300);
			break;
		case "david":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-3").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-3").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("second"); $(".map-base").toggleClass("third"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-2").toggleClass("active"); $(".loc-3").toggleClass("active");
			$(".msg-3").toggleClass("active"); $(".msg-4").toggleClass("active"); }, 10000);
			break;
		case "kfc":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-4").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-4").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-4").toggleClass("active"); $(".msg-5").toggleClass("active"); }, 5300);
			break;
		case "maggie":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-5").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-5").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("third"); $(".map-base").toggleClass("fourth"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-3").toggleClass("active"); $(".loc-4").toggleClass("active");
			$(".msg-5").toggleClass("active"); $(".msg-6").toggleClass("active"); }, 10000);
			break;
		case "litt up":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-6").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-6").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-6").toggleClass("active"); $(".msg-7").toggleClass("active"); }, 5300);
			break;
		case "fourth":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-7").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-7").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("fourth"); $(".map-base").toggleClass("fifth"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-4").toggleClass("active"); $(".loc-5").toggleClass("active");
			$(".msg-7").toggleClass("active"); $(".msg-8").toggleClass("active"); }, 10000);
			break;
		case "vodka":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-8").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-8").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-8").toggleClass("active"); $(".msg-9").toggleClass("active"); }, 5300);
			break;
		case "kittens":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-9").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-9").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("fifth"); $(".map-base").toggleClass("sixth"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-5").toggleClass("active"); $(".loc-6").toggleClass("active");
			$(".msg-9").toggleClass("active"); $(".msg-10").toggleClass("active"); }, 10000);
			break;
		case "photoshop":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-10").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-10").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-10").toggleClass("active"); $(".msg-11").toggleClass("active"); }, 5300);
			break;
		case "buttershock":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-11").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-11").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("sixth"); $(".map-base").toggleClass("seventh"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-6").toggleClass("active"); $(".loc-7").toggleClass("active");
			$(".msg-11").toggleClass("active"); $(".msg-12").toggleClass("active"); }, 10000);
			break;
		case "jack of diamonds":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-12").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-12").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-12").toggleClass("active"); $(".msg-13").toggleClass("active"); }, 5300);
			break;
		case "three":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-13").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-13").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("seventh"); $(".map-base").toggleClass("back"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-7").toggleClass("active"); $(".loc-1").toggleClass("active");
			$(".msg-13").toggleClass("active"); $(".msg-14").toggleClass("active"); }, 10000);
			break;
		case "constant":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".last").toggleClass("active");
			break;
		default:
			document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-ron").toggleClass("active"); $(".wrong").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-ron").toggleClass("active"); $(".wrong").toggleClass("active");
			}, 5000);
			break;
	}
});