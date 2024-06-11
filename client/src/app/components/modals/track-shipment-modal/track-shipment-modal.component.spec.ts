import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackShipmentModalComponent } from './track-shipment-modal.component';

describe('TrackShipmentModalComponent', () => {
  let component: TrackShipmentModalComponent;
  let fixture: ComponentFixture<TrackShipmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackShipmentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackShipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
