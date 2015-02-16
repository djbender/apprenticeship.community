run:
	bin/foreman start

build: build-js build-sass build-site

build-site:
	bin/jekyll --source site

build-sass:
	bin/sass site/assets/scss:site/assets/css

build-js:
	uglifyjs site/assets/src-js/**/*.js --source-map site/assets/js/site.js.map --source-map-url /assets/js/site.js.map --source-map-root / -c -o site/assets/js/site.js


release:
	JEKYLL_ENV=production make build
