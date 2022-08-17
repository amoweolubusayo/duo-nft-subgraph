// import { newMockEvent } from "matchstick-as"
// import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
// import {
//   Approval,
//   ApprovalForAll,
//   BaseURIUpdated,
//   ExtensionUpdated,
//   OwnershipTransferred,
//   Revealed,
//   Transfer,
//   Unrevealed
// } from "../generated/Starlink/Starlink"

// export function createApprovalEvent(
//   owner: Address,
//   approved: Address,
//   tokenId: BigInt
// ): Approval {
//   let approvalEvent = changetype<Approval>(newMockEvent())

//   approvalEvent.parameters = new Array()

//   approvalEvent.parameters.push(
//     new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
//   )
//   approvalEvent.parameters.push(
//     new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
//   )
//   approvalEvent.parameters.push(
//     new ethereum.EventParam(
//       "tokenId",
//       ethereum.Value.fromUnsignedBigInt(tokenId)
//     )
//   )

//   return approvalEvent
// }

// export function createApprovalForAllEvent(
//   owner: Address,
//   operator: Address,
//   approved: boolean
// ): ApprovalForAll {
//   let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

//   approvalForAllEvent.parameters = new Array()

//   approvalForAllEvent.parameters.push(
//     new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
//   )
//   approvalForAllEvent.parameters.push(
//     new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
//   )
//   approvalForAllEvent.parameters.push(
//     new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
//   )

//   return approvalForAllEvent
// }

// export function createBaseURIUpdatedEvent(_newBaseURI: string): BaseURIUpdated {
//   let baseUriUpdatedEvent = changetype<BaseURIUpdated>(newMockEvent())

//   baseUriUpdatedEvent.parameters = new Array()

//   baseUriUpdatedEvent.parameters.push(
//     new ethereum.EventParam(
//       "_newBaseURI",
//       ethereum.Value.fromString(_newBaseURI)
//     )
//   )

//   return baseUriUpdatedEvent
// }

// export function createExtensionUpdatedEvent(
//   _newExtension: string
// ): ExtensionUpdated {
//   let extensionUpdatedEvent = changetype<ExtensionUpdated>(newMockEvent())

//   extensionUpdatedEvent.parameters = new Array()

//   extensionUpdatedEvent.parameters.push(
//     new ethereum.EventParam(
//       "_newExtension",
//       ethereum.Value.fromString(_newExtension)
//     )
//   )

//   return extensionUpdatedEvent
// }

// export function createOwnershipTransferredEvent(
//   previousOwner: Address,
//   newOwner: Address
// ): OwnershipTransferred {
//   let ownershipTransferredEvent = changetype<OwnershipTransferred>(
//     newMockEvent()
//   )

//   ownershipTransferredEvent.parameters = new Array()

//   ownershipTransferredEvent.parameters.push(
//     new ethereum.EventParam(
//       "previousOwner",
//       ethereum.Value.fromAddress(previousOwner)
//     )
//   )
//   ownershipTransferredEvent.parameters.push(
//     new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
//   )

//   return ownershipTransferredEvent
// }

// export function createRevealedEvent(_revealedURI: string): Revealed {
//   let revealedEvent = changetype<Revealed>(newMockEvent())

//   revealedEvent.parameters = new Array()

//   revealedEvent.parameters.push(
//     new ethereum.EventParam(
//       "_revealedURI",
//       ethereum.Value.fromString(_revealedURI)
//     )
//   )

//   return revealedEvent
// }

// export function createTransferEvent(
//   from: Address,
//   to: Address,
//   tokenId: BigInt
// ): Transfer {
//   let transferEvent = changetype<Transfer>(newMockEvent())

//   transferEvent.parameters = new Array()

//   transferEvent.parameters.push(
//     new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
//   )
//   transferEvent.parameters.push(
//     new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
//   )
//   transferEvent.parameters.push(
//     new ethereum.EventParam(
//       "tokenId",
//       ethereum.Value.fromUnsignedBigInt(tokenId)
//     )
//   )

//   return transferEvent
// }

// export function createUnrevealedEvent(): Unrevealed {
//   let unrevealedEvent = changetype<Unrevealed>(newMockEvent())

//   unrevealedEvent.parameters = new Array()

//   return unrevealedEvent
// }
