import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatPanelComponent } from './create-chat-panel.component';

describe('CreateChatPanelComponent', () => {
  let component: CreateChatPanelComponent;
  let fixture: ComponentFixture<CreateChatPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChatPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
