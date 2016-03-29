var mongoose = require('mongoose');
var path = require('path');
var dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost/skynet';
mongoose.connect(dbURI);
var db = mongoose.connection;
/* ===============================================
   DB Event Handlers
    ===============================================
 */

 // logs a connection
 mongoose.connection.on('connected', function() {
   console.log('Mongoose connected to ' + dbURI);
 });
 // logs when disconnected
 mongoose.connection.on('disconnected', function() {
   console.log('Mongoose disconnected');
 });

 // logs when user terminates app
 // process.on('SIGINIT', function() {
 //   mongoose.connection.close(function() {
 //     console.log('Mongoose disconnected through app termination');
 //     process.exit(0);
 //   });
 // });

module.exports = db;
