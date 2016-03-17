var apiKey = 'replace-with-your-api-key',
	apiSecret = 'replace-with-your-api-secret',
	apiUrl = 'http://api.sailthru.com', // optional
	sailthru = require('sailthru-client').createSailthruClient(apiKey, apiSecret, apiUrl);

sailthru.enableLogging();

// GET /user
sailthru.apiGet('user', {email: 'foo@foobar.com'}, function(err, response) {
	console.log(response);
});