const mongoose = require('mongoose');
// const config = require('config');

// const db = config.get('mongoURI');
const mongoURL =
  'mongodb+srv://ibrahim:Ibrahimkhan0348@products.ld0qs.mongodb.net/Products?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
