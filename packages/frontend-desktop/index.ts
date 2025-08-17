import { getSDKService } from "@packages/api/dist/main/local";
import { providers } from "@packages/api/dist/main/app.module";

(async function () {
  const sdk = await getSDKService(providers.appService);

  console.log(sdk.getHello());
})();
