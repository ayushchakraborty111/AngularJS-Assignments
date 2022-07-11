app.controller('myCtrl', function($scope, Factory, $modal, $log, $timeout){
    $scope.folder = Factory.getAllFolder();
    $scope.addFolder = function()
    {
        $scope.show = false;
        var modal = $modal.open({
            templateUrl: 'src/template/folderAddition.html',
            controller: 'folderController'
        })
        modal.result.then(function(){
            $log.info('Modal dismissed at '+ new Date());
        })
    }
    $scope.messageArr = Factory.messagesArray();
    $scope.messages = function(index)
    {
        var promise = Factory.getMessage(index);
        promise.then(function(data){
            $timeout(function () {
                $scope.messageArr = data;
            }, 2000);
            $modal.open({
                templateUrl: 'src/template/loadingspinner.html',
                controller: 'loadCtrl'
            })
        }).catch(function(err){
            console.log(err);
        })
        // $scope.messageArr = Factory.getMessage(index);
    }
    $scope.messages(0);
    var index = $scope.folder.findIndex(x=>x.name === 'Sent_Items');
    $scope.showAlert = Factory.showAlert();
    $scope.newMessage = function()
    {
        var modal = $modal.open({
            templateUrl: 'src/template/newMessageAddition.html',
            controller: 'newMessageModalController',
            resolve: {
                index: function()
                {
                    return index;
                }
            }
        })
        modal.result.then(function(){
            $log.info('Modal dismissed at '+ new Date());
        })
    }
})