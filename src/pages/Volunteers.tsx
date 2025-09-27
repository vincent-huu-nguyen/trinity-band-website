import React from 'react';

const Volunteers: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteer with Trinity Band</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Join our dedicated team of volunteers and help support music education excellence
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Event Support</h3>
              <p className="text-trinity-text-light mb-4">
                Help with concert setup, ticket sales, ushering, and event coordination
              </p>
              <div className="text-sm text-trinity-text-light">
                <p><strong>Time Commitment:</strong> 2-4 hours per event</p>
                <p><strong>Frequency:</strong> Monthly during concert season</p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transportation</h3>
              <p className="text-trinity-text-light mb-4">
                Drive students to competitions, festivals, and off-campus performances
              </p>
              <div className="text-sm text-trinity-text-light">
                <p><strong>Time Commitment:</strong> 4-8 hours per trip</p>
                <p><strong>Frequency:</strong> 3-5 times per year</p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fundraising</h3>
              <p className="text-trinity-text-light mb-4">
                Assist with fundraising events, donor relations, and grant writing
              </p>
              <div className="text-sm text-trinity-text-light">
                <p><strong>Time Commitment:</strong> 5-10 hours per month</p>
                <p><strong>Frequency:</strong> Ongoing throughout the year</p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Music Library</h3>
              <p className="text-trinity-text-light mb-4">
                Organize sheet music, maintain instrument inventory, and assist with repairs
              </p>
              <div className="text-sm text-trinity-text-light">
                <p><strong>Time Commitment:</strong> 2-3 hours per week</p>
                <p><strong>Frequency:</strong> Weekly during school year</p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Administrative</h3>
              <p className="text-trinity-text-light mb-4">
                Help with data entry, newsletter distribution, and social media management
              </p>
              <div className="text-sm text-trinity-text-light">
                <p><strong>Time Commitment:</strong> 3-5 hours per week</p>
                <p><strong>Frequency:</strong> Weekly, flexible schedule</p>
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Special Projects</h3>
              <p className="text-trinity-text-light mb-4">
                Contribute to special initiatives like band camp, competitions, or community outreach
              </p>
              <div className="text-sm text-trinity-text-light">
                <p><strong>Time Commitment:</strong> Varies by project</p>
                <p><strong>Frequency:</strong> As needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Volunteer Events */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Upcoming Volunteer Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Spring Concert Setup</h3>
                  <p className="text-trinity-text-light">Help prepare the auditorium and assist with logistics</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-trinity-secondary">14</div>
                  <div className="text-sm text-trinity-text-light">MAY</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-trinity-text-light mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  3:00 PM - 6:00 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Trinity High School Auditorium
                </div>
              </div>
              <button className="btn-primary w-full">Sign Up to Help</button>
            </div>

            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Band Camp Support</h3>
                  <p className="text-trinity-text-light">Assist with meals, supervision, and logistics during summer camp</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-trinity-secondary">20</div>
                  <div className="text-sm text-trinity-text-light">JUL</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-trinity-text-light mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  8:00 AM - 5:00 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Trinity High School Campus
                </div>
              </div>
              <button className="btn-primary w-full">Sign Up to Help</button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Sign-up Form */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Become a Volunteer</h2>
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
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
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
                <label htmlFor="interests" className="block text-sm font-medium text-white mb-2">
                  Areas of Interest
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded" />
                    <span className="ml-2 text-sm text-trinity-text-light">Event Support</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded" />
                    <span className="ml-2 text-sm text-trinity-text-light">Transportation</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded" />
                    <span className="ml-2 text-sm text-trinity-text-light">Fundraising</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded" />
                    <span className="ml-2 text-sm text-trinity-text-light">Music Library</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded" />
                    <span className="ml-2 text-sm text-trinity-text-light">Administrative</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded" />
                    <span className="ml-2 text-sm text-trinity-text-light">Special Projects</span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-white mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                  placeholder="Tell us about your skills, experience, or any other relevant information..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Volunteering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Connection</h3>
              <p className="text-trinity-primary-lighter">
                Build meaningful relationships with students, parents, and fellow volunteers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-trinity-primary-lighter">
                Gain valuable experience in event planning, organization, and leadership
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal Fulfillment</h3>
              <p className="text-trinity-primary-lighter">
                Experience the joy of contributing to students' musical growth and success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;
