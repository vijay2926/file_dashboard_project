$('.sidebar_cotroll').click(function() { 
	$('.main_area').addClass('full');
	$('aside ').addClass('inactive');
	$('.close-full ').addClass('active');

});

$('.close_btn').click(function() {

	$('.main_area').removeClass('full');
	$('aside ').removeClass('inactive');
	$('.close-full ').removeClass('active');

});
 

var $btn = document.getElementById("submit");
var $form = document.getElementById("form")

function signIn() {
  if ($form.checkValidity()) {
    $btn.classList.add('pending');
    window.setTimeout(function(){ $btn.classList.add('granted'); }, 1500);
  }
}

$btn.addEventListener("click", signIn);


//////////////////////  aside naviteams dropshow   ////////////////


 

