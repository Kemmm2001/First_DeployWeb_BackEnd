const mongoose = require('mongoose');

const username = 'nguyenlehung2602';
const password = 'Hungythb2001'; // Thay YOUR_PASSWORD bằng mật khẩu MongoDB Atlas của bạn
const clusterUrl = 'cluster0.ptoxqca.mongodb.net';
const databaseName = 'First_DataBase';

const connectionString = `mongodb+srv://${username}:${password}@${clusterUrl}/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Thực hiện các thao tác với cơ sở dữ liệu ở đây
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// try {
//     mongoose.connect('mongodb://localhost:27017/First_DataBase', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log("Connection mongodb sucessful")
// } catch (error) {
//     console.log("Connection mongodb fail")
// }