var app = angular.module("myApp",['ui.bootstrap']);
app.controller('myCtrl', function ($scope, $modal, $log) {
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

//button array
$scope.buttonArr = [
    {
        displayName: 'PrevBtn',
        name: 'PREVBTN',
        visibility: false
    },
    {
        displayName: 'NextBtn',
        name: 'NEXTBTN',
        visibility: true
    }
]

$scope.tabs = [
    {
        displayName: 'Home',
        name: 'HOME',
        index: 1,
        visibility: true
    },
    {
        displayName: 'Project',
        name: 'PROJECT',
        index: 2,
        visibility: false
    },
    {
        displayName: 'Services',
        name: 'SERVICES',
        index: 3,
        visibility: false
    },
    {
        displayName: 'Contact',
        name: 'CONTACT',
        index: 4,
        visibility: false
    }
]

$scope.toCheckBtn = function()
{
    $scope.index;
    for(let i=0;i<$scope.tabs.length;i++)
    {
        if($scope.tabs[i].visibility == true)
        {
            $scope.index = i;
        }
    }
    if($scope.index != 0 && $scope.index != $scope.tabs.length-1)
    {
        $scope.buttonArr[0].visibility = true;
        $scope.buttonArr[1].visibility = true;
    }
    else if($scope.index == 0)
    {
        $scope.buttonArr[0].visibility = false;
        $scope.buttonArr[1].visibility = true;
    }
    else if($scope.index == $scope.tabs.length-1)
    {
        $scope.buttonArr[0].visibility = true;
        $scope.buttonArr[1].visibility = false;
    }
}

$scope.clickedBtn = function(tab)
{
    for(let i=0;i<$scope.tabs.length;i++)
    {
        $scope.tabs[i].visibility = false;
    }
    $scope.tabs[tab.index-1].visibility = true;
    $scope.toCheckBtn();
}

//Page change when button clicked
$scope.pagedButtons = function(btn)
{
    $scope.index;
    for(let i=0;i<$scope.tabs.length;i++)
    {
        if($scope.tabs[i].visibility == true)
        {
            $scope.index = i;
        }
    }
    if(btn.displayName == 'NextBtn')
    {
        $scope.index++;
        $scope.tabs[$scope.index].visibility = true;
        $scope.tabs[$scope.index-1].visibility = false;
    }
    else if(btn.displayName == 'PrevBtn')
    {
        if($scope.index>0)
        {
            $scope.index--;
            $scope.tabs[$scope.index].visibility = true;
            $scope.tabs[$scope.index+1].visibility = false;
        }
    }
    $scope.toCheckBtn();
}

//Project Page modal
$scope.open = function()
{
    var modal = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'modalImplementation'
    })
    
    modal.result.then(function(){
        $log.info('Modal dismissed at: ' + new Date());
    })
}

//services page modal
$scope.openCardModal = function(cardSelected)
{
    var modalInstance = $modal.open({
        templateUrl: 'myModalCardContent.html',
        controller: 'modalCard',
        resolve: {
            cardSelected: function()
            {
                return cardSelected;
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