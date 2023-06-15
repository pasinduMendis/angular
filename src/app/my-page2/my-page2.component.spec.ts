import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPage2Component } from './my-page2.component';

describe('MyPage2Component', () => {
  let component: MyPage2Component;
  let fixture: ComponentFixture<MyPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPage2Component]
    });
    fixture = TestBed.createComponent(MyPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
