/*global module*/

const SECTION = 'insights';
const APP_ID = 'drift';
const FRONTEND_PORT = 8001;
const routes = {};

// backend
routes[`/api/inventory`] = { host: `http://localhost:8082` };
routes[`/api/system-baseline`] = { host: `http://localhost:8083` };
routes[`/api/drift`] = { host: `http://localhost:8084` };
routes[`/api/historical-system-profiles`] = { host: `http://localhost:8085` };

// frontend
routes[`/preview/${SECTION}/${APP_ID}`] = { host: `http://localhost:${FRONTEND_PORT}` };
routes[`/${SECTION}/${APP_ID}`]      = { host: `http://localhost:${FRONTEND_PORT}` };
routes[`/preview/apps/${APP_ID}`]       = { host: `http://localhost:${FRONTEND_PORT}` };
routes[`/apps/${APP_ID}`]            = { host: `http://localhost:${FRONTEND_PORT}` };

module.exports = { routes };
