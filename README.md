# Example Project 
Using Lit Element, Vaadin Router and Github Pages

## Automated using Github Actions
We're using Github Actions so we can get a button to manually deploy,
see: [.github/workflows/deploy.yml](/.github/workflows/deploy.yml)

![Run workflow example](/run-workflow-example.png)

It is possible to change this to run once something has been pushed 
to a certain branch (e.g. `main` or `release`).

## Vitejs
We have emptied our build configuration in [vite.config.js](/vite.config.js) 
because we're not building a library (remove the `lib` property)
and we include our build dependencies in our JS package (remove the `rollup.external` property).
Note that this increases the JS bundle size greatly.

## Base path
Note that we had to set the correct base path in [vite.config.js](/vite.config.js)
and in our [index.html](/index.html) via a `<base>` element.

Assets are put into `/public` so both `npm run dev` and `npm run build` 
work as expected.

## Result
The result can be found here:
https://arothuis-hu.github.io/lit-example/
