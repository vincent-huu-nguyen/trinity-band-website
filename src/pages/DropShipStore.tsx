import React from 'react';

const DropShipStore: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trinity Band Store</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Show your support with official Trinity Band merchandise and equipment
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover text-center group cursor-pointer">
              <div className="w-20 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trinity-secondary transition-colors duration-200">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary group-hover:text-trinity-secondary transition-colors duration-200">Apparel</h3>
              <p className="text-trinity-primary-light text-sm">T-shirts, hoodies, and more</p>
            </div>

            <div className="card-hover text-center group cursor-pointer">
              <div className="w-20 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trinity-secondary transition-colors duration-200">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary group-hover:text-trinity-secondary transition-colors duration-200">Accessories</h3>
              <p className="text-trinity-primary-light text-sm">Bags, stickers, and gear</p>
            </div>

            <div className="card-hover text-center group cursor-pointer">
              <div className="w-20 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trinity-secondary transition-colors duration-200">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary group-hover:text-trinity-secondary transition-colors duration-200">Music Supplies</h3>
              <p className="text-trinity-primary-light text-sm">Sheet music and instruments</p>
            </div>

            <div className="card-hover text-center group cursor-pointer">
              <div className="w-20 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trinity-secondary transition-colors duration-200">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary group-hover:text-trinity-secondary transition-colors duration-200">Gifts</h3>
              <p className="text-trinity-primary-light text-sm">Perfect for band supporters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Trinity Band T-Shirt</h3>
                <p className="text-trinity-primary-light text-sm mb-3">Classic cotton t-shirt with Trinity Band logo</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-trinity-secondary">$25.00</span>
                  <button className="btn-primary px-4 py-2">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Hooded Sweatshirt</h3>
                <p className="text-trinity-primary-light text-sm mb-3">Warm and comfortable with embroidered logo</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-trinity-secondary">$45.00</span>
                  <button className="btn-primary px-4 py-2">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Band Sticker Pack</h3>
                <p className="text-trinity-primary-light text-sm mb-3">Set of 5 vinyl stickers for cars and laptops</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-trinity-secondary">$12.00</span>
                  <button className="btn-primary px-4 py-2">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Water Bottle</h3>
                <p className="text-trinity-primary-light text-sm mb-3">Insulated water bottle with Trinity Band design</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-trinity-secondary">$18.00</span>
                  <button className="btn-primary px-4 py-2">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Canvas Tote Bag</h3>
                <p className="text-trinity-primary-light text-sm mb-3">Eco-friendly tote bag perfect for shopping</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-trinity-secondary">$22.00</span>
                  <button className="btn-primary px-4 py-2">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg flex items-center justify-center mb-4">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Phone Case</h3>
                <p className="text-trinity-primary-light text-sm mb-3">Protective phone case with band logo</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-trinity-secondary">$28.00</span>
                  <button className="btn-primary px-4 py-2">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Shopping Cart</h2>
          <div className="bg-trinity-gray rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-trinity-primary-light rounded mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-trinity-primary">Trinity Band T-Shirt</h3>
                    <p className="text-sm text-trinity-primary-light">Size: L, Color: Black</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-trinity-gray-dark rounded">
                    <button className="px-3 py-1 text-trinity-primary hover:bg-trinity-primary-light hover:text-white transition-colors">-</button>
                    <span className="px-3 py-1 text-trinity-primary">1</span>
                    <button className="px-3 py-1 text-trinity-primary hover:bg-trinity-primary-light hover:text-white transition-colors">+</button>
                  </div>
                  <span className="font-semibold text-trinity-primary">$25.00</span>
                  <button className="text-trinity-secondary hover:text-trinity-secondary-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-trinity-primary-light rounded mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-trinity-primary">Band Sticker Pack</h3>
                    <p className="text-sm text-trinity-primary-light">Set of 5 vinyl stickers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-trinity-gray-dark rounded">
                    <button className="px-3 py-1 text-trinity-primary hover:bg-trinity-primary-light hover:text-white transition-colors">-</button>
                    <span className="px-3 py-1 text-trinity-primary">2</span>
                    <button className="px-3 py-1 text-trinity-primary hover:bg-trinity-primary-light hover:text-white transition-colors">+</button>
                  </div>
                  <span className="font-semibold text-trinity-primary">$24.00</span>
                  <button className="text-trinity-secondary hover:text-trinity-secondary-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-trinity-primary-light mt-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-trinity-primary">Subtotal:</span>
                <span className="text-lg font-semibold text-trinity-primary">$49.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-trinity-primary-light">Shipping:</span>
                <span className="text-trinity-primary-light">$5.99</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-trinity-primary">Total:</span>
                <span className="text-xl font-bold text-trinity-secondary">$54.99</span>
              </div>
              <button className="btn-primary w-full py-3 text-lg">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Policies */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Store Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Shipping</h3>
              <p className="text-trinity-primary-lighter">
                Standard shipping takes 5-7 business days. Express shipping available for additional cost.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Returns</h3>
              <p className="text-trinity-primary-lighter">
                30-day return policy for unused items in original packaging. Contact us for return authorization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-trinity-primary-lighter">
                All transactions are secure and encrypted. We never store your payment information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DropShipStore;
