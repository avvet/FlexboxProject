// // $(document).ready(function() {

// // 	// transformOrigin:"left top"

// // 	var tlSecond = new TimelineMax({paused: true});
// // 	var text = $('.big_box p');
// // 	var image = $('.big_box_inner');

// // 	tlSecond.to(image, 1, {marginLeft: 420, rotationY: 180, scale: 1.5, yoyo:true, repeat: 1});
// // 	// tlSecond.staggerTo(text, .5, {fontSize: '30px'}, .2);

// // 	$('.small_box').click(function(event) {
// // 		tlSecond.restart();

// // 		var isTweening = TweenMax.isTweening( image ) ;
// // 		console.log('Box was clicked!', isTweening);
// // 	});



// // 	// $('.small_box').mouseenter(function(event) {
// // 	// 	tlSecond.pause();
// // 	// });
// // 	// $('.small_box').mouseleave(function(event) {
// // 	// 	tlSecond.play();
// // 	// });

// // 	// var tlFirst = new TimelineMax({paused: true});

// // 	// tlFirst.to('.big_box', .3, {width: 500, height: 500})
// // 	// .to('.big_box', .3, {marginTop: 200}, '-=.3')
// // 	// .to('.small_box', 1, {rotationY:360, rotationX:180});
	

// // });

// window.onload = function() {

// 	// function print_object(obj){
// 	// 	var res = '<ul>';

// 	// 	for (i in obj)
// 	// 		res += '<li><b>' + i + '</b>: ' + obj[i] + '</li>';
// 	// 	res += '</ul>';
// 	// 	document.write(res);

// 	// }

// 	// var text = document.querySelector('#text');
// 	// print_object(text);//отобразяться все возможные события
// 	// print_object(text.style); //отобразяться все возможные scc стили



// 	var text = document.querySelector('#text');

// 	text.onclick = function(){
// 		text.style.color = 'red';
// 		text.innerHTML = 'Hello';
// 		text.className = 'text';
// 		text.style.fontSize = '4.4rem';
// 	}



// 	var btn_prev = document.querySelector('#gallery .buttons .prev');
// 	var btn_next = document.querySelector('#gallery .buttons .next');
// 	var images = document.querySelectorAll('#gallery .photos .pic');//обращаемся ко всем картинкам, ф-ция querySelectorAll возвращ. массив

// 	// console.log(images); //массив картинок по порядку , начиная с нулевого
// 	var i = 0;// i - это номер текущей картинки

// 	// картинки доступны следующим образом:
// 	// images[0]; //-так обращаемся к первой картинке в массиве
// 	// images[1]; //-ко второй и т.д.

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// 	// btn_prev.onclick = function(){
// 	// 	images[i].style.display = 'none';
// 	// 	i--;

// 	// 	if(i < 0){
// 	// 		i = images.length - 1; //получаем предпоследний номер картинки, т.е предвпоследнюю картинку
// 	// 	}
// 	// 	images[i].style.display = 'block';
// 	// }


// 	// btn_next.onclick = function(){
// 	// 	images[i].style.display = 'none';
// 	// 	i++;
// 	// 	// images[i].style.display = 'block';
// 	// 	// images[i+=1].style.display = 'block';

// 	// 	if(i >= images.length){
// 	// 		i = 0;
// 	// 	}
// 	// 	images[i].style.display = 'block';
// 	// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////















