const mongoose = require("mongoose");

const prizeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  draw1: {
    type: Number,
    require: true
  },
  draw2: {
    type: Number,
    require: true
  },
  draw3: {
    type: Number,
    require: true
  },
  eid: {
    type: Number,
    require: true
  },
  prize: { type: Number, default: 1 },
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model("prize", prizeSchema);
