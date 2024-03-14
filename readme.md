# Playground

This playground will house my side projects and goofy little experiments… okay, truth be told, this is me trying to work around the limit Google Firebase has on how many projects I can probably have for free, but maybe this won't be necessary. Time & experience will tell.

Essentially, this has become a sort-of monolith with sub-repos. I'm not (currently) using git submodules, but I might if that becomes necessary.

## Firebase Hosting Deployment

`firebase deploy --only hosting`

[Firebase Quickstart Guide](https://firebase.google.com/docs/hosting/quickstart)

## Project Structure

Project directories are added to the root and are mostly isolated (sometimes living in their own git repo). Each build/deploy project steps must take whatever final files exist and move them to `../dist` (from the root dir perspective of the projects), i.e. `/playground/dist` (from the playground's perspective). That way, when Firebase hosting deploys, it sends the project up in it's own directory. E.g. `/music-bars` will deploy to `./dist/music-bars`.

**Warning:** be sure to configure the base url, when relevant, to use the right project root like `music-bars` does.