(function () {
    'use strict';

    angular
        .module('lingoApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            // Home
            .state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'home/home.html'
                    },
                    'carousel@home': {
                        templateUrl: 'home/home-carousel.html'
                    },
                    'services@home': {
                        templateUrl: 'home/home-services.html'
                    },
                    'testimonial@home': {
                        templateUrl: 'home/home-testimonial.html'
                    }
                }
            })

            // German - Business Course
            .state('german-business', {
                url: '/german-business',
                templateUrl: 'german-business/german-business.html',
                controller: 'GermanBusinessController as GBController'
            })

            // German - Business Course Quiz
            .state('german-business-quiz', {
                url: '/german-business-quiz',
                templateUrl: 'german-business/german-business-quiz.html',
                controller: 'SingleQuizController as GBQuiz'
            })

            // German - Thanks for taking the Business Course Quiz
            .state('business-thanks', {
                url: '/german-business-quiz-thanks',
                templateUrl: 'german-business/german-business-quiz-thanks.html',
                controller: 'SingleQuizController as GBQuiz'
            })

            // German - Leisure Course
            .state('german-leisure', {
                url: '/german-leisure',
                templateUrl: 'german-leisure/german-leisure.html',
                controller: null
            })

            // German - Luxury Course
            .state('german-luxury', {
                url: '/german-luxury',
                templateUrl: 'german-luxury/german-luxury.html',
                controller: null
            })

            // German - Course Dashboard
            .state('german-dashboard', {
                url: '/course-dashboard-german',
                templateUrl: 'course-dashboard-german/course-dashboard-german.html',
                controller: null
            })

            // User Dashboard
            .state('user-dashboard', {
                url: '/user-dashboard',
                templateUrl: 'user-dashboard/user-dashboard.html',
                controller: 'CatalogueController as controller'
            })


            // Instructor Dashboard
            .state('instructor-dashboard', {
                url: '/instructor-dashboard',
                templateUrl: 'instructor-dashboard/instructor-dashboard.html',
                controller: 'InstructorDashController as dash'
            })

            // Instructor Page - Spunky
            .state('spunky', {
                url: '/instructor-page-spunky',
                templateUrl: 'instructor-page-spunky/instructor-page-spunky.html',
                controller: null
            })

            // Course Catalogue
            .state('course-catalogue', {
                url: '/course-catalogue',
                templateUrl: 'course-catalogue/course-catalogue.html',
                controller: 'CatalogueController as controller'
            })

            // Login
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'loginController as userLogin'
               
            })
            //Register
            .state('register', {
                url: '/register',
                templateUrl: 'register/register.html',

                controller: 'registerController as createUser',

                controller: 'registerController as newUser'
            })
               //Register-Confirmation 
            .state('confirmation', {
                url: '/register-confirmation',
                templateUrl: 'register/register-confirmation.html'

            })
            // Blog
            .state('blog', {
                url: '/blog',
                templateUrl: 'blog/blogs.html',
                controller: 'BlogController as blog'
            })
            // Blog-Brazil Page
            .state('blog/blog-brazil', {
                url: '/blog-brazil',
                templateUrl: 'blog/blog-brazil.html',
                controller: 'BlogController as blog'
            })
            // FAQs
            .state('faqs', {
                url: '/faqs',
                templateUrl: 'faqs/faqs.html',
                controller: 'FaqController as faqs'
            })

            //USER PROFILE [START]
            .state('user-profile', {
                url: '/user-profile',
                data: sessionStorage.getItem('user'),
                controller: 'ProfileController as user',
                views: {
                    '' : {

                        templateUrl: 'user-profile/user-profile.html'

                    },
                    'main-info@user-profile':{

                        templateUrl: 'user-profile/user-main-info.html'

                    },
                    'settings@user-profile':{

                        templateUrl: 'user-profile/user-settings.html'

                    }
                }
            })

            //USER PROFILE BACKUP [START]
            // .state('user-profile', {
            //     url: '/user-profile',
            //     templateUrl: 'user-profile/user-profile.html',
            //     controller: 'ProfileController as user'
            // })

            // About
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html'
            })

            // Contact
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact/contact.html',
                controller: 'MapsController as maps'
            })

            // Nearby Users
            .state('nearby-users', {
                url: '/nearby-users',
                templateUrl: 'nearby-users/nearby-users.html',
                controller: 'NearbyUsersController as nearby'
            })

        // USER PROFILE [START]
        // .state('user-profile', {
        //     url: '/user-profile',
        //     templateUrl: 'user-profile/user-profile.html',
        //     controller: 'ProfileController as user'
        // })


            // Choose Your Adventure

            .state('adventure', {
                url: '/adventure',
                templateUrl: 'adventure/adventure.html',
            })

            .state('quiz', {
                url: '/adventure-quiz',
                templateUrl: 'adventure/adventure-quiz.html',
                controller: 'AdventureController as quiz',
            })

            .state('detail', {
                url: '/adventure-detail',
                templateUrl: 'adventure/adventure-detail.html',
            })



    }

    
})();