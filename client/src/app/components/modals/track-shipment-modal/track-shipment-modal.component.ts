import { CommonModule } from '@angular/common';
import { Component , ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LucideAngularModule } from 'lucide-angular'; // Import module
import { TrackShipmentTableComponent } from '../../tables/track-shipment-table/track-shipment-table.component';

@Component({
  selector: 'app-track-shipment-modal',
  standalone: true,
  imports: [MatDialogModule , CommonModule , LucideAngularModule , TrackShipmentTableComponent],
  templateUrl: './track-shipment-modal.component.html',
  styleUrl: './track-shipment-modal.component.css'
})
export class TrackShipmentModalComponent {
  @ViewChild(TrackShipmentTableComponent) childComponent!: TrackShipmentTableComponent;
  constructor(public dialog: MatDialog) {
  }
    addNew(){
      this.childComponent.addNewShipment()
    }
}
