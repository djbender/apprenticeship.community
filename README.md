# [Apprenticeship Community](http://apprenticeship.community)

A community of people dedicated to cultivating business cultures of professional
growth.

## Our Mission
We help companies support employees learning and growth. This means:
* Developing internal communities of practice around continual learning
* Providing new hires with contextual training
* Evaluating candidates based on their potential instead of their credentials

We'll know we've accomplished this when *no company* has a hiring shortage and
*everyone who wants to work is working*.

## Contributing
We're flattered you want to spend your time helping out. Read our [contributor
guidelines](CONTRIBUTING.md) for more details!

## Previewing Content Locally
The project is built using Ruby and the github-pages gem. Website content lives
in the `site` directory. If you have the Ruby programming language
installed on your computer the following steps should get you started
previewing changes locally.

Note: the `$` sign is a terminal prompt. You don't need to type it. `#`
indicates that everything following is a comment.
```ruby
# Install the ruby tools used to build the site.
$ bundle install
# Start hosting the site locally.
$ bin/foreman start
```
Next, you should be able to go to [http://localhost:5000](http://localhost:5000)
in your web browser.

If you get stuck, ask for help in the [CodeNewbie
forum](http://discourse.codenewbie.org), or ask for help in our community.

## Releasing
Releasing assumes:

1. You have make, uglifyjs, and ruby installed.
2. You have the `_site` subdirectory initialized as a git repository pointing
   toward `git@github.com:zincmade/apprenticeship.community.git`.
3. You have a file named "_config_production.yml" which overrides the
   development segment token.
4. You have commit rights to this repository.

To release, run `make release` from the repositories root directory. This will:
