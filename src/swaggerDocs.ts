import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import app from "./app";


// Load the YAML file
const swaggerDocument = YAML.load(path.join(__dirname, "yaml", "news.yaml"));

const swaggerDocs = app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));


export default swaggerDocs;
