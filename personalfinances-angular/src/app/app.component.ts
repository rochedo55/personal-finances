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

  expenseModalVisible = false;
  revenueModalVisible = false;

  setTransacOptionsVisible() {
    if (this.classTransacOptionsVisible === '' || this.classTransacOptionsVisible == 'hide') {
      this.classTransacOptionsVisible = 'show';
    } else {
      this.classTransacOptionsVisible = 'hide';
    }
  }

  addRevenue(value) {
    this.revenueSum += value;
  }

  addExpense(value) {
    this.expenseSum += value;
  }

  setExpenseModalVisible(isVisible) {
    this.expenseModalVisible = isVisible;
  }

  setRevenueModalVisible(isVisible) {
    this.revenueModalVisible = isVisible;
  }
}
