"use strict";

angular.module('app').controller('userEditController', function ($scope, $uibModal) {

  var modalInstance = null;
  //$scope.user = null; // from directive scope

  $scope.scopes = [
    'create',
    'read',
    'update',
    'delete',
    'check'
  ];

  $scope.openModal = function () {
    console.log('open modal');
    modalInstance = $uibModal.open({
      templateUrl: 'templates/modal/user-edit.html',
      scope: $scope
    });
  };
  $scope.cancel = function () {
    if (!modalInstance) return;
    modalInstance.dismiss('cancel');
  };
  $scope.save = function (form) {
    if (form.$invalid) return;
    $scope.user.update().then(function () {
      modalInstance.dismiss('cancel');
    });
  };
  $scope.remove = function () {
    $scope.user.remove().then(function () {
      modalInstance.dismiss('cancel');
    });
  }
});

angular.module('app').directive('userEdit', function () {
  return {
    restrict: 'EA',
    controller: 'userEditController',
    scope: {
      user: '=userEdit'
    },
    link: function (scope, el, attrs) {
      el.bind('click', function () {
        scope.openModal();
      })
    }
  };
});
