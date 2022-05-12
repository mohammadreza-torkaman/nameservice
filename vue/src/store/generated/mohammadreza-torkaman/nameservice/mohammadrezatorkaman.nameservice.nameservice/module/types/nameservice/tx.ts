/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "mohammadrezatorkaman.nameservice.nameservice";

export interface MsgBuyName {
  creator: string;
  name: string;
  bid: string;
}

export interface MsgBuyNameResponse {}

export interface MsgSetNameValue {
  creator: string;
  name: string;
  value: string;
}

export interface MsgSetNameValueResponse {}

const baseMsgBuyName: object = { creator: "", name: "", bid: "" };

export const MsgBuyName = {
  encode(message: MsgBuyName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bid !== "") {
      writer.uint32(26).string(message.bid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyName } as MsgBuyName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.bid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyName {
    const message = { ...baseMsgBuyName } as MsgBuyName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = String(object.bid);
    } else {
      message.bid = "";
    }
    return message;
  },

  toJSON(message: MsgBuyName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.bid !== undefined && (obj.bid = message.bid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyName>): MsgBuyName {
    const message = { ...baseMsgBuyName } as MsgBuyName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = object.bid;
    } else {
      message.bid = "";
    }
    return message;
  },
};

const baseMsgBuyNameResponse: object = {};

export const MsgBuyNameResponse = {
  encode(_: MsgBuyNameResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyNameResponse } as MsgBuyNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyNameResponse {
    const message = { ...baseMsgBuyNameResponse } as MsgBuyNameResponse;
    return message;
  },

  toJSON(_: MsgBuyNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyNameResponse>): MsgBuyNameResponse {
    const message = { ...baseMsgBuyNameResponse } as MsgBuyNameResponse;
    return message;
  },
};

const baseMsgSetNameValue: object = { creator: "", name: "", value: "" };

export const MsgSetNameValue = {
  encode(message: MsgSetNameValue, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetNameValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetNameValue } as MsgSetNameValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetNameValue {
    const message = { ...baseMsgSetNameValue } as MsgSetNameValue;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgSetNameValue): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetNameValue>): MsgSetNameValue {
    const message = { ...baseMsgSetNameValue } as MsgSetNameValue;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgSetNameValueResponse: object = {};

export const MsgSetNameValueResponse = {
  encode(_: MsgSetNameValueResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetNameValueResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetNameValueResponse,
    } as MsgSetNameValueResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetNameValueResponse {
    const message = {
      ...baseMsgSetNameValueResponse,
    } as MsgSetNameValueResponse;
    return message;
  },

  toJSON(_: MsgSetNameValueResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetNameValueResponse>
  ): MsgSetNameValueResponse {
    const message = {
      ...baseMsgSetNameValueResponse,
    } as MsgSetNameValueResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetNameValue(request: MsgSetNameValue): Promise<MsgSetNameValueResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse> {
    const data = MsgBuyName.encode(request).finish();
    const promise = this.rpc.request(
      "mohammadrezatorkaman.nameservice.nameservice.Msg",
      "BuyName",
      data
    );
    return promise.then((data) => MsgBuyNameResponse.decode(new Reader(data)));
  }

  SetNameValue(request: MsgSetNameValue): Promise<MsgSetNameValueResponse> {
    const data = MsgSetNameValue.encode(request).finish();
    const promise = this.rpc.request(
      "mohammadrezatorkaman.nameservice.nameservice.Msg",
      "SetNameValue",
      data
    );
    return promise.then((data) =>
      MsgSetNameValueResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
