angular.module('myApp').controller('modalCard',function($scope, $modalInstance, cardSelected)
{
    $scope.cardSelected = cardSelected;
    $scope.ok = function()
    {
        $modalInstance.close($scope.cardSelected);
    }
})