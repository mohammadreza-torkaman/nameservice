package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mohammadreza-torkaman/nameservice/x/nameservice/types"
)

func (k msgServer) SetNameValue(goCtx context.Context, msg *types.MsgSetNameValue) (*types.MsgSetNameValueResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// Try getting name information from the store
	whois, _ := k.GetWhois(ctx, msg.Name)
	// If the message sender address doesn't match the name owner, throw an error
	if !(msg.Creator == whois.Owner) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Incorrect Owner")
	}
	// Otherwise, create an updated whois record
	newWhois := types.Whois{
		Index: msg.Name,
		Name:  msg.Name,
		Value: msg.Value,
		Owner: whois.Owner,
		Price: whois.Price,
	}
	// Write whois information to the store
	k.SetWhois(ctx, newWhois)
	return &types.MsgSetNameValueResponse{}, nil
}
