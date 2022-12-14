// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PublicSalePaused extends ethereum.Event {
  get params(): PublicSalePaused__Params {
    return new PublicSalePaused__Params(this);
  }
}

export class PublicSalePaused__Params {
  _event: PublicSalePaused;

  constructor(event: PublicSalePaused) {
    this._event = event;
  }

  get _currentPrice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _timeElapsed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PublicSaleStart extends ethereum.Event {
  get params(): PublicSaleStart__Params {
    return new PublicSaleStart__Params(this);
  }
}

export class PublicSaleStart__Params {
  _event: PublicSaleStart;

  constructor(event: PublicSaleStart) {
    this._event = event;
  }

  get _saleDuration(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _saleStartTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Party extends ethereum.SmartContract {
  static bind(address: Address): Party {
    return new Party("Party", address);
  }

  DEGENERATES_END_PRICE(): BigInt {
    let result = super.call(
      "DEGENERATES_END_PRICE",
      "DEGENERATES_END_PRICE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DEGENERATES_END_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DEGENERATES_END_PRICE",
      "DEGENERATES_END_PRICE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_DEGENERATES_PER_TRANSACTION(): i32 {
    let result = super.call(
      "MAX_DEGENERATES_PER_TRANSACTION",
      "MAX_DEGENERATES_PER_TRANSACTION():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_MAX_DEGENERATES_PER_TRANSACTION(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "MAX_DEGENERATES_PER_TRANSACTION",
      "MAX_DEGENERATES_PER_TRANSACTION():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  MAX_DEGENERATES_TO_MINT(): i32 {
    let result = super.call(
      "MAX_DEGENERATES_TO_MINT",
      "MAX_DEGENERATES_TO_MINT():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_MAX_DEGENERATES_TO_MINT(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "MAX_DEGENERATES_TO_MINT",
      "MAX_DEGENERATES_TO_MINT():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  NUM_RESERVED_NFTS(): i32 {
    let result = super.call(
      "NUM_RESERVED_NFTS",
      "NUM_RESERVED_NFTS():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_NUM_RESERVED_NFTS(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "NUM_RESERVED_NFTS",
      "NUM_RESERVED_NFTS():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  degeneratesProvenance(): string {
    let result = super.call(
      "degeneratesProvenance",
      "degeneratesProvenance():(string)",
      []
    );

    return result[0].toString();
  }

  try_degeneratesProvenance(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "degeneratesProvenance",
      "degeneratesProvenance():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMintPrice(): BigInt {
    let result = super.call("getMintPrice", "getMintPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getMintPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getMintPrice", "getMintPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRemainingSaleTime(): BigInt {
    let result = super.call(
      "getRemainingSaleTime",
      "getRemainingSaleTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRemainingSaleTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRemainingSaleTime",
      "getRemainingSaleTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalMinted(): BigInt {
    let result = super.call("getTotalMinted", "getTotalMinted():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTotalMinted(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalMinted",
      "getTotalMinted():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  indexRightShift(): BigInt {
    let result = super.call(
      "indexRightShift",
      "indexRightShift():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_indexRightShift(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "indexRightShift",
      "indexRightShift():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  locked(): boolean {
    let result = super.call("locked", "locked():(bool)", []);

    return result[0].toBoolean();
  }

  try_locked(): ethereum.CallResult<boolean> {
    let result = super.tryCall("locked", "locked():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  numReservedDegeneratesMinted(): BigInt {
    let result = super.call(
      "numReservedDegeneratesMinted",
      "numReservedDegeneratesMinted():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_numReservedDegeneratesMinted(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numReservedDegeneratesMinted",
      "numReservedDegeneratesMinted():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  provenanceLocked(): boolean {
    let result = super.call(
      "provenanceLocked",
      "provenanceLocked():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_provenanceLocked(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "provenanceLocked",
      "provenanceLocked():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  publicSaleActive(): boolean {
    let result = super.call(
      "publicSaleActive",
      "publicSaleActive():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_publicSaleActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "publicSaleActive",
      "publicSaleActive():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  publicSaleDegenerateStartingPrice(): BigInt {
    let result = super.call(
      "publicSaleDegenerateStartingPrice",
      "publicSaleDegenerateStartingPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_publicSaleDegenerateStartingPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "publicSaleDegenerateStartingPrice",
      "publicSaleDegenerateStartingPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  publicSaleDuration(): BigInt {
    let result = super.call(
      "publicSaleDuration",
      "publicSaleDuration():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_publicSaleDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "publicSaleDuration",
      "publicSaleDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  publicSaleStartTime(): BigInt {
    let result = super.call(
      "publicSaleStartTime",
      "publicSaleStartTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_publicSaleStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "publicSaleStartTime",
      "publicSaleStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class LockContractCall extends ethereum.Call {
  get inputs(): LockContractCall__Inputs {
    return new LockContractCall__Inputs(this);
  }

  get outputs(): LockContractCall__Outputs {
    return new LockContractCall__Outputs(this);
  }
}

export class LockContractCall__Inputs {
  _call: LockContractCall;

  constructor(call: LockContractCall) {
    this._call = call;
  }
}

export class LockContractCall__Outputs {
  _call: LockContractCall;

  constructor(call: LockContractCall) {
    this._call = call;
  }
}

export class MintDegeneratesCall extends ethereum.Call {
  get inputs(): MintDegeneratesCall__Inputs {
    return new MintDegeneratesCall__Inputs(this);
  }

  get outputs(): MintDegeneratesCall__Outputs {
    return new MintDegeneratesCall__Outputs(this);
  }
}

export class MintDegeneratesCall__Inputs {
  _call: MintDegeneratesCall;

  constructor(call: MintDegeneratesCall) {
    this._call = call;
  }

  get numDegeneratesToMint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintDegeneratesCall__Outputs {
  _call: MintDegeneratesCall;

  constructor(call: MintDegeneratesCall) {
    this._call = call;
  }
}

export class PausePublicSaleCall extends ethereum.Call {
  get inputs(): PausePublicSaleCall__Inputs {
    return new PausePublicSaleCall__Inputs(this);
  }

  get outputs(): PausePublicSaleCall__Outputs {
    return new PausePublicSaleCall__Outputs(this);
  }
}

export class PausePublicSaleCall__Inputs {
  _call: PausePublicSaleCall;

  constructor(call: PausePublicSaleCall) {
    this._call = call;
  }
}

export class PausePublicSaleCall__Outputs {
  _call: PausePublicSaleCall;

  constructor(call: PausePublicSaleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ReserveCall extends ethereum.Call {
  get inputs(): ReserveCall__Inputs {
    return new ReserveCall__Inputs(this);
  }

  get outputs(): ReserveCall__Outputs {
    return new ReserveCall__Outputs(this);
  }
}

export class ReserveCall__Inputs {
  _call: ReserveCall;

  constructor(call: ReserveCall) {
    this._call = call;
  }

  get numDegeneratesToMint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReserveCall__Outputs {
  _call: ReserveCall;

  constructor(call: ReserveCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetProvenanceCall extends ethereum.Call {
  get inputs(): SetProvenanceCall__Inputs {
    return new SetProvenanceCall__Inputs(this);
  }

  get outputs(): SetProvenanceCall__Outputs {
    return new SetProvenanceCall__Outputs(this);
  }
}

export class SetProvenanceCall__Inputs {
  _call: SetProvenanceCall;

  constructor(call: SetProvenanceCall) {
    this._call = call;
  }

  get provenance(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetProvenanceCall__Outputs {
  _call: SetProvenanceCall;

  constructor(call: SetProvenanceCall) {
    this._call = call;
  }
}

export class StartPublicSaleCall extends ethereum.Call {
  get inputs(): StartPublicSaleCall__Inputs {
    return new StartPublicSaleCall__Inputs(this);
  }

  get outputs(): StartPublicSaleCall__Outputs {
    return new StartPublicSaleCall__Outputs(this);
  }
}

export class StartPublicSaleCall__Inputs {
  _call: StartPublicSaleCall;

  constructor(call: StartPublicSaleCall) {
    this._call = call;
  }

  get saleDuration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get saleStartPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StartPublicSaleCall__Outputs {
  _call: StartPublicSaleCall;

  constructor(call: StartPublicSaleCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
