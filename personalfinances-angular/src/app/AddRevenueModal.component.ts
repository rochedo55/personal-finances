import {Component, Input, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'add-revenue-modal',
    templateUrl: './AddRevenueModal.component.html',
    styleUrls: ['./AddTransactionModal.component.css']
})
export class AddRevenueModal {
    @Input() isVisible: boolean;
    @Output() setVisible = new EventEmitter();
    @Output() addRevenueCallback = new EventEmitter();

    revenueForm = new FormGroup({
        title: new FormControl(''),
        value: new FormControl('')
    });

    close() {
        this.setVisible.emit(false);
    }

    addRevenue() {
        if (this.revenueForm.value.title.trim() === '' || this.revenueForm.value.value === '') {
            alert("Todos os campos são obrigatórios");
            return;
        }

        if (this.revenueForm.value.value < 0) {
            alert("Valor da receita inválido");
            return;
        }

        this.addRevenueCallback.emit(this.revenueForm.value.value);
        this.close();
        this.revenueForm.reset();
    }
}
