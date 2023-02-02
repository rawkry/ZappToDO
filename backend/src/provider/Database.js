import mongoose from "mongoose";

export class Database {
  static async init() {
    try {
      // const configuri = config.app.mongoUri;
      const configuri =
        process.env.MONGO_URI ||
        "mongodb+srv://sudeep:root@cluster0.tdpin.mongodb.net/MernDB?authSource=admin";

      mongoose.connect(configuri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected");
    } catch (error) {
      console.log(error);
    }
  }
}
