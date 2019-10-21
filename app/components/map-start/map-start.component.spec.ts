import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStartComponent } from './map-start.component';

describe('MapStartComponent', () => {
  let component: MapStartComponent;
  let fixture: ComponentFixture<MapStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
