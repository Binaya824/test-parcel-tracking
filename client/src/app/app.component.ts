import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DeliveryStatusModalComponent } from './components/modals/delivery-status-modal/delivery-status-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

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

  openDialog(){
    const dialogRef = this.dialog.open(DeliveryStatusModalComponent , {
      width: '80%', // Set the width here
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
