'use strict';

var pioncore = module.exports;

// module information
pioncore.version = 'v' + require('./package.json').version;
pioncore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of pioncore-lib found. ' +
      'Please make sure that you are not mixing instances of classes of the different versions of pioncore.';
    console.warn(message);
  }
};
pioncore.versionGuard(global._pioncore);
global._pioncore = pioncore.version;

// crypto
pioncore.crypto = {};
pioncore.crypto.BN = require('./lib/crypto/bn');
pioncore.crypto.ECDSA = require('./lib/crypto/ecdsa');
pioncore.crypto.Hash = require('./lib/crypto/hash');
pioncore.crypto.Random = require('./lib/crypto/random');
pioncore.crypto.Point = require('./lib/crypto/point');
pioncore.crypto.Signature = require('./lib/crypto/signature');

// encoding
pioncore.encoding = {};
pioncore.encoding.Base58 = require('./lib/encoding/base58');
pioncore.encoding.Base58Check = require('./lib/encoding/base58check');
pioncore.encoding.BufferReader = require('./lib/encoding/bufferreader');
pioncore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
pioncore.encoding.Varint = require('./lib/encoding/varint');

// utilities
pioncore.util = {};
pioncore.util.buffer = require('./lib/util/buffer');
pioncore.util.js = require('./lib/util/js');
pioncore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
pioncore.errors = require('./lib/errors');

// main pioncoin library
pioncore.Address = require('./lib/address');
pioncore.Block = require('./lib/block');
pioncore.MerkleBlock = require('./lib/block/merkleblock');
pioncore.BlockHeader = require('./lib/block/blockheader');
pioncore.HDPrivateKey = require('./lib/hdprivatekey.js');
pioncore.HDPublicKey = require('./lib/hdpublickey.js');
pioncore.Networks = require('./lib/networks');
pioncore.Opcode = require('./lib/opcode');
pioncore.PrivateKey = require('./lib/privatekey');
pioncore.PublicKey = require('./lib/publickey');
pioncore.Script = require('./lib/script');
pioncore.Transaction = require('./lib/transaction');
pioncore.GovObject = require('./lib/govobject');
pioncore.URI = require('./lib/uri');
pioncore.Unit = require('./lib/unit');
pioncore.Message = require('./lib/message')

// dependencies, subject to change
pioncore.deps = {};
pioncore.deps.bnjs = require('bn.js');
pioncore.deps.bs58 = require('bs58');
pioncore.deps.Buffer = Buffer;
pioncore.deps.elliptic = require('elliptic');
pioncore.deps.nodeX16r = require('node-x16r');
pioncore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
pioncore.Transaction.sighash = require('./lib/transaction/sighash');
