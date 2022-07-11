app.config(routesConfig);

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routesConfig($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/mail/Inbox/');
    $stateProvider
    .state('mail', {
        url: '/mail',
        template: '<ui-view/>',
        abstract: true
    })
    .state('mail.folder', {
        url: '/{folder}',
        templateUrl: 'src/template/common.html',
        abstract: true,
        controller: 'tabController',
    })
    .state('mail.folder.preview', {
        url: '/{messageId}',
        views: {
            "individualMsg": {
                templateUrl: 'src/template/commonIndividual.html',
                controller: 'individualTabController'
            },
            "time": {
                templateUrl: "src/template/time.html",
                controller: 'timeController'
            }
        }
    })
}