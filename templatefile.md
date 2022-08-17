Collection Name 1- Starlink PixelNauts
OpenSea: https://opensea.io/collection/starlink-pixelnauts
Contract Address - 0x27cC171B16FdD2224E1f93eD7DccFcc6790cA4BF

Collection Name 2 - Party Degenerates
OpenSea: https://opensea.io/collection/partydegenerates
Contract Address - 0x4BE3223f8708Ca6b30D1E8b8926cF281EC83E770

Schema -

```
type Account @entity {
 id: ID!
 address: Bytes!
 collectibles: [Collectible!] @derivedFrom(field: "owner")
}

type Collectible @entity {
 id: ID!
 tokenId: BigInt!
 creator: Account!
 owner: Account!
 collection: Collection!
 descriptorUri: String!

 #Timestamps
 modified: BigInt
 created: BigInt!
 removed: BigInt

 #metadata
 name: String
 description: String
 imageURL: String
}

type Collection @entity {
 id: ID!
 name: String
 symbol: String
 address: Bytes!
 collectibles: [Collectible!] @derivedFrom(field: "collection")
}

```
