import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionChidComponent } from './content-projection-chid.component';

describe('ContentProjectionChidComponent', () => {
  let component: ContentProjectionChidComponent;
  let fixture: ComponentFixture<ContentProjectionChidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionChidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionChidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
