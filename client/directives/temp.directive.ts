

module app{
  'use strict'

    @Directive({
        name: 'tempDirectiveTest',
        restrict: 'E',
        bindToController: {
            internDto: "="
        },
        link: (scope: angular.IScope, el: JQuery, attrs: angular.IAttributes, ctrl: TempDirectiveTestCtrl) =>{
        },
        templateUrl: '/temp.html'
})

    @Controller('TempDirectiveTestCtrl')
    export class TempDirectiveTestCtrl{
    private internDto: InternDto;
    constructor(){}
}

}