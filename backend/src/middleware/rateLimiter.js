import rateLimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try{
        const {success} = await rateLimit.limit("my-limit-key");
        if (!success) {
            return res.status(429).json({ error: "Too many requests. Try again later." });
        }
        next();
    } catch (error) {
        console.error("Rate limit error:", error);
        next();
    }
}

export default rateLimiter;