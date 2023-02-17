const path = require('path');
const homePage = async (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/public/index.html`))
}
;

module.exports = {
    homePage}
