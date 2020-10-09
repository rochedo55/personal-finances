import { Component } from '@angular/core';

@Component({
    selector: 'Header',
    template: `<div class="header"></div>`,
    styles: ['header {position: absolute; top: 0; width: 100vw; height: 60px; background-color: black; border-bottom: 3px solid #b5b5b5;}']
})
export class HeaderComponent {
}
