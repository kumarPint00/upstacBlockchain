/*
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const fs = require("fs"); // FileSystem Library
const yaml = require("js-yaml");
const {
  FileSystemWallet,
  Gateway,
  X509WalletMixin,
} = require("fabric-network");
const {
  getConnectionProfilePath,
  getIdentityPath,
} = require("../constants/constant");

async function main(org, fabricUserName) {}

module.exports.execute = main;
