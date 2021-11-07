import mongoose from 'mongoose';

async function connect() {
  return await mongoose.connect('mongodb://10.0.1.10/wonju', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

export default connect;
