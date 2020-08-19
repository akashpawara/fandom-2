var modal = document.getElementById("myModal");
let house;
if($(".main-content__wrapper").css('display') !== 'none'){
	if (annyang) {    
		var commands = {
			'ravenclaw': function() { 
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
					$("#house-name-3").text("Ravenclaw");
					$("#initial-intro").text("I am the ghost of Helena Ravenclaw, the daughter of Rowena Ravenclaw. You might also know me as ‘The Grey Lady’. I am so glad to see a wizard as intelligent and capable as you to be a Ravenclaw.");
					$(".chibi").attr("src", "assets/img/helenaChibi.png");
					$(".toast-chibi").attr("src", "assets/img/ravenclaw.png");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			},
			'gryffindor': function() { 
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
					$("#house-name-3").text("Gryffindor");
					$("#initial-intro").text("I am Professor Minerva McGonagal, Head of Gryffindor house. You might also know me as ‘Deputy Headmistress’. I am so glad to see a wizard as intelligent and capable as you to be a Gryffindor.");
					$(".chibi").attr("src", "assets/img/minerva.png");
					$(".toast-chibi").attr("src", "assets/img/griffindor.png");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			},
			'slytherin': function() { 
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
					$("#house-name-3").text("Slytherin");
					$("#initial-intro").text("I am Professor Severus Snape, also know as ‘The Half Blood Prince’. You better be capable and intelligent if you want to be a Slytherin, Orelse I will be the worst nightmare you could ever have.");
					$(".chibi").attr("src", "assets/img/snape.png");
					$(".toast-chibi").attr("src", "assets/img/slytherin.png");
				}, 9000);
				annyang.pause();
				annyang.removeCommands();
				annyang.abort();
			},
			'hufflepuff': function() { 
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
					$("#house-name-3").text("Hufflepuff");
					$("#initial-intro").text("I am Cedric Diggory son of Amos Diggory. Let's be good friends, what do you say? I am so glad to see a wizard as intelligent and capable as you to be a Hufflepuff like me.");
					$(".chibi").attr("src", "assets/img/cedric.png");
					$(".toast-chibi").attr("src", "assets/img/hufflepuff.png");
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
$(".js-first").on("click",()=> {
	$(".butt").css("display", "none");
	$(".map-base").toggleClass("first");
	setTimeout(() => { modal.style.animation="0.5s animatetop"; modal.style.display = "block"; }, 9000);	
});
$(".submit").on("click",()=> {
	var pass = document.getElementById("pass").value;
	switch(pass){
		case "basilisk":
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
		case "mini bar":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-2").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-2").toggleClass("active");
			}, 5000);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-3").toggleClass("active");
			}, 5500);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-3").toggleClass("active");
			}, 10000);
			setTimeout(() => {  $(".map-base").toggleClass("second"); $(".map-base").toggleClass("third"); }, 8000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-2").toggleClass("active"); $(".loc-3").toggleClass("active");
			$(".msg-2").toggleClass("active"); $(".msg-3").toggleClass("active"); }, 16000);
			break;
		case "krishna":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-4").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-4").toggleClass("active");
			}, 5000);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-5").toggleClass("active");
			}, 5500);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-5").toggleClass("active");
			}, 10000);
			setTimeout(() => {  $(".map-base").toggleClass("third"); $(".map-base").toggleClass("fourth"); }, 8000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-3").toggleClass("active"); $(".loc-4").toggleClass("active");
			$(".msg-3").toggleClass("active"); $(".msg-4").toggleClass("active"); }, 16000);
			break;
		case "didi cupboard":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-6").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-6").toggleClass("active");
			}, 5000);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-7").toggleClass("active");
			}, 5500);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-7").toggleClass("active");
			}, 10000);
			setTimeout(() => {  $(".map-base").toggleClass("fourth"); $(".map-base").toggleClass("fifth"); }, 8000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-4").toggleClass("active"); $(".loc-5").toggleClass("active");
			$(".msg-4").toggleClass("active"); $(".msg-5").toggleClass("active"); }, 16000);
			break;
		case "mom jewellery box":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-8").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-8").toggleClass("active");
			}, 5000);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-9").toggleClass("active");
			}, 5500);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-9").toggleClass("active");
			}, 10000);
			setTimeout(() => {  $(".map-base").toggleClass("fifth"); $(".map-base").toggleClass("sixth"); }, 8000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-5").toggleClass("active"); $(".loc-6").toggleClass("active");
			$(".msg-5").toggleClass("active"); $(".msg-6").toggleClass("active"); }, 16000);
			break;
		case "book shelf":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-10").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-10").toggleClass("active");
			}, 5000);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-11").toggleClass("active");
			}, 5500);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-11").toggleClass("active");
			}, 10000);
			setTimeout(() => {  $(".map-base").toggleClass("sixth"); $(".map-base").toggleClass("seventh"); }, 8000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-6").toggleClass("active"); $(".loc-7").toggleClass("active");
			$(".msg-6").toggleClass("active"); $(".msg-7").toggleClass("active"); }, 16000);
			break;
		case "plants":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-12").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-12").toggleClass("active");
			}, 5000);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-13").toggleClass("active");
			}, 5500);
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-13").toggleClass("active");
			}, 10000);
			setTimeout(() => {  $(".map-base").toggleClass("seventh"); $(".map-base").toggleClass("back"); }, 8000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-7").toggleClass("active"); $(".loc-1").toggleClass("active");
			$(".msg-7").toggleClass("active"); $(".msg-8").toggleClass("active"); }, 16000);
			break;
		case "your cupboard":
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