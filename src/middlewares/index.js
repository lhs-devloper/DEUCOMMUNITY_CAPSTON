exports.localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    next();
};
  
exports.protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
      return next();
    } else {
      req.flash("error", "Log in first.");
      return res.redirect("/login");
    }
};
  
// exports.publicOnlyMiddleware = (req, res, next) => {
//     if (!req.session.loggedIn) {
//       return next();
//     } else {
//       req.flash("error", "Not authorized");
//       return res.redirect("/");
//     }
// };