var app;
(function (app) {
    'use strict';
    app.templateUrlBase = './client/views';
    function Controller(name) {
        return function (clazz) {
            clazz.$name = name;
            app.angularModule.controller(name, clazz);
        };
    }
    app.Controller = Controller;
    function Directive(directive) {
        return function (clazz) {
            app.angularModule.directive(directive.name, function () {
                directive.controller = clazz;
                if (directive.templateUrl) {
                    directive.templateUrl = app.templateUrlBase + directive.templateUrl;
                }
                directive.controllerAs = 'vm';
                if (directive.bindToController) {
                    directive.scope = {};
                }
                return directive;
            });
        };
    }
    app.Directive = Directive;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    app.angularModule = angular.module('app', ['ui.router']);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    app.angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var mainpage = {
                name: 'mainpage',
                url: '/mainpage',
                templateUrl: '/client/views/mainPage.html',
                controller: 'MainPageController',
                controllerAs: 'vm'
            };
            $stateProvider.state(mainpage);
            $urlRouterProvider.otherwise("mainpage");
        }]);
    app.angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var loginpage = {
                name: 'loginpage',
                url: '/loginpage',
                templateUrl: '/client/views/login.html',
                controller: 'LoginDirectiveCtrl',
                controllerAs: 'vm'
            };
            $stateProvider.state(loginpage);
            $urlRouterProvider.otherwise("loginpage");
        }]);
})(app || (app = {}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app;
(function (app) {
    'use strict';
    var MainPageCtrl = (function () {
        function MainPageCtrl() {
            this.internDto = new app.InternDto();
            this.internDto.internID = '115';
            this.internDto.internName = 'Nguyen Quoc Viet A1';
            this.internDto.internBirthday = '27/06/1999';
            this.internDto.internInCompanyDay = '15/11/2021';
            this.userDto = new app.UserDto();
            this.userDto.userName = 'dev';
            this.userDto.userPassword = '123';
            this.userDto.userRole = 'admin';
        }
        MainPageCtrl = __decorate([
            app.Controller('MainPageController')
        ], MainPageCtrl);
        return MainPageCtrl;
    }());
    app.MainPageCtrl = MainPageCtrl;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var LoginDirectiveCtrl = (function () {
        function LoginDirectiveCtrl() {
            this.userlogin = new app.InternDto();
            this.userlogin.internID = '6666';
            this.userlogin.internName = 'Trần lê gia hân';
            this.userlogin.internBirthday = '27/06/1999';
            this.userlogin.internInCompanyDay = '15/11/2021';
        }
        LoginDirectiveCtrl = __decorate([
            app.Directive({
                name: 'loginDirective',
                restrict: 'E',
                bindToController: {
                    userDto: "=",
                    userlogin: "userlogin"
                },
                link: function (scope, el, attrs, ctrl) {
                },
                templateUrl: '/login.html'
            }),
            app.Controller('LoginDirectiveCtrl')
        ], LoginDirectiveCtrl);
        return LoginDirectiveCtrl;
    }());
    app.LoginDirectiveCtrl = LoginDirectiveCtrl;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var TempDirectiveTestCtrl = (function () {
        function TempDirectiveTestCtrl() {
        }
        TempDirectiveTestCtrl = __decorate([
            app.Directive({
                name: 'tempDirectiveTest',
                restrict: 'E',
                bindToController: {
                    internDto: "="
                },
                link: function (scope, el, attrs, ctrl) {
                },
                templateUrl: '/temp.html'
            }),
            app.Controller('TempDirectiveTestCtrl')
        ], TempDirectiveTestCtrl);
        return TempDirectiveTestCtrl;
    }());
    app.TempDirectiveTestCtrl = TempDirectiveTestCtrl;
})(app || (app = {}));
var app;
(function (app) {
    var InternDto = (function () {
        function InternDto() {
        }
        return InternDto;
    }());
    app.InternDto = InternDto;
})(app || (app = {}));
var app;
(function (app) {
    var UserDto = (function () {
        function UserDto() {
        }
        return UserDto;
    }());
    app.UserDto = UserDto;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21tb24vYW5ub3RhdGlvbi50cyIsImNsaWVudC9jb21tb24vYXBwLm1vZHVsZS50cyIsImNsaWVudC9jb21tb24vYXBwLnJvdXRlLnRzIiwiY2xpZW50L2NvbnRyb2xsZXJzL21haW5QYWdlLmNvbnRyb2xsZXIudHMiLCJjbGllbnQvZGlyZWN0aXZlcy9sb2dpbi5kaXJlY3RpdmUudHMiLCJjbGllbnQvZGlyZWN0aXZlcy90ZW1wLmRpcmVjdGl2ZS50cyIsImNsaWVudC9kdG8vaW50ZXJuLmR0by50cyIsImNsaWVudC9kdG8vdXNlci5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxHQUFHLENBMkJUO0FBM0JELFdBQU8sR0FBRztJQUNOLFlBQVksQ0FBQztJQUNGLG1CQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFFOUMsU0FBZ0IsVUFBVSxDQUFDLElBQVk7UUFDbkMsT0FBTyxVQUFVLEtBQVU7WUFDdkIsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBQSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN6QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBTGUsY0FBVSxhQUt6QixDQUFBO0lBQ0QsU0FBZ0IsU0FBUyxDQUFDLFNBQWM7UUFDcEMsT0FBTyxVQUFVLEtBQVU7WUFDdkIsSUFBQSxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7b0JBQ3ZCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBQSxlQUFlLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztpQkFDbkU7Z0JBQ0QsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBRTlCLElBQUksU0FBUyxDQUFDLGdCQUFnQixFQUFFO29CQUM1QixTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtpQkFDdkI7Z0JBQ0QsT0FBTyxTQUFTLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUE7SUFFTCxDQUFDO0lBaEJlLGFBQVMsWUFnQnhCLENBQUE7QUFDTCxDQUFDLEVBM0JNLEdBQUcsS0FBSCxHQUFHLFFBMkJUO0FDM0JELElBQU8sR0FBRyxDQUlUO0FBSkQsV0FBTyxHQUFHO0lBQ04sWUFBWSxDQUFBO0lBRUQsaUJBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7QUFDbkUsQ0FBQyxFQUpNLEdBQUcsS0FBSCxHQUFHLFFBSVQ7QUNKRCxJQUFPLEdBQUcsQ0FnQ1Q7QUFoQ0QsV0FBTyxHQUFHO0lBQ04sWUFBWSxDQUFBO0lBS1osSUFBQSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxjQUFjLEVBQUUsa0JBQWtCO1lBQ3RHLElBQUksUUFBUSxHQUFHO2dCQUNYLElBQUksRUFBRSxVQUFVO2dCQUNoQixHQUFHLEVBQUUsV0FBVztnQkFDaEIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQTtZQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0Isa0JBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTdDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFSCxJQUFBLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLGNBQWMsRUFBRSxrQkFBa0I7WUFDdEcsSUFBSSxTQUFTLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxZQUFZO2dCQUNqQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxVQUFVLEVBQUUsb0JBQW9CO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFBO1lBQ0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVQLENBQUMsRUFoQ00sR0FBRyxLQUFILEdBQUcsUUFnQ1Q7Ozs7Ozs7QUNoQ0QsSUFBTyxHQUFHLENBdUJUO0FBdkJELFdBQU8sR0FBRztJQUNOLFlBQVksQ0FBQTtJQUdaO1FBSUk7WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBQSxTQUFTLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUM7WUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFDO1lBR2pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFBLE9BQU8sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFBO1FBQ25DLENBQUM7UUFoQlEsWUFBWTtZQUR4QixJQUFBLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztXQUNwQixZQUFZLENBa0J4QjtRQUFELG1CQUFDO0tBbEJELEFBa0JDLElBQUE7SUFsQlksZ0JBQVksZUFrQnhCLENBQUE7QUFDTCxDQUFDLEVBdkJNLEdBQUcsS0FBSCxHQUFHLFFBdUJUO0FDckJELElBQU8sR0FBRyxDQStCVDtBQS9CRCxXQUFPLEdBQUc7SUFDTixZQUFZLENBQUE7SUFlWjtRQUlJO1lBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUEsU0FBUyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQztRQUNwRCxDQUFDO1FBWE8sa0JBQWtCO1lBYjlCLElBQUEsU0FBUyxDQUFDO2dCQUNQLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGdCQUFnQixFQUFFO29CQUNkLE9BQU8sRUFBRSxHQUFHO29CQUNaLFNBQVMsRUFBRSxXQUFXO2lCQUN6QjtnQkFDRCxJQUFJLEVBQUUsVUFBQyxLQUFxQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLElBQXdCO2dCQUM5RixDQUFDO2dCQUNELFdBQVcsRUFBRSxhQUFhO2FBQzdCLENBQUM7WUFFRCxJQUFBLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztXQUNwQixrQkFBa0IsQ0FhOUI7UUFBRCx5QkFBQztLQWJELEFBYUMsSUFBQTtJQWJZLHNCQUFrQixxQkFhOUIsQ0FBQTtBQUVMLENBQUMsRUEvQk0sR0FBRyxLQUFILEdBQUcsUUErQlQ7QUMvQkQsSUFBTyxHQUFHLENBb0JUO0FBcEJELFdBQU8sR0FBRztJQUNSLFlBQVksQ0FBQTtJQWNWO1FBRUE7UUFBYyxDQUFDO1FBRkYscUJBQXFCO1lBWmpDLElBQUEsU0FBUyxDQUFDO2dCQUNQLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGdCQUFnQixFQUFFO29CQUNkLFNBQVMsRUFBRSxHQUFHO2lCQUNqQjtnQkFDRCxJQUFJLEVBQUUsVUFBQyxLQUFxQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLElBQTJCO2dCQUNqRyxDQUFDO2dCQUNELFdBQVcsRUFBRSxZQUFZO2FBQ2hDLENBQUM7WUFFRyxJQUFBLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztXQUN2QixxQkFBcUIsQ0FHckM7UUFBRCw0QkFBQztLQUhHLEFBR0gsSUFBQTtJQUhnQix5QkFBcUIsd0JBR3JDLENBQUE7QUFFRCxDQUFDLEVBcEJNLEdBQUcsS0FBSCxHQUFHLFFBb0JUO0FDdEJELElBQU8sR0FBRyxDQVFUO0FBUkQsV0FBTyxHQUFHO0lBQ047UUFBQTtRQU1BLENBQUM7UUFBRCxnQkFBQztJQUFELENBTkEsQUFNQyxJQUFBO0lBTlksYUFBUyxZQU1yQixDQUFBO0FBQ0wsQ0FBQyxFQVJNLEdBQUcsS0FBSCxHQUFHLFFBUVQ7QUNSRCxJQUFPLEdBQUcsQ0FPVDtBQVBELFdBQU8sR0FBRztJQUNOO1FBQUE7UUFLQSxDQUFDO1FBQUQsY0FBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksV0FBTyxVQUtuQixDQUFBO0FBQ0wsQ0FBQyxFQVBNLEdBQUcsS0FBSCxHQUFHLFFBT1QiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIGFwcCB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBleHBvcnQgbGV0IHRlbXBsYXRlVXJsQmFzZSA9ICcuL2NsaWVudC92aWV3cyc7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xsZXIobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjbGF6ejogYW55KSB7XHJcbiAgICAgICAgICAgIGNsYXp6LiRuYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgYW5ndWxhck1vZHVsZS5jb250cm9sbGVyKG5hbWUsIGNsYXp6KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBEaXJlY3RpdmUoZGlyZWN0aXZlOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNsYXp6OiBhbnkpIHtcclxuICAgICAgICAgICAgYW5ndWxhck1vZHVsZS5kaXJlY3RpdmUoZGlyZWN0aXZlLm5hbWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5jb250cm9sbGVyID0gY2xheno7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aXZlLnRlbXBsYXRlVXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLnRlbXBsYXRlVXJsID0gdGVtcGxhdGVVcmxCYXNlICsgZGlyZWN0aXZlLnRlbXBsYXRlVXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLmNvbnRyb2xsZXJBcyA9ICd2bSc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5iaW5kVG9Db250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLnNjb3BlID0ge31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwibW9kdWxlIGFwcCB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBleHBvcnQgbGV0IGFuZ3VsYXJNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInXSlcclxufSIsIm1vZHVsZSBhcHAge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcbiAgICBcclxuICAgIC8vIEBwYXJhbSAkcm91dGVQcm92aWRlclxyXG4gICAgXHJcblxyXG4gICAgYW5ndWxhck1vZHVsZS5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgIGxldCBtYWlucGFnZSA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ21haW5wYWdlJyxcclxuICAgICAgICAgICAgdXJsOiAnL21haW5wYWdlJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvY2xpZW50L3ZpZXdzL21haW5QYWdlLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpblBhZ2VDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKG1haW5wYWdlKTtcclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwibWFpbnBhZ2VcIik7XHJcblxyXG4gICAgfV0pXHJcblxyXG4gICAgYW5ndWxhck1vZHVsZS5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgIGxldCBsb2dpbnBhZ2UgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsb2dpbnBhZ2UnLFxyXG4gICAgICAgICAgICB1cmw6ICcvbG9naW5wYWdlJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvY2xpZW50L3ZpZXdzL2xvZ2luLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5EaXJlY3RpdmVDdHJsJyxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKGxvZ2lucGFnZSk7XHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcImxvZ2lucGFnZVwiKTtcclxuICAgIFxyXG4gICAgfV0pXHJcblxyXG59IiwibW9kdWxlIGFwcCB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBAQ29udHJvbGxlcignTWFpblBhZ2VDb250cm9sbGVyJylcclxuICAgIGV4cG9ydCBjbGFzcyBNYWluUGFnZUN0cmwge1xyXG5cclxuICAgICAgICBwcml2YXRlIGludGVybkR0bzogSW50ZXJuRHRvO1xyXG4gICAgICAgIHByaXZhdGUgdXNlckR0bzogVXNlckR0bztcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5EdG8gPSBuZXcgSW50ZXJuRHRvKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuRHRvLmludGVybklEID0gJzExNSc7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuRHRvLmludGVybk5hbWUgPSAnTmd1eWVuIFF1b2MgVmlldCBBMSc7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuRHRvLmludGVybkJpcnRoZGF5ID0gJzI3LzA2LzE5OTknO1xyXG4gICAgICAgICAgICB0aGlzLmludGVybkR0by5pbnRlcm5JbkNvbXBhbnlEYXkgPSAnMTUvMTEvMjAyMSc7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy51c2VyRHRvID0gbmV3IFVzZXJEdG8oKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyRHRvLnVzZXJOYW1lID0gJ2Rldic7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckR0by51c2VyUGFzc3dvcmQgPSAnMTIzJztcclxuICAgICAgICAgICAgdGhpcy51c2VyRHRvLnVzZXJSb2xlID0gJ2FkbWluJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm1vZHVsZSBhcHAge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgQERpcmVjdGl2ZSh7XHJcbiAgICAgICAgbmFtZTogJ2xvZ2luRGlyZWN0aXZlJyxcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcclxuICAgICAgICAgICAgdXNlckR0bzogXCI9XCIsXHJcbiAgICAgICAgICAgIHVzZXJsb2dpbjogXCJ1c2VybG9naW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogKHNjb3BlOiBhbmd1bGFyLklTY29wZSwgZWw6IEpRdWVyeSwgYXR0cnM6IGFuZ3VsYXIuSUF0dHJpYnV0ZXMsIGN0cmw6IExvZ2luRGlyZWN0aXZlQ3RybCkgPT4ge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvbG9naW4uaHRtbCdcclxuICAgIH0pXHJcblxyXG4gICAgQENvbnRyb2xsZXIoJ0xvZ2luRGlyZWN0aXZlQ3RybCcpXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5EaXJlY3RpdmVDdHJsIHtcclxuICAgICAgICBwcml2YXRlIHVzZXJEdG86IFVzZXJEdG87XHJcbiAgICAgICAgcHJpdmF0ZSB1c2VybG9naW46IEludGVybkR0bztcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51c2VybG9naW4gPSBuZXcgSW50ZXJuRHRvKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcmxvZ2luLmludGVybklEID0gJzY2NjYnO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJsb2dpbi5pbnRlcm5OYW1lID0gJ1Ry4bqnbiBsw6ogZ2lhIGjDom4nO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJsb2dpbi5pbnRlcm5CaXJ0aGRheSA9ICcyNy8wNi8xOTk5JztcclxuICAgICAgICAgICAgdGhpcy51c2VybG9naW4uaW50ZXJuSW5Db21wYW55RGF5ID0gJzE1LzExLzIwMjEnO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59IiwiXHJcblxyXG5tb2R1bGUgYXBwe1xyXG4gICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIEBEaXJlY3RpdmUoe1xyXG4gICAgICAgIG5hbWU6ICd0ZW1wRGlyZWN0aXZlVGVzdCcsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XHJcbiAgICAgICAgICAgIGludGVybkR0bzogXCI9XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IChzY29wZTogYW5ndWxhci5JU2NvcGUsIGVsOiBKUXVlcnksIGF0dHJzOiBhbmd1bGFyLklBdHRyaWJ1dGVzLCBjdHJsOiBUZW1wRGlyZWN0aXZlVGVzdEN0cmwpID0+e1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvdGVtcC5odG1sJ1xyXG59KVxyXG5cclxuICAgIEBDb250cm9sbGVyKCdUZW1wRGlyZWN0aXZlVGVzdEN0cmwnKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRlbXBEaXJlY3RpdmVUZXN0Q3RybHtcclxuICAgIHByaXZhdGUgaW50ZXJuRHRvOiBJbnRlcm5EdG87XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxufVxyXG5cclxufSIsIm1vZHVsZSBhcHB7XHJcbiAgICBleHBvcnQgY2xhc3MgSW50ZXJuRHRve1xyXG4gICAgICAgIGludGVybklEOiBzdHJpbmc7XHJcbiAgICAgICAgaW50ZXJuTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGludGVybkJpcnRoZGF5OiBzdHJpbmc7XHJcbiAgICAgICAgaW50ZXJuSW5Db21wYW55RGF5OiBzdHJpbmc7XHJcblxyXG4gICAgfVxyXG59IiwibW9kdWxlIGFwcHtcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyRHRve1xyXG4gICAgICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlclBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgdXNlclJvbGU6IHN0cmluZztcclxuXHJcbiAgICB9XHJcbn0iXX0=
