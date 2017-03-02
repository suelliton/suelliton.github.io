angular.module('books',[]);
angular.module('books').controller('books_controller',function($scope) {
	$scope.books = [
		{name:'A_Ciência_Secreta.pdf'},
		{name:'Teoria_das_cordas.pdf'}
	];



});