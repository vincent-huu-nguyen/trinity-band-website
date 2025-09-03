import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trinity-primary via-trinity-primary-dark to-trinity-primary-darker text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-trinity-secondary">Trinity Trojan Band</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Excellence in music education and performance at Trinity High School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-primary text-lg px-8 py-3">
              Learn More
            </Link>
            <Link to="/events" className="btn-secondary text-lg px-8 py-3">
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose Trinity Trojan Band?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Musical Excellence</h3>
              <p className="text-trinity-text-light">
                Award-winning performances and comprehensive music education programs
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community Building</h3>
              <p className="text-trinity-text-light">
                Fostering lasting friendships and building character through music
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Opportunities</h3>
              <p className="text-trinity-text-light">
                Regular concerts, competitions, and special event performances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-trinity-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Trinity Trojan Band Family
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Whether you're a student, parent, or community member, there are many ways to get involved and support our music program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteers" className="btn-accent text-lg px-8 py-3">
              Volunteer Today
            </Link>
            <Link to="/donations" className="btn-secondary text-lg px-8 py-3">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/events" className="group">
              <div className="card-hover text-center group-hover:border-white transition-all duration-200">
                <div className="w-12 h-12 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-trinity-secondary transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Events</h3>
              </div>
            </Link>
            <Link to="/store" className="group">
              <div className="card-hover text-center group-hover:border-white transition-all duration-200">
                <div className="w-12 h-12 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-trinity-secondary transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Store</h3>
              </div>
            </Link>
            <Link to="/newsletter" className="group">
              <div className="card-hover text-center group-hover:border-white transition-all duration-200">
                <div className="w-12 h-12 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-trinity-secondary transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Newsletter</h3>
              </div>
            </Link>
            <Link to="/sponsors" className="group">
              <div className="card-hover text-center group-hover:border-white transition-all duration-200">
                <div className="w-12 h-12 bg-trinity-primary-light rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-trinity-secondary transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Sponsors</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
