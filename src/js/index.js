var Marionette = require('backbone.marionette');

CatView = require("./apps/cat");

var catView = new CatView({
    el: "h1"
});

catView.render();