#!/usr/bin/env node

const [,, ...args] = process.argv

function Process() {
	const process = require('child_process');
	var ls = process.spawn('main.bat');
	ls.stdout.on('data', function (data) {
			console.log(data);
	});
	ls.stderr.on('data', function (data) {
			console.log(data);
	});
	ls.on('close', function (code) {
			if (code == 0)
					console.log('Stop');
			else
					console.log('Start');
	});
};

Process();