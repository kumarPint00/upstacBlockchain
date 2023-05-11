"use strict";

const fs = require("fs"); // FileSystem Library
const { FileSystemWallet, X509WalletMixin } = require("fabric-network"); // Wallet Library provided by Fabric
const {
  getConnectionProfilePath,
  getIdentityPath,
} = require("../constants/constant");

async function main(
  org,
  certificatePath,
  privateKeyPath,
  fabricUserName,
  mspName
) {}

module.exports.execute = main;
