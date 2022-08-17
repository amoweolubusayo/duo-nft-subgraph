// import { newMockEvent } from "matchstick-as"
// import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
// import {
//   PartyApproval,
//   PartyApprovalForAll,
//   PartyOwnershipTransferred,
//   PublicSalePaused,
//   PublicSaleStart,
//   PartyTransfer
// } from "../generated/Party/Party"

// export function createPartyApprovalEvent(
//   owner: Address,
//   approved: Address,
//   tokenId: BigInt
// ): PartyApproval {
//   let partyApprovalEvent = changetype<PartyApproval>(newMockEvent())

//   partyApprovalEvent.parameters = new Array()

//   partyApprovalEvent.parameters.push(
//     new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
//   )
//   partyApprovalEvent.parameters.push(
//     new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
//   )
//   partyApprovalEvent.parameters.push(
//     new ethereum.EventParam(
//       "tokenId",
//       ethereum.Value.fromUnsignedBigInt(tokenId)
//     )
//   )

//   return partyApprovalEvent
// }

// export function createPartyApprovalForAllEvent(
//   owner: Address,
//   operator: Address,
//   approved: boolean
// ): PartyApprovalForAll {
//   let partyApprovalForAllEvent = changetype<PartyApprovalForAll>(newMockEvent())

//   partyApprovalForAllEvent.parameters = new Array()

//   partyApprovalForAllEvent.parameters.push(
//     new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
//   )
//   partyApprovalForAllEvent.parameters.push(
//     new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
//   )
//   partyApprovalForAllEvent.parameters.push(
//     new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
//   )

//   return partyApprovalForAllEvent
// }

// export function createPartyOwnershipTransferredEvent(
//   previousOwner: Address,
//   newOwner: Address
// ): PartyOwnershipTransferred {
//   let partyOwnershipTransferredEvent = changetype<PartyOwnershipTransferred>(
//     newMockEvent()
//   )

//   partyOwnershipTransferredEvent.parameters = new Array()

//   partyOwnershipTransferredEvent.parameters.push(
//     new ethereum.EventParam(
//       "previousOwner",
//       ethereum.Value.fromAddress(previousOwner)
//     )
//   )
//   partyOwnershipTransferredEvent.parameters.push(
//     new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
//   )

//   return partyOwnershipTransferredEvent
// }

// export function createPublicSalePausedEvent(
//   _currentPrice: BigInt,
//   _timeElapsed: BigInt
// ): PublicSalePaused {
//   let publicSalePausedEvent = changetype<PublicSalePaused>(newMockEvent())

//   publicSalePausedEvent.parameters = new Array()

//   publicSalePausedEvent.parameters.push(
//     new ethereum.EventParam(
//       "_currentPrice",
//       ethereum.Value.fromUnsignedBigInt(_currentPrice)
//     )
//   )
//   publicSalePausedEvent.parameters.push(
//     new ethereum.EventParam(
//       "_timeElapsed",
//       ethereum.Value.fromUnsignedBigInt(_timeElapsed)
//     )
//   )

//   return publicSalePausedEvent
// }

// export function createPublicSaleStartEvent(
//   _saleDuration: BigInt,
//   _saleStartTime: BigInt
// ): PublicSaleStart {
//   let publicSaleStartEvent = changetype<PublicSaleStart>(newMockEvent())

//   publicSaleStartEvent.parameters = new Array()

//   publicSaleStartEvent.parameters.push(
//     new ethereum.EventParam(
//       "_saleDuration",
//       ethereum.Value.fromUnsignedBigInt(_saleDuration)
//     )
//   )
//   publicSaleStartEvent.parameters.push(
//     new ethereum.EventParam(
//       "_saleStartTime",
//       ethereum.Value.fromUnsignedBigInt(_saleStartTime)
//     )
//   )

//   return publicSaleStartEvent
// }

// export function createPartyTransferEvent(
//   from: Address,
//   to: Address,
//   tokenId: BigInt
// ): PartyTransfer {
//   let partyTransferEvent = changetype<PartyTransfer>(newMockEvent())

//   partyTransferEvent.parameters = new Array()

//   partyTransferEvent.parameters.push(
//     new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
//   )
//   partyTransferEvent.parameters.push(
//     new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
//   )
//   partyTransferEvent.parameters.push(
//     new ethereum.EventParam(
//       "tokenId",
//       ethereum.Value.fromUnsignedBigInt(tokenId)
//     )
//   )

//   return partyTransferEvent
// }
