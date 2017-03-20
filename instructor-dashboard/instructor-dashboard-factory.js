(function () {
    "use: strict"

    angular
        .module("lingoApp")
        .factory("InstructorFactory", InstructorFactory);


    InstructorFactory.$inject = ["$http"];

    function InstructorFactory($http) {
        var urlPrefix = "https://pacoima-ypi.azurewebsites.net/";
        var service = {
            createQuiz: createQuiz,
            addQuestion: addQuestion,
            addCourse: addCourse
        }

        return service

        function createQuiz(data) {
            var config = {
                method: "POST",
                url: urlPrefix + "api/quizzes",
                withCredentials: true,
                data: data
            }
            return $http(config);
        }

        function addQuestion(data) {
            var config = {
                method: "POST",
                url: urlPrefix + "api/quizzes/questions",
                withCredentials: true,
                data: data
            }
            return $http(config);
        }



        function addCourse(data) {
            var config = {
                method: "POST",
                url: urlPrefix + "api/courses",
                withCredentials: true,
                data: data
            }
            return $http(config);
        }
    }

})();