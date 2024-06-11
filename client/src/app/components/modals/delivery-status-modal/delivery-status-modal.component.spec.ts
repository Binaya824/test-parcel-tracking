import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryStatusModalComponent } from './delivery-status-modal.component';

describe('DeliveryStatusModalComponent', () => {
  let component: DeliveryStatusModalComponent;
  let fixture: ComponentFixture<DeliveryStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryStatusModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
