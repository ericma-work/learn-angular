import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataChildComponent } from './share-data-child.component';

describe('ShareDataChildComponent', () => {
  let component: ShareDataChildComponent;
  let fixture: ComponentFixture<ShareDataChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDataChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareDataChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
