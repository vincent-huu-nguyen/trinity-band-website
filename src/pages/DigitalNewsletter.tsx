import React from 'react';

const DigitalNewsletter: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Newsletter</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Stay connected with the latest news, updates, and stories from Trinity Band
          </p>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Subscribe to Our Newsletter</h2>
          <div className="bg-trinity-primary rounded-lg p-8">
            <p className="text-center text-trinity-text-light mb-8 text-lg">
              Get monthly updates delivered directly to your inbox featuring student achievements, 
              upcoming events, and behind-the-scenes stories.
            </p>
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
                <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                  I am a...
                </label>
                <select
                  id="role"
                  className="w-full px-3 py-2 border border-trinity-gray-dark rounded-md focus:outline-none focus:ring-2 focus:ring-trinity-secondary focus:border-transparent"
                >
                  <option value="">Select your role</option>
                  <option value="student">Current Student</option>
                  <option value="parent">Parent/Guardian</option>
                  <option value="alumni">Alumni</option>
                  <option value="faculty">Faculty/Staff</option>
                  <option value="community">Community Member</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 text-trinity-secondary focus:ring-trinity-secondary border-trinity-gray-dark rounded"
                />
                <label htmlFor="consent" className="ml-2 text-sm text-trinity-text-light">
                  I agree to receive email communications from Trinity Band. I can unsubscribe at any time.
                </label>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-trinity-primary-light mb-2">
                  <span>March 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Student Spotlight</span>
                </div>
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Meet Our Senior Soloist</h3>
                <p className="text-trinity-primary-light text-sm mb-4">
                  Discover the journey of Sarah Johnson, our talented senior flutist who will be performing 
                  a solo piece at the upcoming spring concert.
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-trinity-primary-light mb-2">
                  <span>March 10, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Event Recap</span>
                </div>
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Winter Concert Success</h3>
                <p className="text-trinity-primary-light text-sm mb-4">
                  A recap of our outstanding winter concert featuring holiday classics and contemporary 
                  arrangements that delighted our audience.
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-trinity-primary-light mb-2">
                  <span>March 5, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Program News</span>
                </div>
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">New Music Theory Course</h3>
                <p className="text-trinity-primary-light text-sm mb-4">
                  We're excited to announce the launch of our advanced music theory course, designed 
                  to help students develop deeper musical understanding.
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-trinity-primary-light mb-2">
                  <span>February 28, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Community</span>
                </div>
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Volunteer Spotlight</h3>
                <p className="text-trinity-primary-light text-sm mb-4">
                  Meet the dedicated volunteers who make our program possible, from event coordination 
                  to instrument maintenance and everything in between.
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-trinity-primary-light mb-2">
                  <span>February 20, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Achievements</span>
                </div>
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Competition Results</h3>
                <p className="text-trinity-primary-light text-sm mb-4">
                  Congratulations to our marching band for achieving Superior ratings at the 
                  Regional Marching Band Competition!
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-trinity-primary-light h-48 rounded-t-lg mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-trinity-primary-light mb-2">
                  <span>February 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Upcoming Events</span>
                </div>
                <h3 className="text-lg font-semibold text-trinity-primary mb-2">Spring Concert Preview</h3>
                <p className="text-trinity-primary-light text-sm mb-4">
                  Get a sneak peek at the exciting program planned for our spring concert, 
                  featuring works from classical to contemporary composers.
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archives */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Newsletter Archives</h2>
          <div className="bg-trinity-primary rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-trinity-gray p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">March 2024</h3>
                <p className="text-trinity-text-light text-sm mb-3">
                  Spring concert preparations, student achievements, and upcoming events
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark text-sm font-medium">
                  Download PDF
                </button>
              </div>

              <div className="bg-trinity-gray p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">February 2024</h3>
                <p className="text-trinity-text-light text-sm mb-3">
                  Winter concert recap, competition results, and volunteer appreciation
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark text-sm font-medium">
                  Download PDF
                </button>
              </div>

              <div className="bg-trinity-gray p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">January 2024</h3>
                <p className="text-trinity-text-light text-sm mb-3">
                  New year goals, program updates, and student spotlights
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark text-sm font-medium">
                  Download PDF
                </button>
              </div>

              <div className="bg-trinity-gray p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">December 2023</h3>
                <p className="text-trinity-text-light text-sm mb-3">
                  Holiday concert highlights, year-end reflections, and winter break plans
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark text-sm font-medium">
                  Download PDF
                </button>
              </div>

              <div className="bg-trinity-gray p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">November 2023</h3>
                <p className="text-trinity-text-light text-sm mb-3">
                  Fall concert success, marching band achievements, and community events
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark text-sm font-medium">
                  Download PDF
                </button>
              </div>

              <div className="bg-trinity-gray p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">October 2023</h3>
                <p className="text-trinity-text-light text-sm mb-3">
                  Homecoming parade, football game performances, and student leadership
                </p>
                <button className="text-trinity-secondary hover:text-trinity-secondary-dark text-sm font-medium">
                  Download PDF
                </button>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="btn-secondary px-8 py-3">
                View All Archives
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-trinity-primary-lighter mb-8 max-w-2xl mx-auto">
            Don't miss out on the latest news and updates from Trinity Band. Subscribe today and 
            join our community of music lovers and supporters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent text-lg px-8 py-3">
              Subscribe Now
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalNewsletter;
