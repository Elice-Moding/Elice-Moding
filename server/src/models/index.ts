import mongoose from 'mongoose';
import userSchema from './schemas/user';
import fundingSchema from './schemas/funding';
import sellerSchema from './schemas/seller';
import categorySchema from './schemas/category';
import orderSchema from './schemas/order';

const userModel = mongoose.model('user', userSchema);

const fundingModel = mongoose.model('funding', fundingSchema);

const sellerModel = mongoose.model('seller', sellerSchema);

const categoryModel = mongoose.model('category', categorySchema);

const orderModel = mongoose.model('order', orderSchema);

export { userModel, fundingModel, sellerModel, categoryModel, orderModel };
