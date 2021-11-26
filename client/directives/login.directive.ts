

module app {
    'use strict'

    @Directive({
        name: 'loginDirective',
        restrict: 'E',
        bindToController: {
            userDto: "=",
            userlogin: "userlogin"
        },
        link: (scope: angular.IScope, el: JQuery, attrs: angular.IAttributes, ctrl: LoginDirectiveCtrl) => {
        },
        templateUrl: '/login.html'
    })

    @Controller('LoginDirectiveCtrl')
    export class LoginDirectiveCtrl {
        private userDto: UserDto;
        private userlogin: InternDto;
       
        constructor() {

            this.userlogin = new InternDto();
            this.userlogin.internID = '6666';
            this.userlogin.internName = 'Trần lê gia hân';
            this.userlogin.internBirthday = '27/06/1999';
            this.userlogin.internInCompanyDay = '15/11/2021';
         }
        
    }

}