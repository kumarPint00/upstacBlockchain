const fs = require("fs");
const yaml = require("js-yaml");
const { FileSystemWallet, Gateway } = require("fabric-network");
const {
  getConnectionProfilePath,
  getIdentityPath,
} = require("../constants/constant");
let gateway;

async function getContractInstance(
  org,
  fabricUserName,
  channelName,
  chainCodeName,
  smartContractName
) {
  // A gateway defines which peer is used to access Fabric network
  // It uses a common connection profile (CCP) to connect to a Fabric Peer
  // A CCP is defined manually in file connection-profile-iit.yaml

  // A wallet is where the credentials to be used for this transaction exist

  // Load connection profile; will be used to locate a gateway; The CCP is converted from YAML to JSON.

  // Set connection options; identity and wallet

  // Connect to gateway using specified parameters
  console.log(".....Connecting to Fabric Gateway");

  // Access channel
  console.log(".....Connecting to channel - common");

  // Get instance of deployed Certnet contract
  // @param Name of chaincode
  // @param Name of smart contract
  console.log(".....Connecting to Smart Contract");
}

function disconnect() {
  console.log(".....Disconnecting from Fabric Gateway");
  gateway.disconnect();
}

async function getChannel(org, fabricUserName, channelName) {
  // A gateway defines which peer is used to access Fabric network
  // It uses a common connection profile (CCP) to connect to a Fabric Peer
  // A CCP is defined manually in file connection-profile-iit.yaml

  // A wallet is where the credentials to be used for this transaction exist

  // Load connection profile; will be used to locate a gateway; The CCP is converted from YAML to JSON.

  // Set connection options; identity and wallet

  // Connect to gateway using specified parameters
  console.log(".....Connecting to Fabric Gateway");

  // Access channel
  console.log(".....Connecting to channel - common");

  return channel;
}

module.exports.getContractInstance = getContractInstance;
module.exports.disconnect = disconnect;
module.exports.getChannel = getChannel;
