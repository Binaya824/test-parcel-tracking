import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackShipmentTableComponent } from './track-shipment-table.component';

describe('TrackShipmentTableComponent', () => {
  let component: TrackShipmentTableComponent;
  let fixture: ComponentFixture<TrackShipmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackShipmentTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackShipmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
