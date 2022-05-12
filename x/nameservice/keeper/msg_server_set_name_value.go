package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mohammadreza-torkaman/nameservice/x/nameservice/types"
)

func (k msgServer) SetNameValue(goCtx context.Context, msg *types.MsgSetNameValue) (*types.MsgSetNameValueResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSetNameValueResponse{}, nil
}
