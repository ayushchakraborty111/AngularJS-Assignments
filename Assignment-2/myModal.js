angular.module('myApp').controller('modalImplementation', function($scope, $modalInstance){
    $scope.ok = function()
    {
        $modalInstance.close();
    };
    $scope.cancel = function()
    {
        $modalInstance.dismiss('cancel');
    };
})