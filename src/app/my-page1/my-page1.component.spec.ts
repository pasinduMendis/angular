import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPage1Component } from './my-page1.component';

describe('MyPage1Component', () => {
  let component: MyPage1Component;
  let fixture: ComponentFixture<MyPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPage1Component]
    });
    fixture = TestBed.createComponent(MyPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
