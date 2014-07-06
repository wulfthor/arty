module.exports = function (app) {
  require('./main')(app);
  require('./artworks')(app);
};
