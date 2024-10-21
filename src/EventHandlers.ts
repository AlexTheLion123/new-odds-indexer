/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  // Core,
  Core_OddsChanged,
  FreeBet,
  FreeBet_NewBet,
  PrematchCore,
  PrematchCore_OddsChanged,
} from "generated";

// Core.OddsChanged.handler(async ({ event, context }) => {
//   const entity: Core_OddsChanged = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     conditionId: event.params.conditionId,
//     newOdds: event.params.newOdds,
//   };

//   context.Core_OddsChanged.set(entity);
// });

// FreeBet.NewBet.handler(async ({ event, context }) => {
//   const entity: any = {
//     id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
//     freeBetId: event.params.freeBetId,
//     core: event.params.core,
//     bettor: event.params.bettor,
//     azuroBetId: event.params.azuroBetId,
//     amount: event.params.amount,
//     minOdds: event.params.minOdds,
//     expiresAt: event.params.expiresAt,
//     blockNumber: event.block.number || 0n,
//     blockTimestasmp: event.block.timestamp || 0n,
//   };

//   context.FreeBet_NewBet.set(entity);
// });

PrematchCore.OddsChanged.handler(async ({ event, context }) => {
  const entity: PrematchCore_OddsChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    conditionId: event.params.conditionId,
    newOdds: event.params.newOdds,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
  }; 

  context.PrematchCore_OddsChanged.set(entity);
});
