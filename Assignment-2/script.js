var app = angular.module("myApp",['ui.bootstrap']);
app.controller('myCtrl', function ($scope, $modal, $log) {
    $scope.showService = false;
    $scope.showProject = false;
    $scope.showContact=false;
    $scope.showMain = true;
    $scope.home = function () {
        $scope.showMain = true;
        $scope.showService = false
        $scope.showProject = false;
        $scope.showContact=false;
    }
    $scope.service = function () {
        $scope.showService = true;
        $scope.showMain = false;
        $scope.showProject = false;
        $scope.showContact=false;
    }

    
    $scope.project = function () {
        $scope.showProject = true;
        $scope.showMain = false;
        $scope.showService=false;
        $scope.showContact=false;
    }

    $scope.contact = function () {
        $scope.showContact=true;
        $scope.showProject = false;
        $scope.showMain = false;
        $scope.showService=false;
     
    }


$scope.nexthome1=function()
{
    $scope.showProject = true;
    $scope.showMain = false;
    $scope.showService=false;
    $scope.showContact=false;
}

$scope.nexthome2=function()
{
    $scope.showProject = false;
    $scope.showMain = false;
    $scope.showService=true;
    $scope.showContact=false;

}


$scope.nexthome3=function()
{
    $scope.showProject = false;
    $scope.showMain = false;
    $scope.showService=false;
    $scope.showContact=true;
}



$scope.previoushome1=function()
{
    $scope.showService = false;
    $scope.showProject = false;
    $scope.showContact=false;
    $scope.showMain = true;
}

$scope.previoushome2=function()
{
    $scope.showService = false;
    $scope.showProject = true;
    $scope.showContact=false;
    $scope.showMain = false;
}
$scope.previoushome3=function()
{
    $scope.showService = true;
    $scope.showProject = false;
    $scope.showContact=false;
    $scope.showMain = false;
}

$scope.cards = [
{
    image: 'https://digitalnomadgirls.com/wp-content/uploads/2018/10/girl-on-laptop-website-digital-nomad-girls.jpg',
    heading: 'Grow Market Share',
    para: 'Patient Acquisition & Loyalty',
    para1: 'The healthcare marketplace is highly competitive with different provider types - hospitals, urgent care, medical groups, healthcare insurance companies - vying for the same healthcare consumers to boost market share and repeat business. '
},
{
    image: 'https://www.devicemagic.com/wp-content/uploads/2020/10/person_using_smartphone-2.jpg',
    heading: 'Increase Patient Payments',
    para: 'and reduce the cost of collection',
    para1: 'Before providers even meet with a patient, it’s ideal to collect their payment for their upcoming appointment. But much of the time, that isn’t the case. That’s when reminders come in handy through a digital health platform. Automatically, patients can get sent reminders to pay their bills through email, text, app notifications or by phone, all without your staff having to do any extra work.'
},
{
    image: 'https://img.freepik.com/free-photo/female-doctor-nursing-home-helping-old-woman-use-her-phone_482257-22539.jpg',
    heading: 'Improve health outcomes',
    para: 'Activate Patient Behaviours, Reduce Cost',
    para1: "As value-based care continues to gain momentum, the need for patient activation is more apparent. Through the care model, providers are rewarded for the quality of care they provide and they need patients to be an active part in their care plan so that the quality improves and thus, health outcomes"
}
];
// var vm = this;
// $scope.open = function()
// {
//     console.log('button clicked');
//     ModalEditor.open();
// }

//Project Page modal
$scope.open = function()
{
    var modal = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: function($scope, $modalInstance)
        {
            $scope.ok = function()
            {
                $modalInstance.close();
            };
            $scope.cancel = function()
            {
                $modalInstance.dismiss('cancel');
            };
        }
    })
    
    modal.result.then(function(){
        $log.info('Modal dismissed at: ' + new Date());
    })
}

//services page modal
$scope.openCardModal = function(card)
{
    console.log(card);
    var modalInstance = $modal.open({
        templateUrl: 'myModalCardContent.html',
        controller: cardInstanceModalCtrl,
        resolve: {
            card: function()
            {
                return card;
            }
        }
    });
    modalInstance.result.then(function(selectedCard){
        $scope.selected = selectedCard;
    }, function(){
        $log.info('Modal dismissed at: ' + new Date());
    })
}

})

var cardInstanceModalCtrl = function($scope, $modalInstance, card)
{
    $scope.card = card;
    $scope.ok = function()
    {
        $modalInstance.close($scope.card);
    }
}
