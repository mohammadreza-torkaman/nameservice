package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetNameValue = "set_name_value"

var _ sdk.Msg = &MsgSetNameValue{}

func NewMsgSetNameValue(creator string, name string, value string) *MsgSetNameValue {
	return &MsgSetNameValue{
		Creator: creator,
		Name:    name,
		Value:   value,
	}
}

func (msg *MsgSetNameValue) Route() string {
	return RouterKey
}

func (msg *MsgSetNameValue) Type() string {
	return TypeMsgSetNameValue
}

func (msg *MsgSetNameValue) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetNameValue) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetNameValue) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
