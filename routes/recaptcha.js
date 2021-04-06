var express = require('express');
var router = express.Router();
const axios = require('axios').default;



/* GET home page. */
router.get('/get', function(req, res, next) {
    res.send('respond with a captcha resource');
});

router.post('/verify', async (req,res) => {
    const secretKey =  req.body.secretKey;
    const token = req.body.token;
    const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${req.body.secretKey}&response=${req.body.token}`;
    const resp = await axios.post(googleVerifyUrl);
    return res.json(
        {succcess: 'true'}
    )
})

module.exports = router;
