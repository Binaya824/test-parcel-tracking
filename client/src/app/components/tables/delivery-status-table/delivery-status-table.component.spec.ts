import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryStatusTableComponent } from './delivery-status-table.component';

describe('DeliveryStatusTableComponent', () => {
  let component: DeliveryStatusTableComponent;
  let fixture: ComponentFixture<DeliveryStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryStatusTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
