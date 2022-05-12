package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/mohammadreza-torkaman/nameservice/testutil/keeper"
	"github.com/mohammadreza-torkaman/nameservice/x/nameservice/keeper"
	"github.com/mohammadreza-torkaman/nameservice/x/nameservice/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NameserviceKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
