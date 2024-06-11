import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { DeliveryUpdateModalComponent } from '../../modals/delivery-update-modal/delivery-update-modal.component';

export interface tableElement {
  item_details: {
    name: string;
    description:  string;
  };
  quantity_price: {
    qty: number;
    unit_rate: number;
  };
  delivery_date: {
    date: Date;
    ageing: string;
  };
  delivery_update: string[];
}

const ELEMENT_DATA: tableElement[] = [
  {
    item_details: {
      name: "Cement bags",
      description: "Portland Cement, 50kg each"
    },
    quantity_price: {
      qty: 100,
      unit_rate: 40
    },
    delivery_date:{
      date: new Date("2023-12-15"),
      ageing: "15 days"
    },
    delivery_update: ["Updated by: John Doe 10th Dec 2023, 10:30 AM" , "Updated by: John Doe 10th Dec 2023, 10:30 AM" , "Updated by: John Doe 10th Dec 2023, 10:30 AM"]
  },
  {
    item_details: {
      name: "Cement bags",
      description: "Portland Cement, 50kg each"
    },
    quantity_price: {
      qty: 100,
      unit_rate: 40
    },
    delivery_date:{
      date: new Date("2023-12-15"),
      ageing: "15 days"
    },
    delivery_update: ["Updated by: John Doe 10th Dec 2023, 10:30 AM" , "Updated by: John Doe 10th Dec 2023, 10:30 AM" , "Updated by: John Doe 10th Dec 2023, 10:30 AM"]
  },
  {
    item_details: {
      name: "Cement bags",
      description: "Portland Cement, 50kg each"
    },
    quantity_price: {
      qty: 100,
      unit_rate: 40
    },
    delivery_date:{
      date: new Date("2023-12-15"),
      ageing: "15 days"
    },
    delivery_update: ["Updated by: John Doe 10th Dec 2023, 10:30 AM" , "Updated by: John Doe 10th Dec 2023, 10:30 AM" , "Updated by: John Doe 10th Dec 2023, 10:30 AM"]
  }
];

@Component({
  selector: 'app-delivery-status-table',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule , DeliveryUpdateModalComponent],
  templateUrl: './delivery-status-table.component.html',
  styleUrl: './delivery-status-table.component.css'
})
export class DeliveryStatusTableComponent {

  constructor(private dialog: MatDialog){}

  displayedColumns: string[] = ['sl_no','item_details', 'quantity_price', 'delivery_date' , 'delivery_update'];
  dataSource = ELEMENT_DATA;

  selected?: Date;
  showPicker: boolean = false;

  onDateSelect(selectedDate: Date) {
    this.selected = selectedDate;
    this.showPicker = false; // Hide the date picker after selecting a date
  }
  openDialog() {
    const dialogRef = this.dialog.open(DeliveryUpdateModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
