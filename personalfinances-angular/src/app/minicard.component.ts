import { Component, Input } from '@angular/core'

@Component({
    selector: 'minicard',
    template: ` <div class="mini-card {{ type }}">
    <div class="mini-card-icon-container">
        {{ icon }}
    </div>
    <div class="mini-card-body">
        <label class="mini-card-title">{{ title }}</label>
        <span>R$ {{ value }}</span>
    </div>                    
</div>`,
    styles: [`.mini-card{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex: 1;
        margin:10px;
        border-radius: 15px;
        background-color: #ffffff;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }
    .mini-card .mini-card-icon-container {
        border-radius: 50%;
        margin-left: -20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
    }
    .mini-card.balance .mini-card-icon-container {
        background-color: #0176bc;
    }
    .mini-card.expense .mini-card-icon-container {
        background-color: #f24331;
    }
    .mini-card.revenue .mini-card-icon-container {
        background-color:#4cae51 ;
    }
    .mini-card.profit .mini-card-icon-container {
        background-color: #039587;
    }
    .mini-card .mini-card-icon-container i {
        color: #FFF;
        font-size: 16px;
    }
    .mini-card .mini-card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 7px 12px;
    }
    .mini-card .mini-card-body span {
        text-align: right;
        font-weight: bold;
        font-size: 16px;
    }
    .mini-card.balance .mini-card-body span {
        color: #0176bc;
    }
    .mini-card.expense .mini-card-body span {
        color: #f24331;
    }
    .mini-card.revenue .mini-card-body span {
        color:#4cae51;
    }
    .mini-card.profit .mini-card-body span {
        color: #039587;
    }
    .mini-card .mini-card-title {
        float: right;
        color: #ccc;
        font-size: 14px;
    }
    `]
  })
  export class MiniCardComponent {
      @Input() title: string;
      @Input() value: Number;
      @Input() type: string;
      @Input() icon: string;
  }
  