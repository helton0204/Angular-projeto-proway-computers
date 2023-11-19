import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  /** ATTRIBUTE **/
  produtos: IProduto[] = produtos;

  /** CONSTRUCTOR **/
  constructor() { }

  /** METHODS **/
  getAll() {
    return this.produtos;
  }

  getById(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId);
  }

}
