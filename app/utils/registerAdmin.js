/*
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const FabricCAServices = require("fabric-ca-client");
const { FileSystemWallet, X509WalletMixin } = require("fabric-network");
const fs = require("fs");
const {
  getConnectionProfilePath,
  getIdentityPath,
} = require("../constants/constant");
const yaml = require("js-yaml");

async function main(org) {}

module.exports.execute = main;
