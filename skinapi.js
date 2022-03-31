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
		https.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}?unsigned=false`, (res) => {
			let body = '';
			res.on('data', (chunk) => {
				body += chunk;
			});
			res.on('end', () => {
				const data = JSON.parse(body);
				data.properties[0].raw = data.properties[0].value;
				data.properties[0].value = JSON.parse(atob(data.properties[0].value));
				try {
					resolve(data);
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