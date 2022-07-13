

const getUsersdata = (req, res)=>{
    const userField = req.body
    if(!userField){
        res.send(401)
        throw new Error("No user field found!")
    }
    res.status(200).send(userField);
}

const setUserdata = (req, res)=>{
    const {name, email, department, college, level, telephone, socialmedia} = req.body;
    if(!name || !email || !department || !college || !level || !telephone || !socialmedia){
        res.status(400)
        throw new Error("Please fill in the form")
    }

    res.status(200).json({
        name,
        email,
        department,
        college,
        telephone,
        socialmedia,
        file
    })
}

module.exports = {
    getUsersdata,
    setUserdata
}