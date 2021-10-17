const Shipping = artifacts.require("Shipping");
module.exports = (deployer) => {
    deployer.deploy(Shipping);
}