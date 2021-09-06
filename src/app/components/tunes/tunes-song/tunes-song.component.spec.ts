import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesSongComponent } from './tunes-song.component';

describe('TunesSongComponent', () => {
  let component: TunesSongComponent;
  let fixture: ComponentFixture<TunesSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunesSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunesSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
