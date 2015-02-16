build: clean build-js build-sass build-site

run:
	bin/foreman start

bump:
	echo -n "Version number? "; read vn; echo $$vn > VERSION

release: clean bump build-production commit-site deploy

clean: clean-site clean-css clean-js

deploy:
	(cd _site && git push origin gh-pages)

build-production: build-sass build-js build-production-site

build-production-site:
	bin/jekyll build --config _config.yml,_config_production.yml --source site

build-site:
	bin/jekyll build --source site

build-sass:
	bin/sass --update site/assets/scss/:site/assets/css/

build-js:
	(cd site && uglifyjs assets/src-js/**/*.js --source-map assets/js/site.js.map --source-map-url /assets/js/site.js.map --source-map-root / -c -o assets/js/site.js)

clean-site:
	rm -rf _site/*

clean-css:
	rm -rf site/assets/css/*

clean-js:
	rm site/assets/js/site.js.map
	rm site/assets/js/site.js


commit-site:
	(cd _site && git checkout gh-pages && git add -A && git commit -m "Releasing $$(cat ../VERSION)")

