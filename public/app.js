YUI().use('node-base', 'pjax', function (Y) {
    // Append current time to track full page loads.
    Y.one('body').append('<p>Current Time: ' + new Date() + '</p>');

    var pjax = new Y.Pjax({
        container      : '#main',
        contentSelector: '#main',
        linkSelector   : 'a'
    });

    pjax.blackList = {
        '/foo/': true
    };

    pjax.hasRoute = function (url) {
        var path = this.removeQuery(this.removeRoot(url));

        if (this.blackList[path]) {
            return false;
        }

        return this.constructor.prototype.hasRoute.apply(this, arguments);
    };
});
