import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-mysign',
    templateUrl: './mysign.component.html'
})

export class MysignComponent {

    @Input()
    title: string;

    @Input()
    hasSignUp: boolean;

    @Output()
    eventUserClicked = new EventEmitter();

    handleButtonClick(user, password) {
        // console.log('User : ' + user);
        // console.log('Password : ' + password);
        this.eventUserClicked.emit({'user': user, 'password': password});
    }
 }
