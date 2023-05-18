const Main = artifacts.require("Main");
const Farmer = artifacts.require('Farmer');
const Manufacturer = artifacts.require('Manufacturer');
const Product = artifacts.require('Product');
const Stakeholder = artifacts.require('Stakeholder');
const Admin = artifacts.require('Admin');

module.exports = async function (deployer, network, accounts) {
  deployer.deploy(Admin, accounts[0]);

  await deployer.deploy(Farmer);
  const farmer = await Farmer.deployed();

  await deployer.deploy(Manufacturer);
  const manufacturer = await Manufacturer.deployed();

  await deployer.deploy(Stakeholder);
  const stakeholder = await Stakeholder.deployed();

  await deployer.deploy(Product);
  const product = await Product.deployed();

  await deployer.deploy(Main, farmer.address, manufacturer.address, stakeholder.address);
};
