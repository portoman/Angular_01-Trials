import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  public name: string = 'Alfonso';
  public visible: boolean = true;
  public clickNumbers: number[] = [];
  public counter: number = 0;

  resetName() {
    this.name = '';
  }
  clickCounter() {
    this.counter++;
    this.clickNumbers.push(this.counter);
  }
}
