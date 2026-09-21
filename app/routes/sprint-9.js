// Add your routes here - above the module.exports line
var versionMiddleware = require("./versionMiddleware")
var versionData = require('../data/data-sprint-9')

module.exports = function (router) {

    var version = "sprint-9";

    versionMiddleware(router, version);

    function loadVersionData(req, res, next) {
        req.session.data = req.session.data || {}
        req.session.data['version'] = version
        req.session.data['visits'] = versionData['visits']
        req.session.data['strategicConversations'] = versionData['strategicConversations']
        next()
    }

    router.get('/' + version + '/dashboard', loadVersionData, function (req, res) {
        res.render(version + '/dashboard')
    })

    router.get('/' + version + '/dashboard-only-rg-visits', loadVersionData, function (req, res) {
        res.render(version + '/dashboard-only-rg-visits')
    })

    router.get('/' + version + '/dashboard-only-rg-visits.html', loadVersionData, function (req, res) {
        res.render(version + '/dashboard-only-rg-visits')
    })

    router.get('/' + version + '/dashboard-only-strategic-conversation', loadVersionData, function (req, res) {
        res.render(version + '/dashboard-only-strategic-conversation')
    })

    router.get('/' + version + '/dashboard-only-strategic-conversation.html', loadVersionData, function (req, res) {
        res.render(version + '/dashboard-only-strategic-conversation')
    })

    router.get('/' + version + '/dashboard-delivery-officers-combined', loadVersionData, function (req, res) {
        res.render(version + '/dashboard-delivery-officers-combined')
    })

    router.get('/' + version + '/dashboard-delivery-officers-combined.html', loadVersionData, function (req, res) {
        res.render(version + '/dashboard-delivery-officers-combined')
    })

}
