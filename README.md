# duo-nft-subgraph

This project enables user to query two ERC721 NFT collection

https://thegraph.com/hosted-service/subgraph/amoweolubusayo/duo-nft-subgraph?selected=playground

# Writing a Subgraph for 2 ERC721 NFT collections


# Graph Overview

We can’t talk about a thriving, decentralized future with APIs without speaking about the Graph. The Graph enables the querying of blockchain data that is challenging to query directly. There are notable products using the Graph in production today e.g. Uniswap, Synthetic and Aragon. 

The collection, transformation and storage of information from a blockchain is done using open APIs known as subgraphs. Subgraphs query data via GraphQL. When you deploy a subgraph, you can perform several actions with it such as being able to call it from your frontend. To learn more about the graph, you can check them out here.

The following makes up a subgraph:

`subgraph.yaml:` The subgraph.yaml file is a YAML file that holds the subgraph manifest

`schema.graphql:` The schema.graphql is a GraphQL schema outlining the information saved for your subgraph including how to query it using GraphQL

`AssemblyScript Mappings`: This is the code in AssemblyScript that converts event data to the entities listed in your schema. 


In this tutorial, we would have a walk through on how to create a subgraph for two NFT collections (ERC721 contracts) and be using the hosted service. The following networks are supported on the hosted service



| Ethereum | Near         | Cosmos      | Arweave    |
| -------- | ------------ | ----------- | --- |
| mainnet  | near-mainnet | cosmoshub-4 | arweave-mainnet    |
kovan | near-testnet | theta-testnet-001 
rinkeby
ropsten
goerli
poa-core
poa-sokol
xdai (now known as Gnosis Chain)
matic (now known as Polygon)
mumbai
fantom
bsc (now known as BNB Chain)
chapel
clover
avalanche
fuji
celo
celo-alfajores
fuse
moonriver
mbase
arbitrum-one
arbitrum-rinkeby
optimism
optimism-kovan
aurora
aurora-testnet
boba
harmony     |      |     |


