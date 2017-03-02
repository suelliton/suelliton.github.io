angular.module("books",[]);
angular.module("books").controller("books_controller",function($scope) {
	$scope.teste = "testando";
	$scope.books = [
		{name:"A_Ciência_Secreta",pdf:"pdfs/A_Ciência_Secreta.pdf",image:"images/a_ciencia_secreta.jpg"},
		{name:"Teoria_das_cordas",pdf:"pdfs/Teoria_das_cordas.pdf",image:"images/teoria_das_cordas.jpeg"}
	];

	$scope.show = function() {
		$("iframe").attr('width','1200');
		$("iframe").attr('height','800');
	}
	$scope.hide = function() {
		$("iframe").attr('width','200');
		$("iframe").attr('height','100');
	}
	$scope.clicked = function(book){
		$scope.book_show = book;	
		$('#input').attr('value',45);	
	}
	


});