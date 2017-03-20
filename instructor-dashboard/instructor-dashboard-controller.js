(function () {
    "use: strict"

    angular
        .module("lingoApp")
        .controller("InstructorDashController", InstructorDashController);

    InstructorDashController.$inject = ["$scope", "$http", "InstructorFactory"];

    function InstructorDashController($scope, $http, InstructorFactory) {
        var vm = this;
        vm.onSubmit = onSubmit;
        vm.questionSubmit = questionSubmit;
        vm.onSuccess = onSuccess;
        vm.addCourseFunction = addCourseFunction;

        //vm.newQuiz = {};

        function onSubmit() {
            var addQuizData = {
                QuizName: vm.quizName,
                CoverPage: vm.CoverPage,
                EndPage: vm.endPage,
                DefaultAnswerType: vm.defaultAnswer,
                Timer: vm.timer,
                RandomizeQuestions: vm.randomQ,
                RandomizeAnswers: vm.randomA,
                EmployerId: vm.employerId
            }

            InstructorFactory.createQuiz(addQuizData).then(onSuccess);
        }


        function questionSubmit() {
            var addQuestionData = {
                UserId: vm.userId,
                QuizId: vm.quizId,
                Question: vm.question,
                Timer: vm.timer,
                AnswerType: vm.answerType,
                Answers: [
                    { answer: vm.answer1 }
                    , { answer: vm.answer2 }
                    , { answer: vm.answer3 }
                ],
                OpenAnswer: null,
                Media: null,
                Tags: null

            }
            InstructorFactory.addQuestion(addQuestionData).then(onSuccess);
        };


        function addCourseFunction() {
            var addCourseData = {
                Details: vm.Details,
                CourseLessons: vm.courseLessons,
                Code: vm.Code,
                Title: vm.Title,
                Description: vm.courseDescription,
                Price: vm.price,
                Format: vm.Format,
                imageSource: vm.imageSource,
                Minutes: vm.minutes
            }
            InstructorFactory.addCourse(addCourseData).then(onSuccess);
        }


        function onSuccess() {
            console.log("Success!");
        }
    }

})();


