var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  c: () => clientPromise$1
});
module.exports = __toCommonJS(stdin_exports);
var import_dotenv = __toESM(require("dotenv"));
var import_mongodb = require("mongodb");
import_dotenv.default.config();
const uri = process.env["MONGO_URI"];
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
let client;
let clientPromise;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}
if (process.env["NODE_ENV"] === "development") {
  if (!global._mongoClientPromise) {
    client = new import_mongodb.MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new import_mongodb.MongoClient(uri, options);
  clientPromise = client.connect();
}
var clientPromise$1 = clientPromise;
