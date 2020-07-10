# MuralApp

**[MuralApp.me](https://muralapp.me)** permite que o usuário realize buscas no banco de imagens [Pexels](https://www.pexels.com) e salve as imagens desejadas numa lista para análise e escolha do conjunto final. Ideal para designers que precisam pesquisar diversas fotos em bancos de imagens para criar uma seleção e, assim, escolher as imagens desejadas entre uma lista de selecionadas.

Este projeto foi desenvolvido com o objetivo de desenvolver e praticar meus conhecimentos recentes de Angular 9.

## API e HTTP Method
O Web App utiliza a [API da Pexels](https://www.pexels.com/api/documentation/#photos-search) para obter as imagens através de uma *GET Request*.

## Como funciona
Ao obter os resultados através da *GET Request*, o algoritmo constroi uma lista de imagens onde cada imagem segue o modelo construído no arquivo ```src/app/models/imagem.model.ts```.

Na lista de resultados de busca, o usuário tem a opção de adicionar quantas imagens desejar ao seu Mural; no Mural, o usuário tem as opções de abrir a imagem numa nova janela ou remover a imagem de sua lista.

![Busca e Mural](https://github.com/hugobrancowb/mural-ang-app/blob/master/src/assets/img/buscamural.jpg)

Visando facilitar a experiência do usuário, o app utiliza a ID das imagens obtidas na busca para comprar com a lista de imagens selecionadas e destaca com uma borda verde aquelas imagens que já foram adicionadas ao Mural.

![Destaque para imagens já adicionadas ao Mural](https://github.com/hugobrancowb/mural-ang-app/blob/master/src/assets/img/destaque.jpg)

## Outros projetos
Confira [meu portfólio](https://hugobrancowb.github.io/) para mais informações e outros projetos realizados.