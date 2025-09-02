import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Performances</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Stay updated with all upcoming performances, rehearsals, and special events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-trinity-primary mb-2">Spring Concert</h3>
                  <p className="text-trinity-primary-light">Annual spring performance featuring all ensembles</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-trinity-secondary">15</div>
                  <div className="text-sm text-trinity-primary-light">MAY</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-trinity-primary-light">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  7:00 PM - 9:00 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Trinity High School Auditorium
                </div>
              </div>
              <button className="btn-primary w-full mt-4">Get Tickets</button>
            </div>

            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-trinity-primary mb-2">Band Camp</h3>
                  <p className="text-trinity-primary-light">Intensive summer training for marching band</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-trinity-secondary">20</div>
                  <div className="text-sm text-trinity-primary-light">JUL</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-trinity-primary-light">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9:00 AM - 4:00 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Trinity High School Campus
                </div>
              </div>
              <button className="btn-primary w-full mt-4">Register Now</button>
            </div>

            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-trinity-primary mb-2">Football Game</h3>
                  <p className="text-trinity-primary-light">Marching band performance at home game</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-trinity-secondary">28</div>
                  <div className="text-sm text-trinity-primary-light">SEP</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-trinity-primary-light">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  6:30 PM - 10:00 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Trinity Stadium
                </div>
              </div>
              <button className="btn-secondary w-full mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Monthly Calendar</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-trinity-primary">May 2024</h3>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-trinity-primary-light py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 31 }, (_, i) => {
                const day = i + 1;
                const hasEvent = [5, 12, 15, 20, 25].includes(day);
                return (
                  <div
                    key={day}
                    className={`text-center py-2 text-sm border border-trinity-gray-dark ${
                      hasEvent ? 'bg-trinity-secondary text-white font-semibold' : 'text-trinity-primary'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <p className="text-trinity-primary-light text-sm">
                <span className="inline-block w-3 h-3 bg-trinity-secondary rounded mr-2"></span>
                Events scheduled
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-trinity-primary-light rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trinity-primary">Winter Concert</h3>
                  <p className="text-trinity-primary-light text-sm">December 15, 2023</p>
                </div>
              </div>
              <p className="text-trinity-primary-light mb-4">
                A beautiful evening of holiday music featuring our Concert Band and Jazz Ensemble. 
                The performance included traditional carols and contemporary arrangements.
              </p>
              <div className="flex items-center text-sm text-trinity-primary-light">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Trinity High School Auditorium
              </div>
            </div>

            <div className="card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-trinity-primary-light rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trinity-primary">State Competition</h3>
                  <p className="text-trinity-primary-light text-sm">November 8, 2023</p>
                </div>
              </div>
              <p className="text-trinity-primary-light mb-4">
                Our Marching Band achieved Superior ratings at the State Marching Band Competition. 
                The performance showcased months of hard work and dedication.
              </p>
              <div className="flex items-center text-sm text-trinity-primary-light">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                State University Stadium
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-trinity-primary-lighter mb-8 max-w-2xl mx-auto">
            Don't miss any updates! Subscribe to our newsletter and follow us on social media for the latest event information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent text-lg px-8 py-3">
              Subscribe to Newsletter
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Follow Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
