import { Component, OnInit} from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { GridCotacoesService} from "./grid-cotacoes.service";

@Component({
  selector: 'app-grid-cotacoes',
  templateUrl: './grid-cotacoes.component.html',
  providers:[GridCotacoesService]
})
export class GridCotacoesComponent implements OnInit {
  

  columns: Array<PoTableColumn> = [];
  items: Array<any> = [];

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Precificada', value: 'precificada' },
    { label: 'Não Precificada', value: 'naoPrecificada' },
    { label: 'Encerrada', value: 'encerrada' },
    { label: 'Rejeitada', value: 'rejeitada'}
  ];
  readonly freightOptions: Array<PoSelectOption>= [
    { label: 'C-CIF', value: 'cif'},
    { label: 'F-FOB', value: 'fob'}
  ];
  readonly freightOrigin: Array<PoSelectOption>= [
    { label: 'RS-Rio Grande do Sul', value: 'rs'},
    { label: 'SP-São Paulo', value: 'sp'},
    { label: 'SC-Santa Catarina', value: 'sc'}
  ];

  constructor(private gridCotacoesService: GridCotacoesService) {
    
  }

  ngOnInit() {
    this.columns = this.gridCotacoesService.getColumns();
    this.items = this.gridCotacoesService.getItems();
    
  }

  isNaoPrecificada(row:any) {
    return row.status === 'naoPrecificada';
  }
  onClick(){
    alert("Teste")
  }

}
