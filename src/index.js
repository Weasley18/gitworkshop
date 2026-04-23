import { greet } from "./greet.js";
import { config } from "./config.js";

console.log(greet("Workshop"));
console.log(`${config.appName} v${config.version}`);
