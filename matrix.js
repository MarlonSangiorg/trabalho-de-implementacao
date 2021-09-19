
/*
Implementar uma classe em Javascript nomeada Matrix que implemente os seguintes items:


  ■ Construtor da classe Matrix que receba como parâmetros a quantidade de linhas, colunas e um

  array com os elementos da matriz. A assinatura do construtor deve seguir a seguinte estrutura:

    constructor(rows, cols, elements){}

      rows -> A quantidade de linhas da matriz.
      cols -> A quantidade de colunas da matriz.
      elements -> Um array com os elementos da matriz.
*/
class Matrix {
  rows = 0;
  cols = 0; 
  elements = []

  // [] - arrays são usados ​​para armazenar vários valores em uma única variável.
  matrix = [];
  
  constructor(rows = 0, cols = 0, elements = []){
    /* 
      this - Em muitos casos, o valor this é determinado pela forma como a função é chamada. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada.
    */
    this.rows = rows;
    this.cols = cols;
    this.elements = elements;  

    // Criar linhas
    // for - percorre um bloco de código várias vezes
    for(var i = 0; i < rows; i++ ){
      //console.log("criar linha: " + i);

      /* 
        push - A maneira mais fácil de adicionar um novo elemento a uma matriz é usando o método push():
      */
      this.matrix.push([]);

      // Adiciona cols à linha vazia:
      this.matrix[i].push( new Array(cols) );

      // Criar Colunas
      for(var j = 0; j < cols; j++){

        //console.log("criar colunas: " + j);

        // elements.length - Retorna o número de elementos
        // Operador ternário - teste ? true : false
        this.matrix[i][j] = elements.length ? elements[0] : 0;

        // O método splice() pode ser usado para remover elementos de um array
        elements.splice(0, 1);
      }
    }
  }

  /*
    ■ Um método chamado get que tem como função retornar o valor armazenado em uma determinada posição da matriz. O método recebe como parâmetros a linha e a coluna da posição do elemento da matriz e retorna o valor armazenado nesta posição. 
    
    A assinatura da função get deve seguir a seguinte estrutura:

      get(i, j){}
      
      i -> O índice da linha da matriz.
      j -> O índice da coluna da matriz.
      
      Retorno -> O valor do elemento que está na linha i e coluna j da matriz.
  */
  get(i = 0, j = 0){
    try {
      return this.matrix[i][j];
    }catch(e){
      console.error("Index nao corresponde a posicao da matriz.");
      return null;
    }
  }

  /*
    Um método chamado set que tem como função atribuir um valor em uma determinada posição da matriz. O método recebe como parâmetros a linha, a coluna e o valor a ser armazenado o elemento na matriz. A assinatura da função set deve seguir a seguinte estrutura:
    
    set(i, j, value){}

    i -> O índice da linha da matriz.
    j -> O índice da coluna da matriz.
    value -> O valor a ser armazenado na matriz.
    
    Retorno -> Nenhum.
  */
  set(i = 0, j = 0, value = null){
    try {
      this.matrix[i][j] = value;
    }catch(e){
      console.error("Index nao corresponde a posicao da matriz.");
    }
  }

}

module.exports = Matrix;

