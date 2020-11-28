import {Component, Input, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'add-expense-modal',
    templateUrl: './AddExpenseModal.component.html',
    styleUrls: ['./AddTransactionModal.component.css']
})
export class AddExpenseModal {
    @Input() isVisible: boolean;
    @Output() setVisible = new EventEmitter();
    @Output() addExpenseCallback = new EventEmitter();

    expenseForm = new FormGroup({
        title: new FormControl(''),
        value: new FormControl('')
    });

    close() {
        this.setVisible.emit(false);
    }

    addExpense() {
        if (this.expenseForm.value.title.trim() === '' || this.expenseForm.value.value === '') {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (this.expenseForm.value.value < 0) {
            alert("Valor da despesa inválido");
            return;
        }

        this.addExpenseCallback.emit(this.expenseForm.value.value);
        this.close();
        this.expenseForm.reset();
    }
}
