import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Thank you to our generous sponsors who make our music program possible
          </p>
        </div>
      </section>

      {/* Sponsor Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Sponsor Trinity Band?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-3">Community Visibility</h3>
              <p className="text-trinity-primary-light">
                Reach thousands of community members through our concerts, events, and digital presence
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-3">Support Education</h3>
              <p className="text-trinity-primary-light">
                Help provide quality music education and performance opportunities for young musicians
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-3">Tax Benefits</h3>
              <p className="text-trinity-primary-light">
                Enjoy tax deductions while supporting a worthy cause that benefits the entire community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Sponsorship Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover text-center">
              <div className="bg-trinity-primary-light text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Bronze</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$500</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• Logo in program</li>
                <li>• Website recognition</li>
                <li>• Newsletter mention</li>
                <li>• Thank you letter</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>

            <div className="card-hover text-center border-2 border-trinity-secondary">
              <div className="bg-trinity-secondary text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Silver</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$1,000</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• All Bronze benefits</li>
                <li>• Banner at events</li>
                <li>• Social media shoutout</li>
                <li>• 2 complimentary tickets</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>

            <div className="card-hover text-center">
              <div className="bg-trinity-primary text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Gold</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$2,500</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• All Silver benefits</li>
                <li>• VIP event access</li>
                <li>• Meet & greet opportunity</li>
                <li>• 4 complimentary tickets</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>

            <div className="card-hover text-center">
              <div className="bg-trinity-primary-dark text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Platinum</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$5,000</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• All Gold benefits</li>
                <li>• Exclusive concert naming</li>
                <li>• Board meeting invitation</li>
                <li>• Custom recognition</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Valued Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Platinum Sponsors */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Local Bank</h3>
              <p className="text-sm text-trinity-primary-light">Platinum Sponsor</p>
            </div>

            {/* Gold Sponsors */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Music Store</h3>
              <p className="text-sm text-trinity-primary-light">Gold Sponsor</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Sound Equipment Co.</h3>
              <p className="text-sm text-trinity-primary-light">Gold Sponsor</p>
            </div>

            {/* Silver Sponsors */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Print Shop</h3>
              <p className="text-sm text-trinity-primary-light">Silver Sponsor</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Restaurant Group</h3>
              <p className="text-sm text-trinity-primary-light">Silver Sponsor</p>
            </div>

            {/* Bronze Sponsors */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Local Business</h3>
              <p className="text-sm text-trinity-primary-light">Bronze Sponsor</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Tech Company</h3>
              <p className="text-sm text-trinity-primary-light">Bronze Sponsor</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-trinity-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-trinity-primary mb-2">Family Foundation</h3>
              <p className="text-sm text-trinity-primary-light">Bronze Sponsor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Sponsorship */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Interested in Sponsoring?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-trinity-primary-lighter mb-6">
                Join our community of supporters and help us provide exceptional music education 
                opportunities for students. We'd love to discuss how we can work together to 
                make a positive impact in our community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-trinity-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-trinity-primary-lighter">banddirector@trinityschool.edu</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-trinity-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-trinity-primary-lighter">(555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="bg-trinity-primary-light rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="sponsorName" className="block text-sm font-medium text-white mb-2">
                    Company/Organization Name
                  </label>
                  <input
                    type="text"
                    id="sponsorName"
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="Enter your organization name"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-white mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="Enter contact person name"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label htmlFor="interestLevel" className="block text-sm font-medium text-white mb-2">
                    Sponsorship Level Interest
                  </label>
                  <select
                    id="interestLevel"
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  >
                    <option value="">Select sponsorship level</option>
                    <option value="bronze">Bronze ($500)</option>
                    <option value="silver">Silver ($1,000)</option>
                    <option value="gold">Gold ($2,500)</option>
                    <option value="platinum">Platinum ($5,000)</option>
                    <option value="custom">Custom Amount</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                    placeholder="Tell us about your organization and sponsorship interests..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-secondary w-full py-3 text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;

