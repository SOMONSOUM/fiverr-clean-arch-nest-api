import * as moment from "moment-timezone";

export const currentTimestamp = () => moment().tz('Asia/Phnom_Penh').toDate()