package keeper

import (
	"github.com/mohammadreza-torkaman/nameservice/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
