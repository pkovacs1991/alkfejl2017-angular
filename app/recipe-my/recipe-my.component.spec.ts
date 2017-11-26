import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMyComponent } from './recipe-my.component';

describe('RecipeMyComponent', () => {
  let component: RecipeMyComponent;
  let fixture: ComponentFixture<RecipeMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
