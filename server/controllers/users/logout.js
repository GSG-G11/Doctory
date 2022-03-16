const { join } = require('path');

const logout = (req, res) =>{
    res.clearCookie("access");
    res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
}

module.exports = logout