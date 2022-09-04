import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/Starlink/Starlink";
import { Collectible } from "../generated/schema";
import {
  getOrCreateAccount,
  getOrCreateCollectible,
  getOrCreateCollection,
} from "./helper/starlink-helper";

export function handleTransfer(event: Transfer): void {
  let collection = getOrCreateCollection(event.address);
  let receiver = getOrCreateAccount(event.params.to);
  if (
    event.params.from ==
    Address.fromString("0x915164ca3621c13be63450f9ec60c5813a790dda")
  ) {
    // THIS IS A MINT
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
        Address.fromString("0xb966dd516fd37b0bf5cb4931450671b92c962007")
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
