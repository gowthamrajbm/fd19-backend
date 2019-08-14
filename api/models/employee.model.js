const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  eid: {
    type: Number,
    require: true,
    unique: true,
    length: 6
  },
  name: {
    type: String,
    require: true
  },
  logged_in: { type: Boolean, default: false },
  gift: { type: Boolean, default: false },
  prize: { type: Boolean, default: false }
});

module.exports = mongoose.model("employee", employeeSchema);
