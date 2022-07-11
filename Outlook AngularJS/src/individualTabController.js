
app.controller('individualTabController', individualTabController);

individualTabController.$inject = ['$scope', '$stateParams'];

function individualTabController($scope, $stateParams)
{
    $scope.msgIndividual = $scope.messageArr[$stateParams.messageId];
}
$scope.msgIndividual = "";