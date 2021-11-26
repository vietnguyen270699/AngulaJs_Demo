module app {
    'use strict'

    @Controller('MainPageController')
    export class MainPageCtrl {

        private internDto: InternDto;
        private userDto: UserDto;
        constructor() {
            this.internDto = new InternDto();
            this.internDto.internID = '115';
            this.internDto.internName = 'Nguyen Quoc Viet A1';
            this.internDto.internBirthday = '27/06/1999';
            this.internDto.internInCompanyDay = '15/11/2021';


            this.userDto = new UserDto();
            this.userDto.userName = 'dev';
            this.userDto.userPassword = '123';
            this.userDto.userRole = 'admin'
        }

    }
}