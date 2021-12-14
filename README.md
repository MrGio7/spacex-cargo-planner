## SpaceX Cargo Planner
SpaceX is experiencing an increasing demand of shipments to Mars and has commissioned an application to automate the needed cargo space calculations.

High level overview
The application loading existing set of shipments over the network.

As a first feature it calculates the required number of cargo bays for each shipment.

### Functionality
When the user loads the application it first checks for locally saved shipments and loads them. In case there are none it displays a message asking to load a set over the network.

Typing in a search box filters the existing list of loaded shipments by company name.

Clicking a specific shipment displays the shipment details.

Each shipment details view have an unique URL.

Changing the “Cargo boxes” field recalculates the needed number of cargo bays.

### Calculating the needed number of cargo bays
Each shipment specifies a comma separated string of cargo box units where each unit is represented by a number.

{
  "id": "d3ff0c68892",
  "name": "Amazon.com",
  "email": "contact@amazon.com",
  "boxes": "6.8,7.9,3"
}
The following shipment consists of 3 cargo boxes with the following units 6.8, 7.9 and 3.

Each Starship cargo bay can hold up to 10 units.

The example shipment would require 2 cargo bays.

Another shipment 6.2,5.9,4,6.9,4.4,1.7,9.5 would require 4 cargo bays.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/spacex-cargo-planner](http://localhost:3000/spacex-cargo-planner) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!