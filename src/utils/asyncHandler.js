const asyncHandler = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}




export {asyncHandler}






/*  try catch code 


// const asyncHandler = () => {}
// const asyncHandler = (func) => ()=> {}
// const asyncHandler = (func) => async () => {}


const asyncHandler = (fn) => () => {req,res,next} => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}     // need to execute a higher orfer function for it to work.

*/