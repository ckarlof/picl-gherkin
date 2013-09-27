var gherkinLib = require('./gherkin');
var codes = require('./lib/error_codes');
var keyStretch = require('./lib/keystretch');
var pbkdf2 = require('./lib/pbkdf2');
var scrypt = require('./lib/scrypt');
var sjcl = require('sjcl');
var P = require('p-promise');
var Buffer = require("buffer-browserify").Buffer;

module.exports = {
  Client: gherkinLib,
  keyStretch: keyStretch,
  Buffer: Buffer,
  pbkdf2: pbkdf2,
  scrypt: scrypt,
  sjcl: sjcl,
  P: P,
  errorCodes: codes
};

gherkin = module.exports;
