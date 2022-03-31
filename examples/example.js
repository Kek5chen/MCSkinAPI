const skinapi = require('../skinapi');

(async function() {
	const uuid = await skinapi.getUserUUID('kx_kx');
	const skinData = await skinapi.getUserSkinData(uuid)

	console.log('kx_kx UUID:', uuid);
	console.log('kx_kx skin data:', skinData);
})();