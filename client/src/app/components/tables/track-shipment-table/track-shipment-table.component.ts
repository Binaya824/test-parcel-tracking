import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TableElement{
  id: number,
  transporter_name: string;
  consignment_number: string;
  transporter_website: string;
  disabled: boolean;
}

const tableData:TableElement[] = [
  {
    id: 1,
    transporter_name: "Blue Dart Express",
    consignment_number: "03/TN/0098765",
    transporter_website: "www.bluedart.com/tracking",
    disabled: true
  },
  {
    id: 2,
    transporter_name: "Blue Dart Express",
    consignment_number: "03/TN/0098765",
    transporter_website: "www.bluedart.com/tracking",
    disabled: true
  },
  {
    id: 3,
    transporter_name: "Blue Dart Express",
    consignment_number: "03/TN/0098765",
    transporter_website: "www.bluedart.com/tracking",
    disabled: true
  }
]


@Component({
  selector: 'app-track-shipment-table',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './track-shipment-table.component.html',
  styleUrl: './track-shipment-table.component.css'
})
export class TrackShipmentTableComponent {
  displayedColumns: string[] = ['sl_no','transporter name', 'consignment number', 'transporter website' , 'action'];
  dataSource = tableData;

  onSubmit(id: number) {
    this.dataSource = this.dataSource.filter((el) => {
      if (el.id === id) {
        const hasRequiredData = el.transporter_name && el.consignment_number && el.transporter_website;
        console.log("has required" , hasRequiredData)
        if (el.transporter_name && el.consignment_number && el.transporter_website) {
          console.log("data satisfied")
          el.disabled = true;
          return true; // Keep the element in the array
        } else {
          console.log("data not satisfied")
          return false; // Remove the element from the array
        }
      }
      return true; // Keep the element in the array
    });
  }

  addNewShipment(){
    console.log("child method called")
    const shipmentObj = {
      id: this.dataSource.length + 1,
      transporter_name: "",
      consignment_number: "",
      transporter_website: "",
      disabled: false
    }
    this.dataSource.push(shipmentObj);
  }
}
