﻿/*==========================================================
    Author      : Kartik S
    Date Created: 24 Dec 2015
    Description : Base for Dashboard Application module
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);


dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //skills page state
    $stateProvider.state('app.skills', {
        url: '/skills',
        templateUrl: 'app/modules/dashboard/views/skills.html',
        controller: 'SkillController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Skills'
        }
    });

    //education page state
    $stateProvider.state('app.education', {
        url: '/education',
        templateUrl: 'app/modules/dashboard/views/education.html',
        controller: 'EducationController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Dashboard Home'
        }
    });

    //Experience page state
    $stateProvider.state('app.experience', {
        url: '/experience',
        templateUrl: 'app/modules/dashboard/views/experience.html',
        controller: 'ExperienceController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Experience'
        }
    });

    //Contact page state
    $stateProvider.state('app.contact', {
        url: '/contact',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Contact Me'
        }
    });

}]);

