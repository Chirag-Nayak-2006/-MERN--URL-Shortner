import mongoose from "mongoose";

// creating a async fucntion called connectDb that tries to connect to a mongoDB server
// it will wait for the connection to complete before moving (await command)
// it searches for the DB based on the unique connection string, which is stored in the .env file
const connectDb = async () => {
  try {
    // when it is connected, the connection details are stored in the connect object that we declared here
    const connect = await mongoose.connect(
      `${process.env.DB_CONNECTION_STRING}`
    );
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    // allows the process to exit cleanly, usually the exit code 1 is failure, 0 is success
    process.exit(1);
  }
};

export default connectDb;
