import { Component } from '@angular/core';
import { faPlus, faReceipt, faHandHoldingUsd, faPiggyBank, faLandmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personalfinances-angular';
  faPlus = faPlus;
  faReceipt = faReceipt;
  faHandHoldingUsd = faHandHoldingUsd;
  faPiggyBank = faPiggyBank; 
  faLandmark = faLandmark;

  revenueSum = 0;
  expenseSum = 0;

  classTransacOptionsVisible = '';

  setTransacOptionsVisible() {
    if (this.classTransacOptionsVisible === '' || this.classTransacOptionsVisible == 'hide') {
      this.classTransacOptionsVisible = 'show';
    } else {
      this.classTransacOptionsVisible = 'hide';
    }
  }

  addRevenue() {
    this.revenueSum++;
  }

  addExpense() {
    this.expenseSum++;
  }
}
