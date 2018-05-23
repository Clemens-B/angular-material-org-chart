class UserDetailsController  {

    /**
     * Constructor
     *
     * @param $mdBottomSheet
     * @param $log
     */
    constructor($mdBottomSheet, $log) {
      this.$mdBottomSheet = $mdBottomSheet;
      this.$log = $log;
      this.self = this;
    }
  
    /**
     * Show the bottom sheet
     */
    share() {
      console.log(this.self.users)
      var users = this.users;
      var $mdBottomSheet = this.$mdBottomSheet;
  
      $mdBottomSheet.show({
        parent: angular.element(document. getElementById('content')),
        templateUrl: 'src/users/components/details/ContactSheet.html',
        controller: [ '$mdBottomSheet', UserSheetController],
        controllerAs: "$ctrl",
        bindToController : true
      }).then((clickedItem) => {
        this.$log.debug( clickedItem.name + ' clicked!');
      });
  

      function UserSheetController( $mdBottomSheet ) {
        this.users = users;
        this.items = [
          { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
          { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
          { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
          { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
        ];
        this.performAction = (action) => {
          $mdBottomSheet.hide(action);
        };
      }
    }
  
  }
  export default UserDetailsController;
  
  