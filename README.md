# blue.cloud React.js Coding Challange

This template includes basic "create-react-app" template and dev-server for mock data.

## Tasks

- Clone this repository to your machine.
- Install dependencies
- Run the server script
- Fetch data from /api/users one by one (see below)
- Show list of users in a table
- Show error messages for non-existing users

## Additional Tasks

- Add basic styling to users table
- Develop as dynamically as possible

### Usage

- Use "npm run server" for mock data
- Server listens endpoints below

### Endpoints

- http://localhost:3001/api/users/:id -> Fetch single user
### Requirements
- For each id listed in the USER_IDS_TO_FETCH a request has to be made, for there's no endpoint for the users list
- Modifying server script is not accepted
- Aggregate the results of the requests as follows:
  1. Users list should be displayed in a table
  2. Error messages should be displayed seperately for API requests returning with exception
  3. Error messsage will be in the error response
- Any additional library can be added as a dependency to implement the solution
- Research is also acceptable as long as the implemented code is grasped by the candidate
- Creating custom components where needed would be expected


## Prerequisites

- Git should be installed
- A recent version of Node.js should be installed (preferably ^16.0.0 but not required)
- A code editor should be installed

