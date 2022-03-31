MC Skin API
==================
Receive uuid and skin data from Mojangs servers by simply supplying a name for use in Node.js.

Usage
-----
```js
const skinapi = require('skinapi');

(async function() {
	const uuid = await skinapi.getUserUUID('kx_kx');
	const skinData = await skinapi.getUserSkinData(uuid)

	console.log('kx_kx UUID:', uuid);
	console.log('kx_kx skin data:', skinData);
})();
```

This will receive the UUID and skin data for the user `kx_kx` resulting in:

```
kx_kx UUID: 6eab089f969847fb8fe5c95fb5d20b6c
kx_kx skin data: {
  "timestamp" : 1648746100169,
  "profileId" : "6eab089f969847fb8fe5c95fb5d20b6c",
  "profileName" : "kx_kx",
  "textures" : {
    "SKIN" : {
      "url" : "http://textures.minecraft.net/texture/1abd3f07c126ce66f87a49fbf6d975ca6efb4474202600235a74c6990673ab58",
      "metadata" : {
        "model" : "slim"
      }
    }
  }
}

```

Run Example
------------
```bash
node examples/example.js
```
