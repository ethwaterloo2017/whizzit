var App = require('./app.js')

$(function() {
    $(window).load(function() {
        App.init();
    });
});


function answer(q_id) {
    App.contracts.Bounties.deployed().then(function(instance) {
        bountiesInstance = instance;
        return bountiesInstance.answer(q_id, (err, res) => console.log(res));
    }
}

$("#ahref").click(function() {
    var href = $("#ahref").attr("href");
    answer(href));
}
