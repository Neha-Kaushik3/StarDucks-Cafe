# StarDucks-Cafe
Custom Token project : The idea behind this application is to buy tokens from a cafe.
The owner of cafe is able to do the KYC of account (i.e. whitelisting the account), without KYC no one can buy the tokens and no one except owner can perform KYC.
Any whitelisted customer can send ethers to the smart contract to buy tokens.
Additional tokens can be purchased using "Add Token" button.


Real-World Use-Case for this Project¶


💰 Tokenization of any Assets as fungible Tokens (ERC20)

🏦 Creation of Bonus Programs, Vouchers, etc.

💲 Creation of a new crypto currency

🧾 Creation of a Payment-layer on top of Ethereum

## Setup
Quick start the Ganche 

<img src="UI%20Images/ganache.jpg" height = "50%" width = "50%">

Connect to ganche using metamask wallet

<img src="UI%20Images/metamaskStart.jpg" height = "20%" width = "20%">

Initially, the account in wallet has a balance of 0ETH
So, use the truffle console to access the web3 and send some ether.

<img src="UI%20Images/initialtxn.jpg" height = "60%" width = "70%">

#### Migartion 
Migrating all out contracts

<img src="UI%20Images/migrate.jpg" height = "40%" width = "60%">

<img src="UI%20Images/migrate2.jpg" height = "40%" width = "40%">


## UI
<img src="UI%20Images/main.jpg" height = "60%" width = "70%">

### Whitelisting an account

<img src="UI%20Images/kyc.jpg" height = "20%" width = "20%">
<img src="UI%20Images/kycsuccess.jpg" height = "20%" width = "20%">
<img src="UI%20Images/popup.jpg" height = "30%" width = "30%">
Trying to whitelist an account from **Non owner** account
<img src="UI%20Images/notowner.jpg" height ="70%"width = "80%">

### Buying tokens
<img src="UI%20Images/boughttoken.jpg" height ="70%" width = "80%">

Now add more tokens using add token button

<img src="UI%20Images/addtoken.jpg" height ="70%" width = "80%">

Trying to buy token from **Non whitelisted** account

<img src="UI%20Images/withoutkyc.jpg" height = "30%" width = "30%">
<img src="UI%20Images/failed.jpg" height = "30%" width = "30%">

Maximum number of token that minted are 1 million,if someone tries to buy more than that the transaction will fail

<img src="UI%20Images/moreMillion.jpg" height = "30%" width = "30%">

## UNIT TESTS
<img src="UI%20Images/filnal%20test.jpg" height = "50%" width = "70%">
