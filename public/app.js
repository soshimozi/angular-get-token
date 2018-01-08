var app = angular.module('GetTokenApp', [
  'GetTokenApp.controllers',
  'ngclipboard',
  'angular-growl',
  'ui.bootstrap'
]);

app.config(['growlProvider', function (growlProvider) {
  growlProvider.onlyUniqueMessages(false);
}]);
