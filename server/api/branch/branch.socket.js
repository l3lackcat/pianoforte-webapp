/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Branch = require('./branch.model');

exports.register = function(socket) {
  Branch.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Branch.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('branch:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('branch:remove', doc);
}