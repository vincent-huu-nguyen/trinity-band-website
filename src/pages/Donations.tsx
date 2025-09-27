import React from 'react';

const Donations: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Trinity Band</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Your generous contributions help us provide exceptional music education and performance opportunities
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Where Your Donations Make a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instrument Purchases</h3>
              <p className="text-trinity-text-light">
                Help us acquire quality instruments and equipment for students who cannot afford their own
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Competition Travel</h3>
              <p className="text-trinity-text-light">
                Support our students' participation in regional and national competitions and festivals
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Educational Resources</h3>
              <p className="text-trinity-text-light">
                Fund music theory materials, sheet music, and professional development opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Donation Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover text-center">
              <div className="bg-trinity-primary-light text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Friend</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">$25</div>
              <p className="text-trinity-text-light text-sm mb-4">Monthly</p>
              <ul className="text-sm text-trinity-text-light space-y-2 mb-6">
                <li>• Recognition in program</li>
                <li>• Newsletter updates</li>
                <li>• Invitation to events</li>
              </ul>
              <button className="btn-primary w-full">Donate Now</button>
            </div>

            <div className="card-hover text-center border-2 border-trinity-secondary">
              <div className="bg-trinity-secondary text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Supporter</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">$50</div>
              <p className="text-trinity-text-light text-sm mb-4">Monthly</p>
              <ul className="text-sm text-trinity-text-light space-y-2 mb-6">
                <li>• All Friend benefits</li>
                <li>• Name on donor wall</li>
                <li>• VIP event seating</li>
                <li>• Annual report</li>
              </ul>
              <button className="btn-primary w-full">Donate Now</button>
            </div>

            <div className="card-hover text-center">
              <div className="bg-trinity-primary text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Patron</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">$100</div>
              <p className="text-trinity-text-light text-sm mb-4">Monthly</p>
              <ul className="text-sm text-trinity-text-light space-y-2 mb-6">
                <li>• All Supporter benefits</li>
                <li>• Meet & greet with director</li>
                <li>• Exclusive concert access</li>
                <li>• Personalized thank you</li>
              </ul>
              <button className="btn-primary w-full">Donate Now</button>
            </div>

            <div className="card-hover text-center">
              <div className="bg-trinity-primary-dark text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Benefactor</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">$250</div>
              <p className="text-trinity-text-light text-sm mb-4">Monthly</p>
              <ul className="text-sm text-trinity-text-light space-y-2 mb-6">
                <li>• All Patron benefits</li>
                <li>• Instrument naming rights</li>
                <li>• Board meeting invitation</li>
                <li>• Legacy recognition</li>
              </ul>
              <button className="btn-primary w-full">Donate Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Donation Form */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Make a Custom Donation</h2>
          <div className="bg-trinity-primary rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-white mb-2">
                  Donation Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-trinity-text-light">$</span>
                  <input
                    type="number"
                    id="amount"
                    className="w-full pl-8 pr-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-white mb-2">
                  Designation (Optional)
                </label>
                <select
                  id="designation"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                >
                  <option value="">General Fund</option>
                  <option value="instruments">Instrument Fund</option>
                  <option value="travel">Travel Fund</option>
                  <option value="scholarships">Scholarship Fund</option>
                  <option value="equipment">Equipment Fund</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  placeholder="Share why you're supporting Trinity Band..."
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded"
                />
                <label htmlFor="anonymous" className="ml-2 text-sm text-trinity-text-light">
                  Make this donation anonymous
                </label>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Complete Donation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planned Giving</h3>
              <p className="text-trinity-primary-lighter">
                Include Trinity Band in your estate planning and create a lasting legacy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Matching</h3>
              <p className="text-trinity-primary-lighter">
                Many employers match charitable contributions - check if yours does
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">In-Kind Donations</h3>
              <p className="text-trinity-primary-lighter">
                Donate instruments, equipment, or services to support our program
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
