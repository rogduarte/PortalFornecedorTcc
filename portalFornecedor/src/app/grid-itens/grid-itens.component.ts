import { Component} from '@angular/core';


@Component({
  selector: 'app-grid-itens',
  templateUrl: './grid-itens.component.html',
  styleUrls: ['./grid-itens.component.css']
})
export class GridItensComponent {

  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this)
   
  };
  
 columns = [
      { property: 'item', label: 'Item' ,width: '25%', align: 'right', readonly: true },
      { property: 'produto', label: 'Produto' ,width: '25%' , align: 'right', readonly: true},
      { property: 'descricao', label: "Descrição" , align: 'left', readonly: true},
      { property: 'unidade', label: 'UM' , align: 'right', readonly: true},
      { property: 'quantity', label: 'Quantidade', type: 'number', align: 'right', readonly: true },
      { property: 'price', label: 'Preço Unitário' },
      { property: 'total', label: 'Valor Total' , align: 'right', readonly: true},
    ];
  
  data = [
      {
        item: '001',
        produto: '000001',
        descricao: 'Produto Teste 01',
        unidade: 'Un',
        quantity: 10,
        price: 13.5,
        total: 135.5,
      },
      {
        item: '002',
        produto: '000003',
        descricao: 'Produto Teste 02',
        unidade: 'Un',
        quantity: 10,
        price: 13.5,
        total: 135.5,
      },
      {
        item: '003',
        produto: '000003',
        descricao: 'Produto Teste 03',
        unidade: 'Un',
        quantity: 10,
        price: 13.5,
        total: 135.5,
      }
    ];
    onBeforeSave(row: any, old: any) {
      return row.occupation !== 'Engineer';
    }
  
    onAfterSave(row: any) {
       console.log('onAfterSave(new): ', row);
    }
  
    onBeforeRemove(row: any) {
       console.log('onBeforeRemove: ', row);
  
      return true;
    }
  
    onAfterRemove(row:any) {
       console.log('onAfterRemove: ', row);
    }
  
    onBeforeInsert(row:any) {
       console.log('onBeforeInsert: ', row);
  
      return true;
    }

    onClick(){
      alert("Botão")
    }

}
