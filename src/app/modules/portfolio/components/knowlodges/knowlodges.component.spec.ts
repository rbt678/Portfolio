import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlodgesComponent } from './knowlodges.component';

describe('KnowlodgesComponent', () => {
  let component: KnowlodgesComponent;
  let fixture: ComponentFixture<KnowlodgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowlodgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowlodgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
