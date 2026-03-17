import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  notes: { type: String, required: true },
  price: { type: Number, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  aspectRatio: { type: String, default: 'aspect-[4/5]' },
  masonry: { type: Boolean, default: false },
  inStock: { type: Boolean, default: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
