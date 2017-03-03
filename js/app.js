angular.module("books",[]);
angular.module("books").controller("books_controller",function($scope) {
	$scope.teste = "testando";
	$scope.books = [
		{name:"A_Ciência_Secreta",pdf:"pdfs/A_Ciência_Secreta.pdf",image:"images/a_ciencia_secreta.jpg",categoria:'Ciência'},
		{name:"Teoria_das_cordas",pdf:"pdfs/Teoria_das_cordas.pdf",image:"images/teoria_das_cordas.jpeg",categoria:'Budismo'},
		{name:"As Guerras de Deuses e Homens",pdf:"pdfs/As Guerras de Deuses e Homens.pdf",image:"images/As Guerras de Deuses e Homens.jpg",categoria:'Ascensão Planetária'},
		{name:"A Divisão da Terra",pdf:"pdfs/A Divisão da Terra.pdf",image:"images/A Divisão da Terra.jpg",categoria:'Extra-terrestres'}
	];

	$scope.show = function() {
		$("iframe").attr('width','100%');
		$("iframe").attr('height','630');
	}
	$scope.hide = function() {
		$("iframe").attr('width','200');
		$("iframe").attr('height','100');
	}
	$scope.clicked = function(book){
		$scope.book_show = book;
		$("#soundcloud").hide();		
		setInterval(function() {
			$("#soundcloud").slideDown();
		},5000);	
		var a = setInterval(function () {
		$(document).keyup(function(event, customEvent){
    if(typeof customEvent !== 'undefined'){
        event.which = customEvent.which;
    }
    alert(event.which);
});
			$('#soundcloud').click(function(){
  		   $(window).trigger('keyup', {which: 40});
});

			a();
		},200);
			
	}
	


});