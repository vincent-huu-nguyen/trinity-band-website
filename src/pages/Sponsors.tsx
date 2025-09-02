import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Meet the generous organizations and individuals who support Trinity Band's mission
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Current Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-24 h-24 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-2">Downtown Music Store</h3>
              <p className="text-trinity-primary-light mb-3">Platinum Sponsor</p>
              <p className="text-trinity-primary-light text-sm">
                Providing instruments, repairs, and music supplies for our program
              </p>
            </div>

            <div className="card-hover text-center">
              <div className="w-24 h-24 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-2">Trinity Bank & Trust</h3>
              <p className="text-trinity-primary-light mb-3">Gold Sponsor</p>
              <p className="text-trinity-primary-light text-sm">
                Supporting our competition travel and special event funding
              </p>
            </div>

            <div className="card-hover text-center">
              <div className="w-24 h-24 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-2">City Community Foundation</h3>
              <p className="text-trinity-primary-light mb-3">Silver Sponsor</p>
              <p className="text-trinity-primary-light text-sm">
                Funding for educational programs and student scholarships
              </p>
            </div>

            <div className="card-hover text-center">
              <div className="w-24 h-24 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-2">Local Rotary Club</h3>
              <p className="text-trinity-primary-light mb-3">Bronze Sponsor</p>
              <p className="text-trinity-primary-light text-sm">
                Supporting community outreach and performance opportunities
              </p>
            </div>

            <div className="card-hover text-center">
              <div className="w-24 h-24 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-2">Trinity Alumni Association</h3>
              <p className="text-trinity-primary-light mb-3">Bronze Sponsor</p>
              <p className="text-trinity-primary-light text-sm">
                Funding for alumni events and program legacy projects
              </p>
            </div>

            <div className="card-hover text-center">
              <div className="w-24 h-24 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-2">Individual Donors</h3>
              <p className="text-trinity-primary-light mb-3">Friends of the Band</p>
              <p className="text-trinity-primary-light text-sm">
                Generous community members supporting our mission
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Impact */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Your Sponsorship Makes a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">$25K</span>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary mb-2">Annual Funding</h3>
              <p className="text-trinity-primary-light text-sm">
                Total sponsorship support received annually
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100+</span>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary mb-2">Students Served</h3>
              <p className="text-trinity-primary-light text-sm">
                Students benefiting from sponsored programs
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15</span>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary mb-2">Events Supported</h3>
              <p className="text-trinity-primary-light text-sm">
                Annual events and performances funded
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-trinity-primary mb-2">Instruments</h3>
              <p className="text-trinity-primary-light text-sm">
                Instruments purchased with sponsor support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Sponsorship Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover text-center">
              <div className="bg-trinity-primary-light text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Bronze</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$1,000</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• Recognition in programs</li>
                <li>• Logo on website</li>
                <li>• Newsletter mention</li>
                <li>• Event invitations</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>

            <div className="card-hover text-center border-2 border-trinity-secondary">
              <div className="bg-trinity-secondary text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Silver</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$2,500</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• All Bronze benefits</li>
                <li>• Banner at events</li>
                <li>• Social media recognition</li>
                <li>• VIP seating</li>
                <li>• Annual report feature</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>

            <div className="card-hover text-center">
              <div className="bg-trinity-primary text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Gold</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$5,000</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• All Silver benefits</li>
                <li>• Naming rights</li>
                <li>• Meet & greet events</li>
                <li>• Board meeting invitation</li>
                <li>• Custom recognition</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>

            <div className="card-hover text-center">
              <div className="bg-trinity-primary-dark text-white py-4 rounded-t-lg -mt-6 mx-6 mb-4">
                <h3 className="text-lg font-semibold">Platinum</h3>
              </div>
              <div className="text-3xl font-bold text-trinity-primary mb-2">$10,000+</div>
              <p className="text-trinity-primary-light text-sm mb-4">Annually</p>
              <ul className="text-sm text-trinity-primary-light space-y-2 mb-6">
                <li>• All Gold benefits</li>
                <li>• Exclusive events</li>
                <li>• Legacy recognition</li>
                <li>• Advisory role</li>
                <li>• Custom partnership</li>
              </ul>
              <button className="btn-primary w-full">Become a Sponsor</button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Inquiry Form */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Become a Sponsor</h2>
          <div className="bg-white rounded-lg p-8">
            <p className="text-center text-trinity-primary-light mb-8 text-lg">
              Interested in supporting Trinity Band? Fill out the form below and we'll contact you 
              to discuss sponsorship opportunities that align with your goals.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-trinity-primary mb-2">
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
                  <label htmlFor="lastName" className="block text-sm font-medium text-trinity-primary mb-2">
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
                <label htmlFor="company" className="block text-sm font-medium text-trinity-primary mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  placeholder="Enter company or organization name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-trinity-primary mb-2">
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
                <label htmlFor="phone" className="block text-sm font-medium text-trinity-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-trinity-primary mb-2">
                  Preferred Sponsorship Level
                </label>
                <select
                  id="level"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                >
                  <option value="">Select sponsorship level</option>
                  <option value="bronze">Bronze ($1,000)</option>
                  <option value="silver">Silver ($2,500)</option>
                  <option value="gold">Gold ($5,000)</option>
                  <option value="platinum">Platinum ($10,000+)</option>
                  <option value="custom">Custom Partnership</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-trinity-primary mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  placeholder="Tell us about your sponsorship goals, specific areas of interest, or any questions you may have..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Submit Sponsorship Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Sponsors</h2>
          <p className="text-xl text-trinity-primary-lighter mb-8 max-w-2xl mx-auto">
            Your sponsorship helps us provide exceptional music education and create opportunities 
            for students to grow both musically and personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent text-lg px-8 py-3">
              Become a Sponsor
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
