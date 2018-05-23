/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdDialog, $scope) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.status   	  = "";

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( response ) {
          self.users    = [].concat(response.data.structure);
        });

  // *********************************
  // Internal methods
  // *********************************

  function DialogController($scope, $mdDialog, user) {
    $scope.user = user;
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user, ev ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'src/users/components/details/UserDetails.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      locals: {
        user: self.selected
      },
    })
    .then(function(answer) {
      self.status = 'You said the information was "' + answer + '".';
    }, function() {
      self.status = 'You cancelled the dialog.';
    });
  }
}

export default [ 'UsersDataService', '$mdDialog', AppController ];
