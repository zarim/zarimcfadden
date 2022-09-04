var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  get: () => get,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_db_502d9f66 = require("../../../chunks/db-502d9f66.js");
var import_mongodb = require("mongodb");
var import_dotenv = require("dotenv");
async function get() {
  try {
    const dbConnection = await import_db_502d9f66.c;
    const db = dbConnection.db("test").collection("educations");
    const educationItems = await db.find().toArray();
    if (!educationItems) {
      throw new Error("No education items.");
    }
    return {
      status: 200,
      body: {
        educationItems
      }
    };
  } catch (error) {
    return {
      status: 400,
      body: {
        message: error.message
      }
    };
  }
}
async function post(request) {
  try {
    const dbConnection = await import_db_502d9f66.c;
    const db = dbConnection.db("test").collection("educations");
    const educationItem = JSON.parse(request.body);
    await db.insertOne(educationItem);
    if (!educationItem) {
      throw new Error("There was an error awaiting the transaction.");
    }
    return {
      status: 200,
      body: {
        status: "Success"
      }
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        message: error.message
      }
    };
  }
}
