import mongoose from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  web3Wallet: string;
  amount: number;
}

const userSchema = new mongoose.Schema<IUser>({
  clerkId: { type: String, required: true },
  web3Wallet: { type: String, required: true },
  amount: { type: Number, required: true }
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
