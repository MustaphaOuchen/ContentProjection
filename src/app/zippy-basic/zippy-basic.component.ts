import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `
})
//Simple example where the content of a directive is projected into its <ng-content> part
export class ZippyBasicComponent {}
