import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesInsertFormComponent } from './tunes-insert-form.component';

describe('TunesInsertFormComponent', () => {
  let component: TunesInsertFormComponent;
  let fixture: ComponentFixture<TunesInsertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunesInsertFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunesInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
