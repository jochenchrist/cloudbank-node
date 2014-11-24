var express = require('express');
var router = express.Router();

var accounts = require('../data/accounts.json');

var accountsLookup = {};
for (var i = 0, len = accounts.length; i < len; i++) {
  accountsLookup[accounts[i].iban] = accounts[i];
}

router.get('/:iban', function(req, res, next) {
  var iban = req.params.iban;

  if(accountsLookup[iban] == null) {
    res.send(404);
  }

  res.send(accountsLookup[iban]);
});

module.exports = router;
