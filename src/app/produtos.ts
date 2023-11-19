export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  tipoPagamento: string;
  quantidadeEstoque: number;
  imagem: string;
}

export interface ICarrinhoCompras extends IProduto {
  quantidade: number;
}

export const produtos: IProduto[] = [
  { id: 1, descricao: "Mouse gamer", preco: 439.00, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-3.jpg" },
  { id: 2, descricao: "Very good monitor", preco: 1200.50, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/monitor-1.jpg" },
  { id: 3, descricao: "Excellent keyboard", preco: 749.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/keyboard-1.jpg" },
  { id: 4, descricao: "Headset for gamers", preco: 599.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/headset-2.jpg" },
  { id: 5, descricao: "Headset", preco: 299.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/headset-1.jpg" },
  { id: 6, descricao: "Good headset", preco: 399.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/headset-3.jpg" },
  { id: 7, descricao: "HD 1TB", preco: 499.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/hd.jpg" },
  { id: 8, descricao: "Combo of video cards", preco: 18449.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/video-card.jpg" },
  { id: 9, descricao: "Ryzen processor", preco: 1000, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/processor.jpg" },
  { id: 10, descricao: "Good notebook", preco: 2500, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/laptop-1.jpg" },
  { id: 11, descricao: "Excellent notebook", preco: 4500, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/laptop-2.jpg" },
  { id: 12, descricao: "Cheap mouse", preco: 20, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-1.png" },
  { id: 13, descricao: "Great mouse", preco: 200, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-2.jpg" },
  { id: 14, descricao: "Small mouse", preco: 50, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/mouse-4.jpg" },
  { id: 15, descricao: "Good keyboard", preco: 159.99, tipoPagamento: "Cash payment on PIX", quantidadeEstoque: 10, imagem: "./assets/keyboard-2.jpg" },
]
