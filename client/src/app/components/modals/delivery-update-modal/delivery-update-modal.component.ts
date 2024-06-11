import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

@Component({
  selector: 'app-delivery-update-modal',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule], // Ensure MatButtonModule is included here
  templateUrl: './delivery-update-modal.component.html',
  styleUrls: ['./delivery-update-modal.component.css'] // Ensure this is 'styleUrls' instead of 'styleUrl'
})
export class DeliveryUpdateModalComponent {

}
