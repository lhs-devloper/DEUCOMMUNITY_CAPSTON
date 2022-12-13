const multer = require('multer')

exports.localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    next();
};
  
exports.protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
      return next();
    } else {
      req.flash("error", "로그인 먼제 해주세요!");
      return res.redirect("/login");
    }
};

exports.imageUpload = multer({
    dest: "uploads/",
    limits: {
      fileSize: 10000000,
    },
});
  
// exports.publicOnlyMiddleware = (req, res, next) => {
//     if (!req.session.loggedIn) {
//       return next();
//     } else {
//       req.flash("error", "Not authorized");
//       return res.redirect("/");
//     }
// };