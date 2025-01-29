// There are 2 ways to handle this asyncHandler -> 
// one is to use Promise and the other one is to use try and catch
// here we have used Promises

const asyncHandler = ( fxn ) => {
    return (req, res, next) => {
        Promise.resolve( 
            fxn(req, res, next).catch((err) => next(err))
        )
    }
}

export { asyncHandler }