import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-do-produto',
  templateUrl: './detalhes-do-produto.component.html',
  styleUrls: ['./detalhes-do-produto.component.css']
})
export class DetalhesDoProdutoComponent implements OnInit {

  /** ATTRIBUTES **/
  produto: IProduto | undefined;
  quantidade = 1;

  /** CONSTRUCTOR **/
  constructor(
    private _produtosService: ProdutosService,
    private _router: ActivatedRoute,
    private _notificationService: NotificationService,
    private _cartService: CartService
  ) { }

  /** METHODS **/
  ngOnInit(): void {
    const routeParams = this._router.snapshot.paramMap;
    // route params comes as a string or null => convert to Number (0 = not exists)
    const produtoId = Number(routeParams.get("id"));
    this.produto = this._produtosService.getById(produtoId);
  }

  addToCart() {
    this._notificationService.notify("O produto foi adicionado no carrinho");
    // Setting product info
    const produto: IProductCart = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    // Add product to cart
    this._cartService.addToCart(produto);
  }

}
