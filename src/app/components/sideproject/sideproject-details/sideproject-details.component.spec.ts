import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideprojectDetailsComponent } from './sideproject-details.component';

describe('SideprojectDetailsComponent', () => {
  let component: SideprojectDetailsComponent;
  let fixture: ComponentFixture<SideprojectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideprojectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideprojectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
