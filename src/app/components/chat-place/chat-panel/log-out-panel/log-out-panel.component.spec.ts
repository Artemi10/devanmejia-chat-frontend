import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutPanelComponent } from './log-out-panel.component';

describe('LogOutPanelComponent', () => {
  let component: LogOutPanelComponent;
  let fixture: ComponentFixture<LogOutPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
