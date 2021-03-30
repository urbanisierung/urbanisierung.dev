import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideprojectComponent } from './sideproject.component';

describe('SideprojectComponent', () => {
  let component: SideprojectComponent;
  let fixture: ComponentFixture<SideprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
