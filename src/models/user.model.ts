import { Schema, model, Types } from 'mongoose';

// 1. Define an interface for your document
interface IUser {
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
}

// 2. Create the schema using the interface
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }
});

// 3. Create the model
const User = model<IUser>('User', userSchema);

export default User;