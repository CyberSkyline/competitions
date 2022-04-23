# Cyber Competitions

This is a project to showcase cyber competitions for students & learners.

## Contributing

If you would like to contribute a competition to the site, open [competitions.js](https://github.com/CyberSkyline/competitions/blob/next/competitions.js), append this fragment to the bottom with relevant information, and open a pull request:

```JSX
  {
    header: 'Name of the competition',
    description: 'Short description of the competition',
    startDate: new Date('YYYY-MM-DD'),
    endDate: new Date('YYYY-MM-DD'),
    longDescription: (`
      Longer description of the competition (This field is markdown-friendly)
    `),
    logoURL: '/images/[full filename] (Add your logo to public/images)',
    regURL: 'Registration URL',
    contactInfo: 'mailto:[email address] if you have a direct support email, otherwise add a contact URL',
  },
```

## Developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

To install dependencies, you can run:

#### `yarn install`

Then to run an instance of the development server, you can run:

#### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
