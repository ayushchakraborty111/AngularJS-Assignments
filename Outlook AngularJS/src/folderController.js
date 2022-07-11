app.controller('folderController', function($scope, $modalInstance, Factory){
    $scope.folder = Factory.getAllFolder();
    $scope.input1 = Factory.getInput();
    $scope.messages = Factory.messagesArray();
    $scope.ok = function()
    {
        $scope.show = true;
        $scope.folder.push({
            name: this.input1,
            messages: this.messages
        });
        $modalInstance.close($scope.show);
    }
    $scope.cancel = function()
    {
        $modalInstance.dismiss('cancel');
    }
})