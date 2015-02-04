'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var EmployeeSchema = new Schema({
  branch: { type: Schema.Types.ObjectId, ref: 'Branch' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  firstname: {
    en: String,
    th: String
  },
  lastname: {
    en: String,
    th: String
  },
  nickname: {
    en: String,
    th: String
  },
  gender: String,
  birthDate: { type : Date },
  contacts: {
    phones: [{
      label: String,
      value: String,
      primary: { type: Boolean, default : false }
    }],
    emails: [{
      label: String,
      value: String,
      primary: { type: Boolean, default : false }
    }]
  },
  addresses: [{
    buildingName: String,
    streetAddress: String,
    subDistrict: String,
    district: String,
    province: String,
    country: String,
    zipCode: String
  }],
  role: { type: String, default: 'employee' },
  status: { type: String, default: 'active' },
  createdDate: { type : Date, default : Date.now },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  edittedDate: { type : Date },
  edittedBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

EmployeeSchema.plugin(autoIncrement.plugin, {
    model: 'Employee',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Employee', EmployeeSchema);