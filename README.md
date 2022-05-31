# Pixel-Art-Trybe

## Boas-vindas ao repositório do projeto Arte com Pixels!

Neste projeto, foi implementado um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco

Foi um projeto realizado enquanto estudante de web full-stack na Trybe. Os conhecimentos adquiridos foram HTML, CSS, JavaScript e Lógica de programação.


# Requisitos Obrigatórios

## 1 - Adicione à página o título "Paleta de Cores".

<details>
  <summary>Sua página deve conter o título "Paleta de Cores"</summary><br />

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

**O que será verificado**

- Verifica se contém um elemento `h1`;
- Verifica se está com id `title`;
- Verifica se existe o título `Paleta de Cores`.

</details>

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

<details>
  <summary>Sua página deve conter uma paleta com quatro cores</summary>

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

**O que será verificado**

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`;

- Cada cor individual da paleta de cores possui a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta é a cor que o elemento representa :warning: **A única cor não permitida na paleta é a cor branca** :warning:;

- Verifica se cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;

- A paleta lista todas as cores disponíveis para utilização, lado a lado;

- A paleta de cores está posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não contém cores repetidas.

</details>

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta </summary><br />

**O que será verificado**

- Verifica se a primeira cor da paleta tem `background-color ` preto;

- As demais cores podem ser escolhidas livremente.

</details>

## 4 - Adicione à página um quadro contendo 25 pixels.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- Ao abrir a página, a cor inicial dos "pixels" que compõem o quadro de pixels deve ser branca;

- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será verificado**

- O quadro de "pixels" possui o `id` denominado `pixel-board`;

- Cada pixel individual dentro do quadro possui a `classe` denominada `pixel`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, é branca;

- O quadro de "pixels" aparece abaixo da paleta de cores.

</details>

## 5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta solida de 1px de espessura</summary><br />

**O que será verificado**

- O quadro de "pixels" tem altura e comprimento de 5 elementos;

- Verifica se 40 pixels de altura e 40 pixels de largura é o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

</details>

## 6 - Defina a cor preta como cor inicial da paleta de cores

<details>
  <summary>Ao carregar a página, a cor preta já deve estar selecionada na paleta para pintar os pixels do quadro.</summary>

- O elemento da cor preta deve possuir inicialmente a classe `selected`;

- O elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado**

- O elemento da cor preta possui, inicialmente, a classe `selected`;

- Nenhuma outra cor da paleta tem a classe `selected` ao carregar a página.

</details>

## 7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.

<details>
  <summary>Ao clicar em outras cores da paleta de cores, a cor deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

- A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado**

- Verifica se somente uma cor da paleta de cores tem a classe `selected` de cada vez;

- Verifica se os pixels dentro do quadro não têm a classe `selected` quando são clicados.

</details>

## 8 - Preencha um pixel do quadro com a cor selecionada na paleta de cores.

<details>
  <summary>Ao clicar em algum <code>pixel</code>  do quadro a sua cor deve ser alterada para a cor selecionada na paleta de cores</summary><br />

**O que será verificado**

- Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

- Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

- Somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

</details>

## 9 - Crie um botão que retorne a cor do quadro para a cor inicial.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

**O que será verificado**

- O botão tem o `id` denominado `clear-board`;

- O botão está posicionado entre a paleta de cores e o quadro de pixels;

- O texto do botão é `Limpar`;

- Ao clicar no botão, o quadro de pixels é totalmente preenchido de branco.

</details>

# Requisitos Bônus

## 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

<details>
  <summary>Sua página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels</summary>

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, em que **N** é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O botão deve conter o texto "VQV";

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve estar posicionado ao lado do input;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

**O que será verificado**

- Existe um input com o id `board-size`;

- Existe um botão com o id `generate-board`;

- O input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`;

- O botão contém o texto `VQV`;

- O input está posicionado entre a paleta de cores e o quadro de pixels;

- O botão está posicionado ao lado direito do input;

- Caso nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: `Board inválido!`;

- Ao clicar no botão com um valor preenchido, o tamanho do board muda;

- O novo quadro tem todos os pixels preenchidos com a cor branca.

</details>

## 11 - Limite o tamanho mínimo e máximo do quadro de pixels.

<details>
  <summary>A pessoa usuária não pode definir um quadro com menos que 5 e mais que 50 <code>pixels</code></summary>

- Caso o valor digitado no input `board-size` esteja fora do intervalo de 5 a 50, faça:

1. Se o valor de `board-size` for menor que 5, considere 5 `pixels` como padrão;

2. Se o valor de `board-size` for maior que 50, considere 50 `pixels` como padrão.

**O que será verificado**

- A altura máxima do board é 50;

- A altura do board é 5 pixels quando um valor menor que 5 é colocado no input;

- A altura do board é 50 pixels quando um valor maior que 50 é colocado no input.

</details>

## 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

<details>
  <summary>A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.</summary><br />

**O que será verificado**

- As cores geradas na paleta são diferentes a cada carregamento da página;

- A cor preta ainda está presente e é a primeira na sua paleta de cores.

</details>
