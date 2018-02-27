angular.module('Cabbooking').controller('InvoiceController',function($scope,$http,$location,AuthenticationService,$rootScope){




var getdata=function()
{
  $scope.cemail=sessionStorage.getItem('cust_id');
  console.log($scope.cemail);
$scope.driverbookingstatus="unbooked";
console.log($scope.driverbookingstatus);
  $http.get('/api/booking2/'+$scope.cemail+'/'+$scope.driverbookingstatus).then(function(response)

{
  $scope.data=response.data;
  console.log(response);
})

}
getdata();

})
