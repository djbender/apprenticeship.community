run:
	bin/foreman start

build: build-sass build-site

build-site:
	bin/jekyll --source site
build-sass:
	bin/sass site/assets/scss:site/assets/css
release:
	JEKYLL_ENV=production make build
