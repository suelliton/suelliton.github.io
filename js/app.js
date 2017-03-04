var app = angular.module("books",[]);

angular.module("books").controller("books_controller",function($scope,$http) {		


	$scope.carregar = function () {
	$http.get('https://www.dropbox.com/s/wik2e3uc5hv8o3c/teste.json?dl=1').then(function (success){
   		console.log("funfou"); 
   		var jsObj = angular.fromJson(success);  		
   		$scope.books = jsObj.data.books;
   		console.log($scope.books);
   },function (error){
   		console.log("erro");
   });
}
	

	$scope.carregar();
	/*
$scope.books = [
		{
			name:"A_Ciência_Secreta",
			pdf:"pdfs/A_Ciência_Secreta.pdf",
			image:"images/a_ciencia_secreta.jpg",
			categoria:'Ciência',
			autor:"Henri Durville"
		},
		{
			name:"Teoria_das_cordas",
			pdf:"pdfs/Teoria_das_cordas.pdf",
			image:"images/teoria_das_cordas.jpeg",
			categoria:'Budismo',
			autor:'The Elegante'
		},
		{
			name:"As Guerras de Deuses e Homens",
			pdf:"pdfs/As Guerras de Deuses e Homens.pdf",
			image:"images/As Guerras de Deuses e Homens.jpg",
			categoria:'Ascensão Planetária',
			autor:'Torres'
		},
		{
			name:"A Divisão da Terra",
			pdf:"pdfs/A Divisão da Terra.pdf",
			image:"images/A Divisão da Terra.jpg",
			categoria:'Extra-terrestres',
			autor:'Zecharia Sitchin'
		}
	];
*/

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
		console.log($scope.book_show.name);
		$("#soundcloud").hide();		
		setInterval(function() {
			$("#soundcloud").slideDown();
		},5000);	
		var a = setInterval(function () {		

			
		},200);			
	}
	


});
 