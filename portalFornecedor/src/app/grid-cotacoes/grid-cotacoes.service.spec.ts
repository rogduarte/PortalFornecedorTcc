import { TestBed } from '@angular/core/testing';

import { GridCotacoesService } from './grid-cotacoes.service';

describe('GridCotacoesService', () => {
  let service: GridCotacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridCotacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
