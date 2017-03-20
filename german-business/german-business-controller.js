(function () {
    "use strict";

    angular
        .module("lingoApp")
        .controller("GermanBusinessController", GermanBusinessController)

    GermanBusinessController.$inject = ["$scope", "$http", "GermanBusinessFactory"];

    function GermanBusinessController($scope, $http, GermanBusinessFactory) {
        var vm = this;

        vm.CourseData = CourseData;

        activate();

        function activate() {
          return GermanBusinessFactory.getGermanBusiness().then(CourseData);
        }

        function CourseData(course) {
            vm.item = course.data.item;

            console.log(vm.item)
        }

    }

})();