import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center"> 
                <h2>Marvellous Infosystem</h2>
                <input class="textField" type="text" >
             </div>`,
  styles: [`.textField{ 
                background-color: blue;
                color:#FFF; 
                padding:15px;}`]
})
export class AppComponent {
  title = 'app';
}
