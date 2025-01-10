import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloComponent } from './app/components/hello.component';

@Component({
  selector: 'app-root',
  imports:[HelloComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-hello></app-hello>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
