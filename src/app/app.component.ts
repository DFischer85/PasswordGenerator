import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.useLetters)
      validChars += letters;
    
    if(this.useNumbers)
      validChars += numbers;

    if(this.useSymbols)
      validChars += symbols;

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    
    this.password = generatedPassword;

  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

}
