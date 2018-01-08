angular.module('GetTokenApp.controllers', [])
.controller('tokenController', ['$scope', '$http', 'growl', function($scope, $http, growl) {
    
    var vm = this;

    vm.clientSecretInputType = 'password';

    vm.showClientSecret = function(show) {
        if(show)
            vm.clientSecretInputType = 'text';
        else
            vm.clientSecretInputType = 'password';
    }

    vm.submitForm = function() {

        var request = {
            auth_url: vm.authUrl,
            client_id: vm.clientId, 
            client_secret: vm.clientSecret,
            audience: vm.audience
        };

        $http.post( "/token",  request )
            .then(function(response) {
                var tokenResponse = angular.fromJson(response.data);
                console.log('tokenResponse:',tokenResponse)
                vm.token = tokenResponse.access_token;
            }, function(response) {
                console.log('request failed:',response);
            })
    };

    vm.clipboardOnSuccess = function(evt) {
        growl.general('Coped to clipboard!', {ttl:4000}, 'success');
        //growl.success('Copied to clipboard.',{title: 'Copy Success'});
    };
}]);