(function () {
    'use strict';

    angular
        .module("lingoApp")
        .factory("GermanBusinessFactory", GermanBusinessFactory);

    GermanBusinessFactory.$inject = ["$http"];

    function GermanBusinessFactory($http) {
        var urlPrefix = "https://pacoima-ypi.azurewebsites.net/";

        return {
            getGermanBusiness: getGermanBusiness
        }

        function getGermanBusiness() {
            return $http.get(urlPrefix + "api/courses/206")
        }

    }

})();