import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
    selector: 'button-add-transac',
    template: `<button class="add-{{ classType }} {{ classVisible }}" (click)="onClick.emit()">      
        <fa-icon [icon]="iconName"></fa-icon>
    </button>`,
    styles: [`.add-expense {
        position: absolute;
        /* padding: 15px 17px; */
        border-radius: 50%;
        color: #FFF;
        font-size: 13px;
        cursor: pointer;
        background-color: #f24331;
        width: 40px;
        height: 40px;
        right: 16px;
        bottom: 30px;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }
    .add-expense.show {
        animation: showAddExpense .5s ease-in-out;
        bottom: 135px;
        opacity: 1;
        pointer-events: all;
    }
    .add-expense.hide {
        animation: hideAddExpense .4s ease;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        bottom: 30px;
    }
    .add-revenue {
        position: absolute;
        /* padding: 14px 15px; */
        border-radius: 50%;
        color: #FFF;
        font-size: 13px;
        cursor: pointer;
        background-color: #4cae51;
        opacity: 0;
        right: 16px;
        bottom: 30px;
        pointer-events: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border: none;
    }
    .add-revenue.show {
        animation: showAddRevenue .5s;
        bottom: 90px;
        opacity: 1;
        pointer-events: all;
    }
    .add-revenue.hide {
        animation: hideAddRevenue .4s ease;
        opacity: 0;
        bottom: 30px;
        pointer-events: none;
        cursor: pointer;
    }
    @keyframes showAddExpense {
        from {
            bottom: 30px;
            opacity: 0;
        }
        to {
            bottom: 135px;
            opacity: 1;
        }
    }
    @keyframes hideAddExpense {
        from {
            bottom: 135px;
            opacity: 1;
        }
        to {
            bottom: 30px;
            opacity: 0;
        }
    }
    @keyframes showAddRevenue {
        from {
            bottom: 30px;
            opacity: 0;
        }
        to {
            bottom: 90px;
            opacity: 1;
        }
    }
    @keyframes hideAddRevenue {
        from {
            bottom: 90px;
            opacity: 1;
        }
        to {
            bottom: 30px;
            opacity: 0;
        }
    }`]
})
export class AddTransacButton {
    @Input() classType: string;
    @Input() iconName: FontAwesomeModule;
    @Input() classVisible: string;
    @Output() onClick = new EventEmitter();
}