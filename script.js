$(document).ready(function(){
    
    $('#headerButton').click(function(){
        $('form').slideDown();
    })
    
    $('#botao-cancelar').click(function(){
      $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overley-imagem-link"> <a href="${endereçoDaNovaImagem}"target="_blank" title="Ver imagem em tamanho real"> Ver imagem em tamanho real</a> </div>`).appendTo(novoItem);
      $(novoItem).appendTo('ul');
       $(novoItem).fadeIn(1000);
      $('#endereco-imagem-nova').val('')
    })
})


        