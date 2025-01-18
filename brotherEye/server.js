import corsAnywhere from "cors-anywhere";

const host = "localhost";
const port = 8080;

corsAnywhere
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere proxy running at http://${host}:${port}`);
  });
