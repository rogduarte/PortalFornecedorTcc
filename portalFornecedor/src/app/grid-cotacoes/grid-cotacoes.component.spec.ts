import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCotacoesComponent } from './grid-cotacoes.component';

describe('GridCotacoesComponent', () => {
  let component: GridCotacoesComponent;
  let fixture: ComponentFixture<GridCotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCotacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
