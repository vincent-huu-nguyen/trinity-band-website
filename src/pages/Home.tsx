import React from 'react';
import { Link } from 'react-router-dom';
import trinitymarch from '../assets/trinitymarch.png';
import trinityflagpic from '../assets/trinityflagpic.png';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${trinitymarch})`
        }}
      >
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

      {/* Upcoming Events - At the Top */}
      <section className="py-12 bg-trinity-primary-light border-b-4 border-trinity-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Spring Concert</h3>
                  <p className="text-sm text-trinity-text-light">Annual spring performance</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-trinity-secondary">15</div>
                  <div className="text-xs text-trinity-text-light">MAY</div>
                </div>
              </div>
              <div className="text-sm text-trinity-text-light">
                <div className="flex items-center mb-1">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  7:00 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  School Auditorium
                </div>
              </div>
            </div>
            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Band Camp</h3>
                  <p className="text-sm text-trinity-text-light">Summer training</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-trinity-secondary">20</div>
                  <div className="text-xs text-trinity-text-light">JUL</div>
                </div>
              </div>
              <div className="text-sm text-trinity-text-light">
                <div className="flex items-center mb-1">
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
                  School Campus
                </div>
              </div>
            </div>
            <div className="card-hover border-l-4 border-trinity-secondary">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Football Game</h3>
                  <p className="text-sm text-trinity-text-light">Marching band performance</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-trinity-secondary">28</div>
                  <div className="text-xs text-trinity-text-light">SEP</div>
                </div>
              </div>
              <div className="text-sm text-trinity-text-light">
                <div className="flex items-center mb-1">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  6:30 PM
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Trinity Stadium
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/events" className="btn-secondary text-lg px-6 py-2">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Current Events of the Week */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">This Week's Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover">
              <div className="text-sm text-trinity-secondary font-semibold mb-2">Monday</div>
              <h3 className="text-lg font-semibold text-white mb-2">Rehearsal</h3>
              <p className="text-trinity-text-light text-sm mb-2">3:30 PM - 5:00 PM</p>
              <p className="text-trinity-text-light text-sm">Band Room</p>
            </div>
            <div className="card-hover">
              <div className="text-sm text-trinity-secondary font-semibold mb-2">Wednesday</div>
              <h3 className="text-lg font-semibold text-white mb-2">Sectionals</h3>
              <p className="text-trinity-text-light text-sm mb-2">3:30 PM - 4:30 PM</p>
              <p className="text-trinity-text-light text-sm">Various Rooms</p>
            </div>
            <div className="card-hover">
              <div className="text-sm text-trinity-secondary font-semibold mb-2">Friday</div>
              <h3 className="text-lg font-semibold text-white mb-2">Football Game</h3>
              <p className="text-trinity-text-light text-sm mb-2">7:00 PM</p>
              <p className="text-trinity-text-light text-sm">Home Stadium</p>
            </div>
            <div className="card-hover">
              <div className="text-sm text-trinity-secondary font-semibold mb-2">Saturday</div>
              <h3 className="text-lg font-semibold text-white mb-2">Competition</h3>
              <p className="text-trinity-text-light text-sm mb-2">9:00 AM</p>
              <p className="text-trinity-text-light text-sm">Regional Competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Highlights - Video clips, photos */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Weekly Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-hover overflow-hidden">
              <div className="aspect-video bg-trinity-gray-dark flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-trinity-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Spring Concert Preview</h3>
              <p className="text-trinity-text-light text-sm">Watch highlights from our recent rehearsal</p>
            </div>
            <div className="card-hover overflow-hidden">
              <div className="aspect-video bg-trinity-gray-dark flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-trinity-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Competition Photos</h3>
              <p className="text-trinity-text-light text-sm">Gallery from last week's performance</p>
            </div>
            <div className="card-hover overflow-hidden">
              <div className="aspect-video bg-trinity-gray-dark flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-trinity-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Behind the Scenes</h3>
              <p className="text-trinity-text-light text-sm">A day in the life of the band</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student of the Month */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Student of the Month</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card-hover text-center">
              <div className="w-32 h-32 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">John Smith</h3>
              <p className="text-trinity-secondary font-semibold mb-4">Senior - Trumpet Section</p>
              <p className="text-trinity-text-light mb-4">
                John has demonstrated exceptional leadership and dedication this month. His commitment to excellence 
                and willingness to help fellow band members has made a significant impact on our program.
              </p>
              <div className="flex justify-center gap-4 text-sm text-trinity-text-light">
                <div>
                  <span className="font-semibold text-white">Section:</span> Brass
                </div>
                <div>
                  <span className="font-semibold text-white">Years:</span> 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section of the Week */}
      <section className="py-16 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Section of the Week</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card-hover">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-trinity-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Percussion Section</h3>
                  <p className="text-trinity-secondary font-semibold mb-4">Featured This Week</p>
                  <p className="text-trinity-text-light">
                    The Percussion Section has shown outstanding teamwork and precision in recent performances. 
                    Their dedication to perfecting complex rhythms and maintaining perfect timing has been exemplary. 
                    Congratulations on being Section of the Week!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Shop Link - Prominent */}
      <section className="py-12 bg-trinity-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-trinity-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Visit Our Store</h2>
            <p className="text-xl text-white mb-6 max-w-2xl">
              Get your Trinity Trojan Band merchandise, uniforms, and accessories
            </p>
            <Link to="/store" className="bg-white text-trinity-secondary hover:bg-trinity-primary-lighter font-bold text-lg px-10 py-4 rounded transition-colors duration-200">
              Shop Now
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

      {/* Social Media Links */}
      <section className="py-12 bg-trinity-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Follow Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-trinity-primary-light hover:bg-trinity-secondary rounded-lg px-6 py-4 transition-all duration-200"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-white font-semibold group-hover:text-white">Facebook</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-trinity-primary-light hover:bg-trinity-secondary rounded-lg px-6 py-4 transition-all duration-200"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white font-semibold group-hover:text-white">Instagram</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-trinity-primary-light hover:bg-trinity-secondary rounded-lg px-6 py-4 transition-all duration-200"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="text-white font-semibold group-hover:text-white">Twitter</span>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-trinity-primary-light hover:bg-trinity-secondary rounded-lg px-6 py-4 transition-all duration-200"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-white font-semibold group-hover:text-white">YouTube</span>
            </a>
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

      {/* Flag Image */}
      <section className="py-8 bg-trinity-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img 
              src={trinityflagpic} 
              alt="Trinity Trojan Band Flag" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mini Sponsor Section - At the Bottom */}
      <section className="py-12 bg-trinity-primary border-t-4 border-trinity-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Sponsors</h2>
            <p className="text-xl text-trinity-text-light mb-6 max-w-2xl mx-auto">
              Thank you to our generous sponsors who support the Trinity Trojan Band program
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="w-32 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center">
                <span className="text-trinity-text-light text-sm">Sponsor Logo</span>
              </div>
              <div className="w-32 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center">
                <span className="text-trinity-text-light text-sm">Sponsor Logo</span>
              </div>
              <div className="w-32 h-20 bg-trinity-primary-light rounded-lg flex items-center justify-center">
                <span className="text-trinity-text-light text-sm">Sponsor Logo</span>
              </div>
            </div>
            <Link to="/sponsors" className="btn-accent text-lg px-8 py-3 inline-block">
              View All Sponsors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
