import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDeteilComponent } from './noticia-deteil.component';

describe('NoticiaDeteilComponent', () => {
  let component: NoticiaDeteilComponent;
  let fixture: ComponentFixture<NoticiaDeteilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaDeteilComponent]
    });
    fixture = TestBed.createComponent(NoticiaDeteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
