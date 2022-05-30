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
var db_service_1 = require("./server/db.service");
var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var port = 3000;
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname + '/dist/best-coworker')));
(0, db_service_1.connectToDatabase)().then(function () {
    app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("HOME ROUTE");
            res.sendFile(path.join(__dirname, '..', '/dist/best-coworker/index.html'));
            return [2 /*return*/];
        });
    }); });
    app.get('/allPersons', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_service_1.getAllPersons)()];
                case 1:
                    result = _a.sent();
                    res.send(result);
                    return [2 /*return*/];
            }
        });
    }); });
    app.get('/allVoteStats', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_service_1.getAllVoteStats)()];
                case 1:
                    result = _a.sent();
                    res.send(result);
                    return [2 /*return*/];
            }
        });
    }); });
    app.post('/newPerson', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var checkForExisting;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_service_1.getOnePerson)(req.body.name)];
                case 1:
                    checkForExisting = _a.sent();
                    if (!(checkForExisting === null || checkForExisting === void 0 ? void 0 : checkForExisting.length)) {
                        (0, db_service_1.postNewPerson)({ name: req.body.name, votes: {} });
                        res.send({ successful: true });
                    }
                    else {
                        res.send({ successful: false });
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); });
    app.post('/newVoteStat', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var checkForExisting;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_service_1.getOneVoteStat)(req.body.name)];
                case 1:
                    checkForExisting = _a.sent();
                    if (!(checkForExisting === null || checkForExisting === void 0 ? void 0 : checkForExisting.length)) {
                        (0, db_service_1.postNewVoteStat)({ name: req.body.name, date: new Date() });
                        res.send({ successful: true });
                    }
                    else {
                        res.send({ successful: false });
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    }); });
    app.post('/addVote', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_service_1.postAddVote)(req.body.personName, req.body.voteOptionName)];
                case 1:
                    _a.sent();
                    res.send({ successful: true });
                    return [2 /*return*/];
            }
        });
    }); });
    app.listen(port, function () {
        console.warn('Listening on port ', port);
    });
});
