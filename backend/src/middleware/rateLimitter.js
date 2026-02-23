import rateLimit from "../config/upstash"

const rateLimiter = async (req,res,next)=>{
try{
    const {success} = await rateLimit.Limit("my-Limit-Key")
}
}

export default rateLimiter;