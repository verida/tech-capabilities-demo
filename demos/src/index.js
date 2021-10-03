import { Router } from "./router";
import { Connect, SendMessage, StoreSchemalessData } from "./demo-js/";

function main() {
  window.addEventListener("popstate", () => Router.renderRoute());

  const routes = [
    { url: "", render: Connect },
    { url: "send-message", render: SendMessage },
    { url: "store-schemaless-data", render: StoreSchemalessData },
  ];

  Router.setRoutes(routes);

  Router.renderRoute();
}

main();
