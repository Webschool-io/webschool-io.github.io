FROM halfeld/jekyll:1.2
WORKDIR /srv/jekyll
ADD . /srv/jekyll
RUN npm install
