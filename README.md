# Api

First run the database instance by running `docker-compose up` in services/api folder. Next open the api folder in Intellij IDE and run the RockPaperScissorApplication using the Intellij play button. This file can be found under /src/main/java/com.zain.sohail.rockpaperscissor

# Api Tests

The api tests can be found under services/api/src/test/java/com.zain.sohail.rockpaperscissor. The unit tests for repo and servies can be found under repo and services folders respectively. The Controllers integration tests can be found under the controller folder.

# Web

Navigate to the services/web folder and run `npm install`. Next `ng serve` for running the angular application. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Web Tests

The web tests can be found under services/web folder. The unit tests are written in Karma while the end to end tests are written in Cypress.

Unit tests can be run by running `ng test` in the web folder. For running the end to end tests the backend and the frontend should be running. Then run `npm run e2e` in the web folder.