<h1 align="center">Spacestagram</h1>

A React web app for the Shopify Front End Developer Challenge - Winter 2022. 
View [Demo](https://spacestagram-ph.netlify.app/)

<p align="center">
  <img src="doc/spacestagram-demo.gif" alt="animated" />
</p>

## The Challenge
We need a webpage that can pull images, and allow the user to “like” and “unlike” their favourite images.

We'd like a simple to use interface that makes it easy to:
- Fetch data from one of NASA’s APIs and display the resulting images (more details under Technical Requirements)
- Display descriptive data for each image (for example: title, date, description, etc.)
- Like an image
- Unlike an image

 ### Technical requirements
1. Search results should come from NASA’s free APIs, for which you’ll need a free API key from [NASA API](https://api.nasa.gov)
2. Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.
3. Each image can be “liked”, and a user should be able to undo their “like”
4. The HTML that ends up being served client-side should be accessible and semantic [MDN reference](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

 ## Tech Stack
* React
* TypeScript
* Styled Components
* Redux

## Additional Features
- Save likes if the user leaves or reloads the page
- Heart animation on “liked” images
- loading state while we wait for NASA’s API to return data
- Fetch additional images from NASA API when scroll to bottom of page
- Created shareable links for each image
## Installion & Setup
* Copy `example.env` and create `.env.local` at the root of the folder and add required environment info. 

To run the app, run this commands in from the root:
```bash
npm i && npm start
```