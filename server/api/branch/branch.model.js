'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var BranchSchema = new Schema({
  name: String,
  phones: {
    school: String,
    mobile: String
  },
  email: String,
  address: {
    buildingName: String,
    streetAddress: String,
    subDistrict: String,
    district: String,
    province: String,
    country: String,
    postcode: String
  },
  createdDate: { type : Date, default : Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  edittedDate: { type : Date, default : null },
  edittedBy: { type: Schema.Types.ObjectId, ref: 'User', default : null },
  status: { type: String, default: 'active' }
});

BranchSchema.plugin(autoIncrement.plugin, {
    model: 'Branch',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Branch', BranchSchema);