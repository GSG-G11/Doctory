const logout = (req, res) =>{
    res.clearCookie("access");
    res.status(200).json({massage : 'you are log out now'})
}

module.exports = logout