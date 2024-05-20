import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

// Load the YAML file
const swaggerDocument = YAML.load(path.join(__dirname, "yaml", "news.yaml"));

const swaggerDocs = express();

swaggerDocs.use(express.json());
swaggerDocs.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

swaggerDocs.listen(3000, () => {
  console.log("Swagger docs available at http://localhost:3000/api-docs");
});

export default swaggerDocs;
