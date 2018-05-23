/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */


function UsersDataService($http) {


  // Promise-based API
  return {
    loadAllUsers: function () {
      // Simulate async nature of real remote calls
      /* return $q.when(users.structure); */
      return $http.get('/assets/org-structure.json');
    }
  };
}

export default ['$http', UsersDataService];

