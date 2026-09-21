//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//********************************************
//* route files for different sprints
//********************************************
require('./routes/sprint-1.js')(router);
require('./routes/sprint-9.js')(router);