---
title: Escrever...
layout: post
date: '2016-10-07 09:39:34 -0300'
image: "/assets/img/halfeld/escrever/banner.png"
author: halfeld
tags:
- Escrever
- Blog
- Começo Rápido
---

Hey galeraaaa... esse aqui é o blog/site da webschool, além de ser totalmente open, tanto em questão de código quanto em questão de liberdade para postar.

Esse é um blog colabolativo, onde todo o código fonte esta no Github e para submeter um post basta um Pull Request. Apesar de ainda ser um beta, como ele é open source é só olhar a [to-do list](https://github.com/Webschool-io/blog/projects/1) e fazer a colaboração ou apenas criar uma [issue](https://github.com/Webschool-io/blog/issues/new) no repositório caso apareça um bug.

A Stack que foi usada para cria-lo é Gulp, Jekyll e Docker. Com o Jekyll sendo o gerador de código estático mas se torna mais do que isso por ser processado no próprio Github, fica muito mais fácil de fazer o merge e o deploy, o Gulp que vai ser nosso task runner e o Docker para.... acho que vocês já sabem as facilidades dele em um blog colaborativo :wink:

# Começando a escrever posts

Para escrever você precisa ter o [Docker](http://docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalado.

Em um ambiente linux ou mac, para instalar o docker é só rodar o comando:

```bash
curl -sSL https://get.docker.com/ | sh
```

e para o Docker Compose:

```bash
wget https://github.com/docker/compose/releases/download/1.6.2/docker-compose-Linux-x86_64
mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

depois disso, é só clonar o repositório na sua maquina e rodar:

```bash
docker-compose run writer
```

e estará acessivel no seu [http://localhost](http://localhost) e então, é só entrar no admin em [http://localhost/admin](http://localhost/admin) para começar a escrever.

## Usando emojis do Github no post

Você pode usar os emojis do Github nos seus post, como já deve ter notado que eu usei acima, veja [essa lista](http://www.webpagefx.com/tools/emoji-cheat-sheet/) e divirta-se.

## Fazendo metions de users do Github

Você também pode mencionar outras pessoas, como eu agora estou fazendo comigo mesmo @halfeld ou com o suissa @suissa, basta colocar o `@` mais o user de alguem.

## Incluindo imagem nos posts

Você pode apenas usar um link externo ou usar local, no caso de usar local, colocando a imagem em `src/img/seu-github-username/nome-do-seu-posts` e depois inclui-la no post com o source da imagem assim,  `assets/img/seu-github-username/nome-do-seu-posts`


![techo de código](/assets/img/halfeld/escrever/code.png)