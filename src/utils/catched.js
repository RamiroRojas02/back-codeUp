function catched(fn) {
    return (req,res,next)=>{
        console.log(fn);
        
        fn(req,res).catch(err => next(err))
    }
}

export default catched