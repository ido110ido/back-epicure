import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";
export interface IUsers {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  token: string;
}
const userSchema: Schema = new Schema<IUsers>({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

const UsersModel: Model<IUsers> = mongoose.model<IUsers>("users", userSchema);

export default UsersModel;
