// import {
//   assert,
//   describe,
//   test,
//   clearStore,
//   beforeAll,
//   afterAll
// } from "matchstick-as/assembly/index"
// import { Address, BigInt } from "@graphprotocol/graph-ts"
// import { PartyApproval } from "../generated/schema"
// import { PartyApproval as PartyApprovalEvent } from "../generated/Party/Party"
// import { handlePartyApproval } from "../src/party"
// import { createPartyApprovalEvent } from "./party-utils"

// // Tests structure (matchstick-as >=0.5.0)
// // https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

// describe("Describe entity assertions", () => {
//   beforeAll(() => {
//     let owner = Address.fromString("0x0000000000000000000000000000000000000001")
//     let approved = Address.fromString(
//       "0x0000000000000000000000000000000000000001"
//     )
//     let tokenId = BigInt.fromI32(234)
//     let newPartyApprovalEvent = createPartyApprovalEvent(
//       owner,
//       approved,
//       tokenId
//     )
//     handlePartyApproval(newPartyApprovalEvent)
//   })

//   afterAll(() => {
//     clearStore()
//   })

//   // For more test scenarios, see:
//   // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

//   test("PartyApproval created and stored", () => {
//     assert.entityCount("PartyApproval", 1)

//     // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
//     assert.fieldEquals(
//       "PartyApproval",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "owner",
//       "0x0000000000000000000000000000000000000001"
//     )
//     assert.fieldEquals(
//       "PartyApproval",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "approved",
//       "0x0000000000000000000000000000000000000001"
//     )
//     assert.fieldEquals(
//       "PartyApproval",
//       "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
//       "tokenId",
//       "234"
//     )

//     // More assert options:
//     // https://thegraph.com/docs/en/developer/matchstick/#asserts
//   })
// })
