const conf = require('../conf/index');
 const mongoose = require('mongoose');
 const db = mongoose
     .connect(conf.db)
     .then(async () => {
         console.log("Successfully connected to database");
     })
     .catch((error) => {
         console.log("database connection failed. exiting now...");
         console.error(error);
         process.exit(1);
     });
 const r = async () => {

     db.MunisCategory = require('./Category')(mongoose);
     db.MunisSupplier = require('./Supplier')(mongoose);
     db.MunisService = require('./Service')(mongoose);
     db.MunisRequest = require('./Request')(mongoose);
     db.MunisResponse = require('./Response')(mongoose);
     db.MunisEnergoD = require('./EnergoD')(mongoose);
     db.MunisGasD = require('./GasD')(mongoose);
     db.MunisGnkD = require('./GnkD')(mongoose);
     db.MunisPayType = require('./PayType')(mongoose);

     console.log(db);
     console.log('migrating.....');

 
     console.log('migration complete');
     return db
 }

 r();

 module.exports = db;