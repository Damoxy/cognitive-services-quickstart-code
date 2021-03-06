"use strict";

/* To run this sample, install the following modules.
 * npm install @azure/cognitiveservices-autosuggest
 * npm install @azure/ms-rest-js
 */
var TranslatorText = require("@azure/cognitiveservices-translatortext");
var msRest = require("@azure/ms-rest-js");

const key_var = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';
if (!process.env[key_var]) {
    throw new Error('please set/export the following environment variable: ' + key_var);
}
const subscription_key = process.env[key_var];

const endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT';
if (!process.env[endpoint_var]) {
    throw new Error('please set/export the following environment variable: ' + endpoint_var);
}
const endpoint = process.env[endpoint_var];

const creds = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': subscription_key } });
const client = new TranslatorText.TranslatorTextClient(creds, endpoint).translator;

async function quickstart() {
    var result = await client.detect([{ text: "Salve, mondo!" }]);

	if (0 == result.length) {
		console.log ('No results found.');
	}
	else {
		console.log ('Language detected: ' + result[0].language);
		console.log ('Score: ' + result[0].score);
	}
}

try {
    quickstart();
}
catch (error) {
    console.log(error);
}
