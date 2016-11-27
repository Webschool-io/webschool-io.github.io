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

# Começando...

## Com docker :)

Além do docker, usaremos o docker compose.  
Em um ambiente linux ou mac, para instalar o docker é só rodar o comando:

```bash
curl -sSL https://get.docker.com/ | sh
```

e para o docker compose:

```bash
wget https://github.com/docker/compose/releases/download/1.6.2/docker-compose-Linux-x86_64
mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

depois disso, é só clonar o repositório na sua maquina e rodar caso vá escrever:

```bash
docker-compose run --service-ports writer
```

ou caso vá desenvolver:

```bash
docker-compose run --service-ports dev
```

caso você vá escrever, estará acessivel no seu [http://localhost:4000](http://localhost:4000)  e então, é só entrar no admin em [http://localhost:4000/admin](http://localhost:4000/admin) para começar a escrever e caso vá contribuir com código, estará acessivel em [http://localhost:3000](http://localhost:3000).

## Sem docker :(

Para usar sem o docker, basta ter instalado o Node.js com o Gulp e o Ruby com Jekyll, e usar o comando `gulp jekyll:admin` para escrever ou `gulp` caso você irá fazer alguma contribuição com código.

caso você vá escrever, estará acessivel no seu [http://localhost:4000](http://localhost:4000)  e então, é só entrar no admin em [http://localhost:4000/admin](http://localhost:4000/admin) para começar a escrever e caso vá contribuir com código, estará acessivel em [http://localhost:3000](http://localhost:3000).

## Adicionando-se como autor

Para fazer isso basta ir arquivo `_data/authors.yml`, nele é só preencher os campos

```
- username: seu-github-username  # obrigatório
  description: sua-descrição     # opicional - caso não coloque, irá pega a `bio` do github
  twitter: seu-twitter-username  # opicional
  linkedin: seu-linkedin-id      # opicional
  codepen: seu-codepen-username  # opicional
  site: seu-site                 # opicional
```

qualquer dúvida, já existe um autor lá que sou eu, basta tomar como referência.

## Criando o arquivo do post

Para começar o post, crie um arquivo em `_posts/ano-mes-dia-nome-do-post.markdown`(sendo a data no formato yyyy-mm-dd), e dentro dele coloque:

```
---
title: titulo do post             # obrigatório
layout: post                      # obrigatório
date: 'yyyy-MM-dd hh:mm:ss -0300' # obrigatório
image: "/assets/img/seu-github-username/titulo-do-post/nome-da-imagem.extensão" # opicional mas altamente recomendável
author: seu-github-username       # obrigatório
tags:                             # opicional mas altamente recomendável
- sua-tag-1
- sua-tag-2
- sua-tag-3
---

Aqui já pode começar a escrever ou acessar em /admin como o visto anteriormente.
```

# Usando emojis do Github no post

Você pode usar os emojis do Github nos seus post, como já deve ter notado que eu usei acima, veja [essa lista](http://www.webpagefx.com/tools/emoji-cheat-sheet/) e divirta-se.

# Fazendo metions de users do Github

Você também pode mencionar outras pessoas, como eu agora estou fazendo comigo mesmo @halfeld ou com o suissa @suissa, basta colocar o `@` mais o user de alguém.

# Incluindo imagem nos posts

Você pode apenas usar um link externo ou usar local, no caso de usar local, colocando a imagem em `src/img/seu-github-username/nome-do-seu-post` e depois inclui-la no post com o source da imagem assim,  `assets/img/seu-github-username/nome-do-seu-post/nome-da-imagem.extensão-da-imagem`.

exemplo:

![techo de código](/assets/img/halfeld/escrever/code.png)

# Incluindo vídeos

Para incluir é só colocar o iframe do direto no post.

# Considerações

Então é isso pessoal, a proporção que esse blog pode se tornar esta na quantidade de contribuições que irão ser feitas, logo esta a cargo da comunidade :wink:. Outra coisa que é importante falar aqui, é que é legal **não ter temas repetidos** então, caso vá escrever crie uma [issue](https://github.com/Webschool-io/blog/issues/new) com o seguinte título `Post: Meu titulo de post` e assim antes de alguém escrever algo, é só olhar nas issues e ver se o tema esta reservado.
