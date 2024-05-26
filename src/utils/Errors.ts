import app from "@/app";
import { STATUS_CODES } from "http";

app.use((_req, res, _next) => {
    return res.status(404).json({
      STATUS_CODES: STATUS_CODES.NOT_FOUND,
      success: false,
      message: STATUS_CODES[404],
      
    });
  });
  // server error middleware
  app.use((err, _req, res, _next) => {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  });
  
  // bad request middleware
  app.use((err, _req, res, _next) => {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  });