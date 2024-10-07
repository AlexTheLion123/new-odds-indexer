import assert from "assert";
import { 
  TestHelpers,
  Core_OddsChanged
} from "generated";
const { MockDb, Core } = TestHelpers;

describe("Core contract OddsChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Core contract OddsChanged event
  const event = Core.OddsChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Core_OddsChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Core.OddsChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualCoreOddsChanged = mockDbUpdated.entities.Core_OddsChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedCoreOddsChanged: Core_OddsChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      conditionId: event.params.conditionId,
      newOdds: event.params.newOdds,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualCoreOddsChanged, expectedCoreOddsChanged, "Actual CoreOddsChanged should be the same as the expectedCoreOddsChanged");
  });
});
