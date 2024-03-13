import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaDataComponent } from './crea-data.component';

describe('CreaDataComponent', () => {
  let component: CreaDataComponent;
  let fixture: ComponentFixture<CreaDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaDataComponent]
    });
    fixture = TestBed.createComponent(CreaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
