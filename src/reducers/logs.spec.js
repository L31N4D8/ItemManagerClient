import logs from "./logs"
import {
    LOGS_FETCHED
} from "../constants"

describe("logs reducer", () => {
    it(`should return logs on LOGS_FETCHED`, () => expect(logs(null, { type: LOGS_FETCHED, logs: [1,2,3]})).to.eql([1,2,3]))
})