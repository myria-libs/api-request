"use strict";
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              var desc = Object.getOwnPropertyDescriptor(m, k);
              if (
                  !desc ||
                  ("get" in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k];
                      },
                  };
              }
              Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, "default", {
                  enumerable: true,
                  value: v,
              });
          }
        : function (o, v) {
              o["default"] = v;
          });
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (
                    k !== "default" &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfig = exports.ENVIRONMENT = void 0;
const dotenv = __importStar(require("dotenv"));
const dotenvExpand = __importStar(require("dotenv-expand"));
const config = dotenv.config();
dotenvExpand.expand(config);
var ENVIRONMENT;
(function (ENVIRONMENT) {
    ENVIRONMENT["DEVELOPMENT"] = "development";
    ENVIRONMENT["PRODUCTION"] = "production";
    ENVIRONMENT["LOCAL"] = "local";
})(ENVIRONMENT || (exports.ENVIRONMENT = ENVIRONMENT = {}));
class EnvConfig {
    int(value, number) {
        return value
            ? Number.isNaN(Number.parseInt(value))
                ? number
                : Number.parseInt(value)
            : number;
    }
    bool(value, boolean) {
        return value === null || value === undefined
            ? boolean
            : value === "true";
    }
    get env() {
        return process.env.NODE_ENV || "local";
    }
    get clientApiKey() {
        return process.env.API_KEY || "";
    }
    get developerApiKey() {
        return process.env.DEVELOPER_API_KEY || "";
    }
    get adminApiKey() {
        return process.env.ADMIN_API_KEY || "";
    }
    get userAccessToken() {
        return process.env.USER_ACCESS_TOKEN || "";
    }
    get leaderboardUrl() {
        return process.env.LEADERBOARD_URL || "";
    }
}
exports.EnvConfig = EnvConfig;
//# sourceMappingURL=env.config.js.map
