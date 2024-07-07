[Script]

# Intercept in-purchase verification requests and process them using scripts
http-response ^https:\/\/s-api\.ipcams\.app\/sentry\/api\/2\/envelope\/ Script-path = https://path/to/your/script.js,requires-body=true,timeout=10,tag=UnlockMembership

[MITM]

# Configure the host name to be intercepted
hostname = s-api.ipcams.app

[URL Rewrite]

# URL Rewriting Rules
^ https:\/\/s-api\.ipcams\.app\/sentry\/api\/2\/envelope\/$ https://s-api.ipcams.app/sentry/api/2/envelope/

[Script Content - script.js]

/ / script.js file content, modify the response data to unlock the member feature
let body = JSON.parse($response.body);

/ / Forge a successful in-purchase verification response
body = {
  "status": "success",
  "membership": {
    "status": "active",
    "expires": "2099-12-31"
  }
};

$done({body: JSON.stringify(body)});
