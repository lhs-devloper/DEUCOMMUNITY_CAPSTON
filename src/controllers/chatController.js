exports.getRoom = (req, res) => {
    return res.render("chat/room")
}

exports.getMessage = (req, res) => {
    return res.render("chat/main")
}

exports.getCreateRoom = (req, res) => {
    return res.render("chat/create")
}

exports.postCreateRoom = () => {
    return res.redirect("/")
}