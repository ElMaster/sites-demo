/**
 * Created by Мастер on 19.08.2016.
 */

var app = angular.module("clientsApp", []);

app.directive('orderedList', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.data =  attributes;
            // console.log(scope.data)
        }
    }
});
app.controller('ClientsCtrl', function($scope){
    $scope.clients = [
        { id: 1, name: 'John', age: 25, percentage: 0.3 },
        { id: 2, name: 'Jane', age: 39, percentage: 0.18 },
        { id: 3, name: 'Jude', age: 51, percentage: 0.54 },
        { id: 4, name: 'James', age: 18, percentage: 0.32 }
    ];
    $scope.friends = [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Samantha', age:60, gender:'girl'}
    ];
    $scope.percentageOf = function(percentage) {
        return percentage * 100 + ' %';
    };
    $scope.delete = function(client) {
        var index = $scope.clients.indexOf(client);
        $scope.clients.splice(index, 1);
    };

    $scope.create = function() {

        $scope.newClient.id = $scope.clients.length + 1;
        $scope.clients.push($scope.newClient);
        $scope.newClient = null;
    };
    $scope.edit = function(client) {
        $scope.activeClient = client;
    };
    $scope.update = function(client) {
        $scope.activeClient = null;
        console.log( $scope.clients)
    };
    var quest = angular.element(document.querySelector(".ages"));
    var questHeader = quest.find('a');
    console.log(questHeader)
    questHeader.on("click", function (e){
        console.log(angular.element(this).addClass('ddd'))
    });
        $scope.clicked = function(event){
        var jQueryElement = angular.element(event.target).addClass('k');
        // console.log(jQueryElement)
    };
    var quest = angular.element(document.querySelector("#ages"));
    


});
