import { greet } from "./greet.js";
import { config } from "./config.js";
import { buildId } from "./metrics.js";

console.log(greet("Workshop"));
console.log(`${config.appName} v${config.version} [${config.environment}]`);
console.log("build", buildId);
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");  