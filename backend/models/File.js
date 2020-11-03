const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const File = new Schema({
    meta:{

    }
});

const FileModel = mongoose.model('File',File);
module.exports = FileModel;