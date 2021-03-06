"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.postNewVoteStat = exports.postNewPerson = exports.postAddVote = exports.getOneVoteStat = exports.getOnePerson = exports.getAllVoteStats = exports.getAllPersons = exports.connectToDatabase = exports.collections = void 0;
var mongoDB = require("mongodb");
var dotenv = require("dotenv");
exports.collections = {};
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var client, db, personsCollection, voteOptionsCollection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dotenv.config();
                    client = new mongoDB.MongoClient(process.env['MONGO_URI'] || '');
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    db = client.db(process.env['DB_NAME']);
                    personsCollection = db.collection('persons');
                    voteOptionsCollection = db.collection('voteOptions');
                    exports.collections.persons = personsCollection;
                    exports.collections.voteOptions = voteOptionsCollection;
                    console.warn('Connected to MongoDB');
                    return [2 /*return*/];
            }
        });
    });
}
exports.connectToDatabase = connectToDatabase;
;
function getAllPersons() {
    var _a;
    try {
        return (_a = exports.collections.persons) === null || _a === void 0 ? void 0 : _a.find({}).toArray();
    }
    catch (e) {
        console.warn(e);
        return;
    }
    ;
}
exports.getAllPersons = getAllPersons;
;
function getAllVoteStats() {
    var _a;
    try {
        return (_a = exports.collections.voteOptions) === null || _a === void 0 ? void 0 : _a.find({}).toArray();
    }
    catch (e) {
        console.warn(e);
        return;
    }
}
exports.getAllVoteStats = getAllVoteStats;
;
function getOnePerson(personName) {
    var _a;
    try {
        return (_a = exports.collections.persons) === null || _a === void 0 ? void 0 : _a.find({ name: { $regex: personName, $options: "i" } }).toArray();
    }
    catch (e) {
        console.warn(e);
        return;
    }
}
exports.getOnePerson = getOnePerson;
;
function getOneVoteStat(voteStatName) {
    var _a;
    try {
        return (_a = exports.collections.voteOptions) === null || _a === void 0 ? void 0 : _a.find({ name: { $regex: voteStatName, $options: "i" } }).toArray();
    }
    catch (e) {
        console.warn(e);
        return;
    }
}
exports.getOneVoteStat = getOneVoteStat;
;
function postAddVote(personName, voteOptionName) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var voteOptionNameConverted, result, person, currentVote, e_1;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    voteOptionNameConverted = voteOptionName.toLowerCase().replace(/\s+/g, '');
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ((_a = exports.collections.persons) === null || _a === void 0 ? void 0 : _a.find({ name: personName }).toArray())];
                case 2:
                    result = _d.sent();
                    if (result) {
                        person = result[0];
                        currentVote = person.votes[voteOptionNameConverted];
                        if (currentVote) {
                            currentVote++;
                        }
                        else if (!currentVote) {
                            currentVote = 1;
                        }
                        ;
                        return [2 /*return*/, (_b = exports.collections.persons) === null || _b === void 0 ? void 0 : _b.updateOne({ name: personName }, { $set: (_c = {}, _c['votes.' + voteOptionNameConverted] = currentVote, _c) })];
                    }
                    return [2 /*return*/];
                case 3:
                    e_1 = _d.sent();
                    console.warn(e_1);
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.postAddVote = postAddVote;
;
function postNewPerson(newPerson) {
    var _a;
    try {
        (_a = exports.collections.persons) === null || _a === void 0 ? void 0 : _a.insertOne(newPerson);
        return;
    }
    catch (e) {
        console.warn(e);
        return;
    }
}
exports.postNewPerson = postNewPerson;
;
function postNewVoteStat(newVoteStat) {
    var _a;
    try {
        (_a = exports.collections.voteOptions) === null || _a === void 0 ? void 0 : _a.insertOne(newVoteStat);
        return;
    }
    catch (e) {
        console.warn(e);
        return;
    }
}
exports.postNewVoteStat = postNewVoteStat;
;
