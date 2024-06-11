import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryUpdateModalComponent } from './delivery-update-modal.component';

describe('DeliveryUpdateModalComponent', () => {
  let component: DeliveryUpdateModalComponent;
  let fixture: ComponentFixture<DeliveryUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryUpdateModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
