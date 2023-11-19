import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  /** ATRIBUTO **/
  produtos: IProduto[] | undefined;

  /** CONSTRUCTOR **/
  constructor(
    private _produtosService: ProdutosService,
    private _router: ActivatedRoute
  ) { }

  /** METHOD **/
  ngOnInit(): void {
    const produtos = this._produtosService.getAll();
    this._router.queryParamMap.subscribe(params => {
      const descricao = params.get("description")?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter((produto: { descricao: string; }) => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    });
  }

}
