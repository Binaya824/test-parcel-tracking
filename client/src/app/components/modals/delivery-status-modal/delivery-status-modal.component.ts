import { Component, importProvidersFrom } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DeliveryStatusTableComponent } from '../../tables/delivery-status-table/delivery-status-table.component';
import { LucideAngularModule } from 'lucide-angular'; // Import module
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-delivery-status-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, DeliveryStatusTableComponent, LucideAngularModule],
  templateUrl: './delivery-status-modal.component.html',
  styleUrls: ['./delivery-status-modal.component.css'] // Ensure this is 'styleUrls' instead of 'styleUrl'
})
export class DeliveryStatusModalComponent {
  constructor(public dialog: MatDialog) {}
}

