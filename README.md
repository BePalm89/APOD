# Project React with Vite

This project was create with VITE

## Setup instructions

Start by installing dependencies:

`npm install`

Start the server:

`npm run dev`

You should be able to access tha application at `http://localhost:5173/`

## Acceptance criteria

- [x] I expect to see the deployed page easily accessible, along with an attached GitHub repository.
- [x] I should find an img element displaying the NASA's featured image for today, based on their API called APOD (Astronomy Picture of the Day).
- [x] I expect to be able to read the title, description, and general information about the image alongside it.
- [x] I should find an input element of type "date" that allows me to select a date different from today and change the displayed image.
- [x] The input should be restricted so that I cannot choose a date greater than today. If it allows me to select a date in the future, I should be able to see a message on the screen notifying me that "No photograph is available."
- [x] The API call should not have occurred if it allows me to choose a date greater than today.
- [x] Bonus: There should be an available select input that allows me to choose between the APOD and Mars Rover Photos APIs, so I can view images from both cases.


## Implementation

- The project has three page, the home page, the about page and the apod/mars rover page
- The web site is fully responsive
- By default the apod/mars page is doing a call to the nasa APOD api to show the picture of the day
- There is the possibility to change the date to show pictures of other day
- There is also the possibility to change the api and call the rover api of nasa
- If there is not picture there is a 404 component 

## Figma desing

https://www.figma.com/file/knn5m5w80ITNekIDXdqCRa/APOD-%2F-Mars-Rover-page?type=design&node-id=10%3A8058&mode=design&t=NdmyNz2w0wCojxoU-1
