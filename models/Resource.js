const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: {
    // TODO: string, required (provide a validation message), unique
  },
  provider: {
    // TODO: string, required (provide a validation message), unique
  },
  url: {
    // TODO: string, required (provide a validation message), unique
  },
});

module.exports = mongoose.model("Resource", ResourceSchema);
