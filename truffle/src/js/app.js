App = {
    web3Provider: null,
    contracts: {},

    init: function() {
        return App.initWeb3();
    },

    initWeb3: function() {
        // Is there is an injected web3 instance?
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
        } else {
            // If no injected web3 instance is detected, fallback to the TestRPC
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
        }
        web3 = new Web3(App.web3Provider);
        return App.initContract();
    },

    initContract: function() {
        $.getJSON('Bounties.json', function(data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            var BountyArtifact = data;
            App.contracts.Bounties = TruffleContract(BountyArtifact);

            // Set the provider for our contract
            App.contracts.Bounties.setProvider(App.web3Provider);

            // Use our contract to retrieve and mark the adopted pets
        });
        return App.bindEvents();
    },

    bindEvents: function() {
        //$(document).on('click', '.btn-adopt', App.handleAdopt);
    },

    markAdopted: function(adopters, account) {
        /*
         * Replace me...
         */
    },

    handleAdopt: function() {
        event.preventDefault();

        //var petId = parseInt($(event.target).data('id'));

        /*
         * Replace me...
         */
    }

};

$(function() {
    $(window).load(function() {
        App.init();
    });
});

function lockFunds(bounty) {
    App.contracts.Bounties.deployed().then(function(instance) {
        bountiesInstance = instance;
        return bountiesInstance.lockFunds().sendTransaction({from: "WRITE ADDRESS HERE", value: bounty });
    }
}
