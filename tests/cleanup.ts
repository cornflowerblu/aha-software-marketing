import { getTestPayload, cleanupTestData } from "./helpers";

const payload = await getTestPayload();
await cleanupTestData(payload);
console.log("Test data cleaned up");
process.exit(0);
