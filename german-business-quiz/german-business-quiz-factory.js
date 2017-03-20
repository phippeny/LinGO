(function () {
    'use strict';

    angular
        .module("lingoApp")
        .factory("QuizFactory", QuizFactory);

    QuizFactory.$inject = ["$http"];

    function QuizFactory($http) {
        var urlPrefix = "https://pacoima-ypi.azurewebsites.net/";

        return {
            getQuiz: getQuiz
        }

        function getQuiz() {
            return $http.get(urlPrefix + "api/quizzes/questions/978")
        }

        function postAnswers() {
            return $http.post(urlPrefix + "api/")
        }


    }

})();