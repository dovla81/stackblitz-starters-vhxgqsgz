import {Component} from '@angular/core';

@Component({
    selector:'app-hello',
    template:`<p>Hello World {{name}}`,
    styles:[]
})

export class HelloComponent {
    name:string = 'Vlad'
}
