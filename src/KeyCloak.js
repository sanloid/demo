import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/",
 realm: "demorealm",
 clientId: "reactwebapp",
});

export default keycloak;