import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilpagePage } from './profilpage.page';

describe('ProfilpagePage', () => {
  let component: ProfilpagePage;
  let fixture: ComponentFixture<ProfilpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
