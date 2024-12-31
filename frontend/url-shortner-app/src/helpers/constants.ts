// process.env and dotenv is better suited for server side
// for client side, variables starting with VITE_ are exposed to the clients
// otherwise they arent

export const serverUrl = import.meta.env.VITE_SERVER_URL;
