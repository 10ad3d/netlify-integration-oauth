import { NetlifyIntegrationUI } from "@netlify/sdk";

const integrationUI = new NetlifyIntegrationUI("netlify-integration-oauth");

const surface = integrationUI.addSurface("integrations-settings");

const route = surface.addRoute("/");

route.addText({
    value: "Welcome to the netlify-integration-oauth integration UI. This is where you can create your own custom UI for your integration, which will be displayed in the Netlify UI."
});

export { integrationUI };

