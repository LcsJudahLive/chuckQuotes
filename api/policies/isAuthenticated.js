var jwt = require('express-jwt');

var authCheck = jwt({
	secret: new Buffer('UDt0IGeY_FW8ssDbRHQ53wn1_ItiqqJiSP8X0davqDCmmp_hANSXcTB2XhsxK2T6','base64'),
	audience: 'QEBrNDOWQjA3y7eBG4ME0K6Rhl2M3mr_'

});

module.exports = authCheck;