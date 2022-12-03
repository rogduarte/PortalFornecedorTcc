import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable()

export class GridCotacoesService {

  getColumns(): Array<PoTableColumn> {
    return [

      {
        property: 'status',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'precificada', color: 'color-10', label: 'Precificada' },
          { value: 'naoPrecificada', color: 'color-08', label: 'Não Precificada' },
          { value: 'encerrada', color: 'color-01', label: 'Encerrada' },
          { value: 'rejeitada', color: 'color-07', label: 'Rejeitada' }
        ]
      },
      { property: 'filial', label: 'Filial', width: '8%' },
      { property: 'cotacao', label: 'Cotação' },
      { property: 'fornecedor', label: 'Código Fornecedor' },
      { property: 'nomeFor', label: "Nome", width: '25%' },
      { property: 'loja', label: 'Loja', type: 'number', width: '8%' },
      { property: 'emissao', label: 'Emissão', type: 'date' },
      { property: 'validade', label: 'Validade', type: 'date' },
    ]
  }

  getItems(): Array<any> {
    return [

      {

        filial: "0101",
        cotacao: "1200",
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000001',
        descricao: 'Produto Teste 01',
        quantity: 0,
        icms: 1500,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'naoPrecificada',
        license_plate: 'MDJD9191',
        batch_produto: 18041822,
        driver: 'José Oliveira',

      },
      {
        filial: "0101",
        cotacao: "1200",
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000001',
        descricao: 'Produto Teste 01',
        quantity: 3,
        icms: 1500,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'naoPrecificada',
        license_plate: 'MDJD9191',
        batch_produto: 18041822,
        driver: 'José Oliveira'
      },
      {
        filial: "0101",
        cotacao: "1200",
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000001',
        descricao: 'Produto Teste 01',
        quantity: 3,
        icms: 1500,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'rejeitada',
        license_plate: 'MDJD9191',
        batch_produto: 18041822,
        driver: 'José Oliveira'
      },
      {
        filial: "0101",
        cotacao: "1200",
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000001',
        descricao: 'Produto Teste 01',
        quantity: 3,
        icms: 1500,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'rejeitada',
        license_plate: 'MDJD9191',
        batch_produto: 18041822,
        driver: 'José Oliveira'
      },
      {
        filial: "0101",
        cotacao: "1200",
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000001',
        descricao: 'Produto Teste 01',
        quantity: 3,
        icms: 1500,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'rejeitada',
        license_plate: 'MDJD9191',
        batch_produto: 18041822,
        driver: 'José Oliveira'
      },
      {
        filial: "0101",
        cotacao: "1200",
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000001',
        descricao: 'Produto Teste 01',
        quantity: 3,
        icms: 1500,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'rejeitada',
        license_plate: 'MDJD9191',
        batch_produto: 18041822,
        driver: 'José Oliveira'
      },
      {
        filial: "0101",
        cotacao: 1355,
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000002',
        descricao: 'Produto Teste 02',
        quantity: 1,
        icms: 50,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'precificada',
        license_plate: 'XXA5454',
        batch_produto: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        filial: "0101",
        cotacao: 1496,
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000003',
        descricao: 'Produto Teste 03',
        quantity: 5,
        icms: 2045,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'naoPrecificada',
        license_plate: 'QEW5779',
        batch_produto: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        filial: "0101",
        cotacao: 1712,
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000004',
        descricao: 'Produto Teste 04',
        quantity: 10,
        icms: 15005,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'encerrada',
        license_plate: 'WWW1247',
        batch_produto: 18041819,
        driver: 'João da Silva'
      },
      {
        filial: "0101",
        cotacao: 1881,
        fornecedor:"000002",
        nomeFor:"ROGERIO DOS REIS DUARTE",
        loja:"01",
        produto: '000005',
        descricao: 'Produto Teste 05',
        quantity: 1,
        icms: 1110,
        emissao: this.generateRandomDate(),
        validade: this.generateRandomDate(),
        status: 'encerrada',
        license_plate: 'XXI2312',
        batch_produto: 18041825,
        driver: 'Antonio Lima'
      }
    ];
  }

  private generateRandomDate() {
    const year = Math.floor(Math.random() * 20);
    const month = Math.floor(Math.random() * 59);
    const day = Math.floor(Math.random() * 59);

    return new Date(year, month, day);
  }
}


