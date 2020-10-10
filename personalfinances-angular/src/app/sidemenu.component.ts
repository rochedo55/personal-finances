import {Component} from '@angular/core'
import { faHome, faReceipt, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sidemenu',
    template: ` <div class="sidemenu">
    <ul class="sidemenu-options">
        <li class="item active" >
            <a href="">
                <fa-icon [icon]="faHome"></fa-icon>
                Home
            </a>
        </li>
        <li class="item" >
            <a href="">
                <fa-icon [icon]="faReceipt"></fa-icon>
                Despesas
            </a>
        </li>
        <li class="item" >
            <a href="">
                <fa-icon [icon]="faHandHoldingUsd"></fa-icon>
                Receitas
            </a>
        </li>
    </ul>
</div>`,
    styles: [`.sidemenu{
        position:absolute;
        top:63px;
        left:0;
        height: calc(100vh - 63px);
        background-color: #f5f5f5;
    }
    .sidemenu .sidemenu-options {
        list-style: none;
        padding-inline-start: 0;
    }
    .sidemenu .sidemenu-options .item {
        margin: 10px 0;
    }
    .sidemenu .sidemenu-options .item a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        padding: 10px 7px;
        color: #ccc;
    }
    .sidemenu .sidemenu-options .item.active a {
        color: #334ca5;
    }
    .sidemenu .sidemenu-options .item a i {
        font-size: 18px;
    }`]
  })
  export class SideMenuComponent {
    faReceipt = faReceipt;
    faHome = faHome;
    faHandHoldingUsd = faHandHoldingUsd;
  }
  