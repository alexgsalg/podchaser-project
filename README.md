# Getting Started with Podchaser project

This project is not a generic project that you are used to was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was created using **Typescript** and **CSS Modules** (used for speed propuses. Styled Components were my second choice) and Tested using **Cypress.io** latest version.

The testing based on the desired deadline was a *end-to-end* test.\
I chose to use it because the project is not large enough to have data floating \
around so with the end-to-end method I can track the data through the application \
making sure that the correct information is available and is on the right place.

## Project structure

The project folders implemented is the following:

- \_mock_ : Holds any mock file used for testing.
- \_types_ : Holds typescript declaration files.
- assets : Store the project assets such as images and fonts.
- components : Every element that I think it could be reused inside a component or page.]
- hooks : Custom react hooks including the ones used for **fetching** and **transforming** data
- layouts : I creates this folder so the project can have multiple layouts without having to repeat structures
- models : A folder that stores typescript types using inside the project _(could be better I admit)_
- pages : files that contain route pages so its easier to find and manage using routes

The components are created with the following pattern:
_FolderName_ > _file-name.filetype.(tsx.css)_

The folders uses Camelcase syntax and files are dash separated and have their \
file type before the extension. For example for pages **HomePage** > **home-page.page.tsx**\
and CSS have **module** as file type.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Like aways runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn coverage`

Launches the Cypress.io test runner which open the Cypress software. Select the \
**E2E Testing** (left option).

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
and bla bla bla you know the rest.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back... soo we don't do that here!**

