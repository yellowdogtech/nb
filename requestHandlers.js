var exec = require("child_process").exec;

function start(response, postData) {
	
	console.log("start request handled");
	
	var body = '<html>' +
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>' +
	'</head>' +
	'<body>' +
	'<form action="/upload" metod="post">' +
	'<textarea name="text" rows="20" cols="60"></textarea><br/>' +
	'<input type="submit" value="Submit"/>' +
	'</form>' +
	'</body>' +
	'</html>';
	
    response.writeHead(200, {"Content-Type": "text/html" });
	response.write(body);
	response.end();
}

function upload(response, postData) {
	console.log("upload request handled");
    response.writeHead(200, {"Content-Type": "text/plain" });
	response.write("You sent -> " + postData);
	response.end();
}

exports.start = start;
exports.upload = upload;