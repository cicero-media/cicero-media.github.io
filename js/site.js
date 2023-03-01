const BASE_URLS = [
  { env: "local", url: "http://localhost:3000" },
  { env: "dev", url: "https://api-dev.getcicero.io" },
  { env: "stage", url: "https://api-stage.getcicero.io" },
  { env: "prod", url: "https://api.getcicero.io" },
];

async function resetPassword(token, password, env) {
  const baseUrl = BASE_URLS.find((u) => u.env === (env || "prod"));
  const rawResponse = await fetch(`${baseUrl.url}/auth/reset-password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
  });
  const content = await rawResponse.json();

  console.log(content, params);

  return content;
}
