import { Meteor } from 'meteor/meteor';

// This will create the mongo collection for us and get everything wired up
import '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
});
