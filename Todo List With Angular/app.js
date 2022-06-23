let app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
    $scope.inp = "";
    $scope.todos = [];
    $scope.rem = 0;
    $scope.editIndex = false;
    $scope.paraStyle = {
        "background-color":"yellow",
        "font-weight": "bold",
        "font-size": "25px"
    }
    $scope.addTodoFunc = function()
    {
        if($scope.inp.length != 0)
        {
            //object pushed into array
            if($scope.editIndex === false)
            {
                //for filters
                // let val = $scope.inp;
                // let output = $filter('uppercase')(val);
                $scope.todos.push({item: $scope.inp, completed: false});
                $scope.rem = $scope.todos.length;
            }
            else
            {
                $scope.todos[$scope.editIndex].item = $scope.inp;
            }
            $scope.editIndex = false;
            //$scope.show = false;
            $scope.inp = "";
        }
        else
        {
            alert("Field shouldn't be empty");
        }
    }
    $scope.countTask = function()
    {
        let count = 0;
        // if($scope.todos.completed == true)
        // {
        //     count++;
        // }
        $scope.todos.forEach(todo=>{
            if(todo.completed == true)
            {
                count++;
            }
        })        
        return count;
    }
    $scope.deleteItem = function(index)
    {
        $scope.todos.splice(index, 1);
        $scope.rem = $scope.todos.length;
    }
    $scope.editItem = function(index)
    {
        $scope.inp = $scope.todos[index].item;
        $scope.editIndex = index;
        $scope.show = true;
        //function appendAtIndex()
    }
    $scope.orderAsc = function(x)
    {
        $scope.sortAsc = x;
    }
    // $scope.orderDesc = function(x)
    // {
    //     $scope.sortDesc = x;
    // }
})
