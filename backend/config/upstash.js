import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";

// create a ratelimiter that allows 10 requests per 20s
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limmiter: Ratelimit.slidingWindow(10,"20 s"),
});

export default rateLimit;