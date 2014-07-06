
/*
 * GET 'home page'  e.
 */

module.exports.homelist = function(req, res){
  res.render('artworks-list', { title: 'Home' });
};

/*
 * GET 'artwork info'  page.
 */
module.exports.artworkInfo = function(req, res){
  res.render('index', { title: 'Artwork info' });
};

/*
 * GET 'add review '  page.
 */
module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add Review ' });
};
