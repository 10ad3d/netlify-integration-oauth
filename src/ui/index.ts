import { NetlifyIntegrationUI } from "@netlify/sdk";

const integrationUI = new NetlifyIntegrationUI("netlify-plugin-oauth");

const surface = integrationUI.addSurface("integrations-settings");

const route = surface.addRoute("/");

route.addOAuthCard({
    providerFriendlyName: "Boilerplate OAuth provider",
    connectWithMessage: "Welcome to oauth provider everythings secure!",
    disconnectFromMessage: "Disconnect from this secure OAuth provider",
    disconnectWarning: "Disconnecting ...",
});

export { integrationUI };

