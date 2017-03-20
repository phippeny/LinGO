(function () {
    "use strict";

    angular
        .module("lingoApp")
        .controller("SingleQuizController", SingleQuizController)

    SingleQuizController.$inject = ["$scope", "$http", "QuizFactory"];

    function SingleQuizController($scope, $http, QuizFactory) {
        var vm = this;

        vm.QuizData = QuizData;

        activate();

        function activate() {
          return QuizFactory.getQuiz().then(QuizData);
        }

        function QuizData(quiz) {
            vm.items = quiz.data.items;

            console.log(quiz.data.items)
        }

    }

})();



// function Avengers(dataservice) {
//     var vm = this;
//     vm.avengers = [];
//     vm.title = 'Avengers';

//     activate();

//     function activate() {
//         return dataservice.getAvengers().then(function (data) {
//             vm.avengers = data;
//             return vm.avengers;
//         });
//     }
// }