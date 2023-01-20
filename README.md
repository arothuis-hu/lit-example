# Example Project 
Using Lit Element, Vaadin Router and Github Pages

## Automated using Github Actions
We're using Github Actions so we can get a button to manually deploy,
see: [.github/workflows/deploy.yml](/.github/workflows/deploy.yml)

![Run workflow example](/run-workflow-example.png)

It is possible to change this to run once something has been pushed 
to a certain branch (e.g. `main` or `release`).

## Vite
We have emptied our build configuration in [vite.config.js](/vite.config.js) 
because we're not building a library (remove the `lib` property)
and we include our build dependencies in our JS package 
(remove the `rollupOptions.external` property).
Note that this increases the JS bundle size greatly.

## Base path
Note that we had to set the correct base path in [vite.config.js](/vite.config.js)
and in our [index.html](/index.html) via a `<base>` element.

Assets are put into `/public`, which Vite will take as root,
 so both `npm run dev` and `npm run build` work as expected.

More info:
* [Vite config: base](https://vitejs.dev/config/shared-options.html#base)
* [`<base>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
* [Router base url](https://vaadin.github.io/router/vaadin-router/#/classes/Router#properties)
 
⚠️ Careful with `Router.go` when using a `<base>` element! 
In this case, you need to explicitly include base paths inside routes, see: https://github.com/vaadin/router/issues/802 

## URL fix
Github pages only loads `index.html` when we visit the `/` path
as seen from the basepath. It will refer to a `404.html` 
when a route cannot be found, which is why we cannot navigate 
directly to URLs -- even though the URL seems correct!

The fix (or: *hack*) for this is to copy `index.html` to `404.html`
when building our package. This way, our Vaadin Router will always
deal with our URL handling, not Github Pages.

:warning: *Note that this is not ideal as we still get 404 status codes*

## Result
The result can be found here:
https://arothuis-hu.github.io/lit-example/

## How does this work?
GitHub Pages looks for an `index.html` as an entrypoint.
We configure the directory and branch to use in our project's `Settings` under `GitHub Actions`.
In this project, the path is set to `/` of the branch `gh-pages`.

For a successful deployment, we want our compiled distribution (i.e. `dist`) to be put on `/` of the branch `gh-pages`.
Our source should not be deployed.

This distribution is built by Vite after running `vite build` (or, via package.json: `npm run build`).
Vite makes sure that everything is packaged up and is reachable correctly, including dependencies.

⚠️ We need not modify the `gh-pages` directly, but through our deployment tooling.

Deployment can be done manually, from a developer's machine, via `deploy.sh` / `deploy.bat`
or on GitHub using a button via GitHub Action ([.github/workflows/deploy.yml](/.github/workflows/deploy.yml)).

