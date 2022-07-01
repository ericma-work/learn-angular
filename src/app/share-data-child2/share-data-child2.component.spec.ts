import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataChild2Component } from './share-data-child2.component';

describe('ShareDataChild2Component', () => {
  let component: ShareDataChild2Component;
  let fixture: ComponentFixture<ShareDataChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDataChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareDataChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
