const Token = artifacts.require("MyToken");
const TokenSale = artifacts.require("MyTokenSale");
const chai = require("./chaisetup.js");
const KycContract = artifacts.require("KycContract");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("TokenSale Test", async function(accounts) {
    const [initialHolder, recipient, anotherAccount] = accounts;
    it("There shouldnt be any coins in deployer's account", async() => {
        let instance = await Token.deployed();
        let bal = instance.balanceOf.call(initialHolder);
        //  return expect(instance.balanceOf.call(initialHolder)).to.eventually.be.a.bignumber.equal(new BN(0));
        return expect(bal).to.eventually.be.a.bignumber.equal(new BN(0));
    });
    it("All coins should be in the tokensale smart contract", async() => {
        let instance = await Token.deployed();
        let balance = await instance.balanceOf.call(TokenSale.address);
        let totalSupply = await instance.totalSupply.call();
        return expect(balance).to.be.a.bignumber.equal(totalSupply);
    });

    it("should be possible to buy one token by simply sending ether to the smart contract", async() => {
        let tokenInstance = await Token.deployed();
        let tokenSaleInstance = await TokenSale.deployed();
        let balanceBeforeAccount = await tokenInstance.balanceOf.call(initialHolder);
        await expect(tokenSaleInstance.sendTransaction({ from: initialHolder, value: web3.utils.toWei("1", "wei") })).to.be.rejected;
        await expect(balanceBeforeAccount).to.be.bignumber.equal(await tokenInstance.balanceOf.call(initialHolder));

        let kycInstance = await KycContract.deployed();
        await kycInstance.setKycCompleted(initialHolder, { from: initialHolder });
        await expect(tokenSaleInstance.sendTransaction({ from: initialHolder, value: web3.utils.toWei("1", "wei") })).to.be.fulfilled;
        return expect(balanceBeforeAccount + 1).to.be.bignumber.equal(await tokenInstance.balanceOf.call(initialHolder));

    });

});