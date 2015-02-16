run:
	bin/foreman start

build: build-js build-sass build-site

build-site:
	bin/jekyll --source site

build-sass:
	bin/sass site/assets/scss:site/assets/css

build-js:
	(cd site && uglifyjs assets/src-js/**/*.js --source-map assets/js/site.js.map --source-map-url /assets/js/site.js.map --source-map-root / -c -o assets/js/site.js)

release:
	JEKYLL_ENV=production make build
