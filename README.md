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
	console.log('kx_kx skin data:\n', JSON.stringify(skinData, null, 2));
})();
```
This will receive the UUID and skin data for the user `kx_kx` resulting in:
```
kx_kx UUID: 6eab089f969847fb8fe5c95fb5d20b6c
kx_kx skin data:
 {
  "id": "6eab089f969847fb8fe5c95fb5d20b6c",
  "name": "kx_kx",
  "properties": [
    {
      "name": "textures",
      "value": {
        "timestamp": 1648752811289,
        "profileId": "6eab089f969847fb8fe5c95fb5d20b6c",
        "profileName": "kx_kx",
        "signatureRequired": true,
        "textures": {
          "SKIN": {
            "url": "http://textures.minecraft.net/texture/1abd3f07c126ce66f87a49fbf6d975ca6efb4474202600235a74c6990673ab58",
            "metadata": {
              "model": "slim"
            }
          }
        }
      },
      "signature": "Sncs5dCowukYIf8AXFfmZuD1ek5+YdQh0SoZVddsDQWfvz34H8qeyEuo4LkgwOmZs7wa/uesy1zSrx7SoZr3x+4Lp8Wr0kUfqn+6Pa19bXftsS1t9b7RM4Ekg/p/M/4TOVgMWwCMYgEmWuREFYGOA094wpoWa56Z6JYGtOJNvqPa+NtUKPd0+PcS7TXHHUVJrl3rMxEhOD9JkQ6nm
X0Jgcl/EGTaWeyIhFLVo0WJwZb47N/LtmHmz1yt/jTrCtfdkLuV3KwkSOT2RJt0QvvjaEEKr/oLZTkuQjwr+O+cafBK7m2t/BDA3yOdwO6Eu55QmEENcGG1UAe1jhoVbDFsujxzCqgjeb8GPwPW84udCl2EH8SGACqZkpiFCidxrihMC1HHFcVOoDTJLEZJhIidmj60XeKz8FUevwhb0/I/mgj/pCKsJpe56c
NXEloSLqOFzKilxY2cTIPkvOyvWyyeO43wpuPZDyLhJH6T4qhkUGk0O4qUXZs0l8CFLmdf+6a4IBYX7W8AwyiL2LkrU8fZHluzFIA+iM3ky35z1q6AwMAqRvGDQIQpH04xRLsD4KKO+CIz9qnpMa7ob+5m1RaKdSkjm5q540qhMFQ1cniOX20O6XuRD083xrkvx0FC4wryb8OYi0aeaO8CfDJ/dsYt+r8jyv1
yY5V+//1DzLu1QfQ=",
      "raw": "ewogICJ0aW1lc3RhbXAiIDogMTY0ODc1MzA0NTY3NiwKICAicHJvZmlsZUlkIiA6ICI2ZWFiMDg5Zjk2OTg0N2ZiOGZlNWM5NWZiNWQyMGI2YyIsCiAgInByb2ZpbGVOYW1lIiA6ICJreF9reCIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICA
gICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8xYWJkM2YwN2MxMjZjZTY2Zjg3YTQ5ZmJmNmQ5NzVjYTZlZmI0NDc0MjAyNjAwMjM1YTc0YzY5OTA2NzNhYjU4IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDog
InNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="
    }
  ]
}
```

Run Example
------------
```bash
node examples/example.js
```
