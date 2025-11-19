import { createClient } from "@libsql/client/web";

// Only create client if env vars are available
// This prevents build errors when env vars aren't set during static generation
export const turso = process.env.TURSO_CONNECTION_URL
  ? createClient({
      url: process.env.TURSO_CONNECTION_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })
  : null;

