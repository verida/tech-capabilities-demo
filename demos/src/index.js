import { Router } from "./router";
import {
  Connect,
  SendMessage,
  RequestData,
  StoreSchemalessData,
  StoreDataWithSchema,
} from "./demo-js/";

function main() {
  window.addEventListener("popstate", () => Router.renderRoute());

  const routes = [
    { url: "", render: Connect },
    { url: "send-message", render: SendMessage },
    { url: "request-data", render: RequestData },
    { url: "store-schemaless-data", render: StoreSchemalessData },
    { url: "store-data", render: StoreDataWithSchema },
  ];

  Router.setRoutes(routes);

  Router.renderRoute();
}

main();
