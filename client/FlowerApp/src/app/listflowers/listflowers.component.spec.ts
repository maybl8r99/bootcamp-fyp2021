import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListflowersComponent } from './listflowers.component';

describe('ListflowersComponent', () => {
  let component: ListflowersComponent;
  let fixture: ComponentFixture<ListflowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListflowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListflowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
