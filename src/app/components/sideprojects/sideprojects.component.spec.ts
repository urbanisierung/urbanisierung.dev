import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideprojectsComponent } from './sideprojects.component';

describe('SideprojectsComponent', () => {
  let component: SideprojectsComponent;
  let fixture: ComponentFixture<SideprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
