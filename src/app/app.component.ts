import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  message = 'This is value from component member';
  buttonEnabled = false;
  showParagraph = false;
  data = [
    {'Name' : 'Mohit',
    'Age': '24'},
    {'Name' : 'Vamshi',
    'Age': '23'},
    {'Name' : 'Guru',
    'Age': '25'}
  ];

  changeText() {
    console.log('Clicked');
    this.message = 'Modified message';
    this.buttonEnabled = true;
    this.showParagraph = true;
  }

}
