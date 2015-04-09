module.exports = {
    dashboard: function (req, res) {
        return res.view({user: req.user, error: req.error});
    }
}