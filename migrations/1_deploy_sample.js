const sample = artifacts.require("Sample");

module.exports = function (deployer){
    deployer.deploy(sample);
};