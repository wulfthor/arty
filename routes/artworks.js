var ctrl = require('../app_server/controllers/artworks');
module.exports = function (app) {
  app.get('/', ctrl.homelist);
  app.get('/artwork', ctrl.artworkInfo);
  app.get('/artwork/review/new', ctrl.addReview);
};
