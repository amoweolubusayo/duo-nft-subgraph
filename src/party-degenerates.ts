import { Address } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/Party/Party";
import { Collectible } from "../generated/schema";
import {
  getOrCreateAccount,
  getOrCreateCollectible,
  getOrCreateCollection,
} from "./helper/party-helper";

export function handleTransfer(event: Transfer): void {
  let collection = getOrCreateCollection(event.address);
  let receiver = getOrCreateAccount(event.params.to);
  if (
    event.params.from ==
    Address.fromString("0xaa7dad6b93f50629f3938294f46aba53e6993dc3")
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
