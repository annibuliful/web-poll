// polls-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const polls = new Schema({
    title:{
      type: String,
      required: true
    },
    detail:{
      type: String
    },
    likes:{
      type: Number,
      default: 0
    },
    unlikes:{
      type: Number,
      default: 0
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('polls', polls);
};
