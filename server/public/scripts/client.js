var app = angular.module('TaskApp', []);

app.controller('TaskController', ['$http', function($http) {
    var self = this;

    self.toDo = {
        completed: false,
        description: ''
    };
    self.toDoList = [];

    self.getList = function() {
        $http({
            method: 'GET',
            url: '/task'
        })
        .then(function(response) {
            self.toDoList = response.data;
        })
        .catch(function(error) {
            console.log('error on /task GET', error);
        });
    }

    self.createToDo = function() {
        $http({
            method: 'POST',
            url: '/task',
            data: self.toDo
        })
        .then(function(response) {
            console.log('response from server on POST:',response);
            self.getList();
        })
        .catch(function(error) {
            console.log('error on /task POST',error);
        });
    }

    self.deleteToDo = function(toDont) {
        if (confirm('Confirm deletion?')) {
            $http({
                method: 'DELETE',
                url: '/task',
                params: toDont
            })
            .then(function(response) {
                console.log('response from server on DELETE:',response);
                self.getList();
            })
            .catch(function(error) {
                console.log('error on /food DELETE',error);
            });
        }
    }

    self.editToDo = function(updatedToDo) {
        $http({
            method: 'PUT',
            url: '/task',
            data: updatedToDo
        })
        .then(function(response) {
            console.log('response from server on PUT:',response);
            self.getList();
        })
        .catch(function(error) {
            console.log('error on /food PUT',error);
        });
    }

    self.getList();
}]);