import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DeliveryStatusModalComponent } from './components/modals/delivery-status-modal/delivery-status-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { TrackShipmentModalComponent } from './components/modals/track-shipment-modal/track-shipment-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , DeliveryStatusModalComponent, MatSlideToggleModule , MatProgressBarModule , CommonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  constructor(public dialog: MatDialog){}

  openDeliveryStatusModal(){
    const deliveryStatusModalRef = this.dialog.open(DeliveryStatusModalComponent , {
      width: '80%', // Set the width here
    })

    deliveryStatusModalRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openTrackShipment(){
    const trackShipmentModalRef = this.dialog.open(TrackShipmentModalComponent , {
      width: "80%"
    })

    trackShipmentModalRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