![](https://i.imgur.com/vZwh3iT.png)


# Usecases 
Think of wanting to build a robust dApp showcasing NFT collections, collectibles with their images, tokenId and ownership transfer. Your dApp will be able to do activities such as aggregation, search, associations, and pro filtering which are all examples of complex real-world queries that can be done with your dApp when it calls the subgraph you build. Now, let us proceed with our subgraph.


# Create your subgraph on hosted service
Go to the hosted service interface online and create a subgraph. Head over to https://thegraph.com/hosted-service/subgraph to create one 

![](https://i.imgur.com/neAzKkV.png)



# Getting your contracts on OpenSea, installing graph cli and setting up a template md file
Let’s begin by finding two projects on opensea. We will be using these two Starlink PixelNauts and Party Degenerates as they follow the ERC-271 standard. 


Now, create your project. Navigate to the folder you want your subgraph to be, in this case it will be desktop

`cd desktop`

Before you proceed, keep in mind that the Graph CLI is built in JavaScript and you must install either yarn or npm. Once yarn or npm is installed, install the Graph CLI by running

**Yarn**
`yarn global add @graphprotocol/graph-cli`

**Npm**
`npm install -g @graphprotocol/graph-cli`

Once the Graph CLI is installed, proceed to run the following command on your terminal

```
graph init --from-contract 0x27cC171B16FdD2224E1f93eD7DccFcc6790cA4BF
```

Here are the snippets of what you will see after running the command

Diagrams

Select your network

![](https://i.imgur.com/ePpDr6u.png)

Choose the product to initialize

![](https://i.imgur.com/DTjXP2R.png)

Provide your subgraph name

![](https://i.imgur.com/H5LS6A1.png)

Pick the directory
![](https://i.imgur.com/XT7bZmU.png)

Choose your network
![](https://i.imgur.com/zVrxeGN.png)

Name your first contract i.e the first ERC721 contract

![](https://i.imgur.com/zyC5sEv.png)

Wait fot your subgraph scaffold 

![](https://i.imgur.com/H1aJAuX.png)

Notice you are asked if you want to add another datasource i.e contract Select yes and continue with the contract address


![](https://i.imgur.com/a49Kr0e.png)

It will ask if you want to provide a local ABI path, in this case, we want it to generate from etherscan so we select **NO** 


![](https://i.imgur.com/8mpvVu7.png)

At this point since we don’t have any more contracts to work with, our subgraphs are created and we can go ahead to start defining our schemas and subgraph.yaml.  Navigate to the project and optionally you can create a file called `templatefile.md`

`touch templatefile.md`

The templatefile.md is just a file created to take notes for documentation and organization purposes. 

Put in the notes information such as the contract name, address, open sea link, schema and whatever information that you think is useful for you. In the schema of thia tutorial we are tracking information about the two collections alongside their collectibles.

Here’s how the templatefile.md looks like

``` 
Collection Name 1- Starlink PixelNauts
OpenSea: https://opensea.io/collection/starlink-pixelnauts
Contract Address - 0x27cC171B16FdD2224E1f93eD7DccFcc6790cA4BF
 
Collection Name 2 - Party Degenerates
OpenSea: https://opensea.io/collection/partydegenerates
Contract Address - 0x4BE3223f8708Ca6b30D1E8b8926cF281EC83E770
 
Schema -
 

type Account @entity {
 id: ID!
 address: Bytes!
}
 
type Collection @entity {
 id: ID!
 name: String
 symbol: String
 address: Bytes!
}

type Collectible @entity {
  id: ID!
  tokenId: BigInt!
  creator: Account!
  owner: Account!
  collection: Collection!
  descriptorUri: String!
  created: BigInt!
  modified: BigInt!
}

type Ownership @entity {
 id: ID!
 previousOwner: Bytes! # address
 newOwner: Bytes! # address
}
``` 
 
 
Now that we have a bit of organization and context, let’s go over to the files we have to work with. You will notice that graph init command created the folders as illustrated below for you.

![](https://i.imgur.com/xCMbcWl.png)



Firstly, you need to confirm that your generated contract abis are correct. So go to etherscan and search for the contract’s abi. This is what you will find



You should check that the abi code generated matches with the one on etherscan, if different, replace the abi code generated with the one on etherscan. 


![](https://i.imgur.com/qIpLfWx.png)


Head over to your subgraph.yaml file . Firstly, we can see that the two datasources were added 
Review the subgraph.yaml to adjust necessary changes for example notice that for the second contract, the entities are a bit wrongly renamed so that has to be corrected. 

![](https://i.imgur.com/7s9b43x.png)


PartyApproval is the wrong entity, the right one should be Approval as defined in the contract abi. That applies to the rest of the entities beneath. Also the abi event handler should get matched properly. E.g handlePartyApproval can be renamed to handleApproval. This might not be the case all the time but it’s also good to double check these values. Another thing missing is our startBlock. You should get the startBlock and add it under the source keyword.

# Writing your schema
Now that your subgraph.yaml is completed. Head over to your schema.graphql, this is where our templatefile.md comes in handy, so we just go there to pick the schema which we defined, copy and paste into the schema.graphql. We can then proceed to run the command below

graph codegen 

Here is an image of what you get after


![](https://i.imgur.com/hQQtBIJ.png)



# Writing your mappings.ts, using helpers for code organization

The next place we go to now is our source files src files to fix our mapping files. We already have two files code generated for us that we need to edit. These two files are serving as our mapping files.

![](https://i.imgur.com/iOcQ7xC.png)


Let’s start with starlink.ts. We want to deal with only an event handlert, which is the handleTransfer event. You can delete the remaining generated events handlers. Also replace the ExampleEntity with the Entities you defined in your schema i.e Account, Collection and Ownership. We will be writing the handleTransfer function in a bit, within the handleTransfer function, we would need 3 functions which are: getOrCreateAccount, getOrCreateCollection and getOrCreateCollectible. The functions are set up as follows.


```solidity
export function getOrCreateAccount(address: Address): Account {
  let accountAddress = address.toHexString();
  let account = Account.load(accountAddress);

  if (account == null) {
    account = new Account(accountAddress);
    account.address = address;
    account.save();
  }

  return account as Account;
}

export function getOrCreateCollection(address: Address): Collection {
  let collectionId = address.toHexString();
  let collection = Collection.load(collectionId);
  if (!collection) {
    collection = new Collection(collectionId);
    collection.address = address;

    let contract = Starlink.bind(address);
    let nameResult = contract.try_name();
    if (!nameResult.reverted) {
      collection.name = nameResult.value;
    }

    let symbolResult = contract.try_symbol();
    if (!symbolResult.reverted) {
      collection.symbol = symbolResult.value;
    }
    collection.save();
  }
  return collection;
}

export function getOrCreateCollectible(
  collectionAddress: Bytes,
  collectionId: string,
  tokenId: BigInt,
  creatorId: string,
  createdTimestamp: BigInt
): Collectible {
  let collectibleId = collectionAddress
    .toHexString()
    .concat("-")
    .concat(tokenId.toHexString());
  let collectible = Collectible.load(collectibleId);
  if (!collectible) {
    collectible = new Collectible(collectibleId);
    collectible.tokenId = tokenId;
    collectible.collection = collectionId;
    collectible.creator = creatorId;
    collectible.owner = creatorId;
    collectible.created = createdTimestamp;
    collectible.descriptorUri = Starlink.bind(
      Address.fromBytes(collectionAddress)
    ).tokenURI(tokenId);
    collectible.save();
  }
  return collectible;
}
```

They would be called in the `handleTransfer` function this way:

```solidity
export function handleTransfer(event: Transfer): void {
  let collection = getOrCreateCollection(event.address);
  let receiver = getOrCreateAccount(event.params.to);
  if (
    event.params.from ==
    Address.fromString(
      "0x000000000000000000000000c8a6f408146260e6cc8e5e9919f4ca211d277400"
    )
  ) {
    // GET COLLECTIBLES OR CREATE ONE IF NON EXISTENT
    getOrCreateCollectible(
      collection.address,
      collection.id,
      event.params.tokenId,
      receiver.id,
      event.block.timestamp
    );
  } else {
    let collectibleId = collection.address
      .toHexString()
      .concat("-")
      .concat(event.params.tokenId.toHexString());
    let collectible = Collectible.load(collectibleId);
    if (collectible) {
      if (
        event.params.to ==
        Address.fromString("0x0000000000000000000000000000000000000000")
      ) {
        let sender = getOrCreateAccount(event.params.from);
        collectible.owner = sender.id;
        collectible.created = event.block.timestamp;
      } else {
        let sender = getOrCreateAccount(event.params.from);
        collectible.owner = sender.id;
        collectible.modified = event.block.timestamp;
      }
      collectible.save();
    }
  }
}
```

> Note: your `from` address is gotten from the `topic hash` of your contract in the `Transfer` event

You should repeat the same process for the second NFT collection.

It is always good to keep your code neat hence the need for our helper folder. So, create a helper folder and a helper file for each collection and move getOrCreateAccount, getOrCreateCollection and getOrCreateCollectible. Your folder structure in the end  can look like this.

![](https://i.imgur.com/AW1xMjU.png)



# Deploying your subgraph
Go back to your created subgraph on hosted service , under deploy, click on show commands to run the commands needed for deployment.

![](https://i.imgur.com/q50SUDP.png)

![](https://i.imgur.com/U2FRjNT.png)

Run the command for authorization, your access token is in your dashboard

`graph auth --product hosted-service <ACCESS_TOKEN>.`

If successful, you will see the image below

![](https://i.imgur.com/lWatSxc.png)


Now go on to run the command for deployment

`graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>`

After successful deployment, here is what you see

![](https://i.imgur.com/m85I5w1.png)

Congratulations, you have just deployed your subgraph and waiting till it gets synced. 

You can also go ahead to your subgraph endpoints and run this query

```
 {
  
  collections(first: 2) {
    id
    name
    symbol
    address
  }
}
```
You should get the result of the two NFT collections

![](https://i.imgur.com/jK9gpBH.png)

To get the first 3 collectibles under Starlink PixelNauts, you can run this query

```
 {
  collections(first: 1) {
    id
    name
    symbol
    address
    collectibles(first: 3){
      id
      tokenId
    }
  }
}
```

You should get the result of the first three collectibles under Starlink PixelNauts like this

![](https://i.imgur.com/z6fXsP2.png)

Here's the github link to this [subgraph](https://github.com/amoweolubusayo/duo-nft-subgraph)

**Push your project to Radicle**

If you are new to radicle, run the following command to create a profile and identity

`rad auth`

![](https://i.imgur.com/UPspEmv.png)

***-please skip this process if you already have an identity***

Initialize your project by running 

`rad init`

Provide the name, description and the default branch of your project

![](https://i.imgur.com/0KwwJw2.png)


Publish your project and select a seed node by running

`rad push `

![](https://i.imgur.com/JusO6nq.png)


This project is available here at 

**Radicle**

https://app.radicle.network/seeds/maple.radicle.garden/rad:git:hnrkpyw8j3e8es4k9k9ddcfp3ophfkgzx6t5y

**Github**

https://github.com/amoweolubusayo/duo-nft-subgraph![](https://i.imgur.com/W0LjLM1.png)
