var app = angular.module("books",[]);
angular.module("books").controller("books_controller",function($interval,$timeout,$scope,$http) {	
	//variaveis de escopo
	$scope.categoria = "";
	$scope.carregando = true;
	$scope.load = 0;
	//endereço dos jsons
	home = 'https://www.dropbox.com/s/9346fuuuhahu8m2/home.json?dl=1';
	transicao = 'https://www.dropbox.com/s/sziguclzzplh2us/transicao.json?dl=1';
	$scope.carregar = function (cat) {
		$scope.carregando = true;
		$scope.load = 0;
		if(cat == 1){
			 cat = home; 
			 $scope.categoria = "Destaques";}
		if(cat == 2){ 
			cat = transicao; 
			$scope.categoria = "Ascensão Planetária";}

	$http.get(cat).then(function (success){
   		console.log("funfou  "+cat); 
   		$scope.books = [];
   		var jsObj = angular.fromJson(success);  		
   		$scope.books = jsObj.data.books;
   		console.log($scope.books);
   		
   		var intervalo = 100;
   		$interval(function(){ 
   			if($scope.load < 100){  			
   				$scope.load = $scope.load + 10; 
   				}else{
   					intervalo = 1000000;
   				}  			
   		},intervalo);			
   			
		$timeout(function () {
   			$scope.carregando = false;
   		}, 2000);

   		

   	
   },function (error){
   		console.log("erro");
   });
}
	

	$scope.carregar(1);
	


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
		$timeout(function() {
			$("#soundcloud").slideDown("slow");
		},1000);	
		$timeout(function() {
			$("#pdf").fadein(1000);
		},100);			
		$timeout(function() {
			$("#player").fadein(10000);
		},1000);	
	}
	


});
 