const https = require('https');

function getUserUUID(username) {
	return new Promise((resolve, reject) => {
		https.get(`https://api.mojang.com/users/profiles/minecraft/${username}`, (res) => {
			let body = '';
			res.on('data', (chunk) => {
				body += chunk;
			});
			res.on('end', () => {
				const data = JSON.parse(body);
				resolve(data.id);
			});
		}).on('error', (err) => {
			reject(err);
		});
	});
}

function getUserSkinData(uuid) {
	return new Promise((resolve, reject) => {
		https.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, (res) => {
			let body = '';
			res.on('data', (chunk) => {
				body += chunk;
			});
			res.on('end', () => {
				const data = JSON.parse(body);
				try {
					resolve(atob(data.properties[0].value));
				} catch (err) {
					reject(err);
				}
			});
		}).on('error', (err) => {
			reject(err);
		});
	});
}

module.exports = {
	getUserUUID,
	getUserSkinData
};