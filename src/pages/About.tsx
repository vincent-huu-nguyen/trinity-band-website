import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trinity-primary to-trinity-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Trinity Band</h1>
          <p className="text-xl text-trinity-primary-lighter max-w-3xl mx-auto">
            Building musical excellence and character through comprehensive music education
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-trinity-primary mb-6">Our Mission</h2>
              <p className="text-lg text-trinity-primary-light mb-6">
                The Trinity High School Band program is dedicated to fostering musical excellence, 
                building character, and developing leadership skills through comprehensive music education. 
                We strive to create an inclusive environment where every student can discover their 
                musical potential and contribute to our collective success.
              </p>
              <p className="text-lg text-trinity-primary-light">
                Our program emphasizes not only technical proficiency but also the importance of 
                teamwork, discipline, and artistic expression. Through regular performances, 
                competitions, and community engagement, students develop confidence and a lifelong 
                appreciation for music.
              </p>
            </div>
            <div className="bg-trinity-gray rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-trinity-primary mb-4 text-center">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-trinity-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-trinity-primary font-medium">Excellence in Performance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-trinity-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-trinity-primary font-medium">Character Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-trinity-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-trinity-primary font-medium">Community Engagement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-trinity-secondary rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-trinity-primary font-medium">Lifelong Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-trinity-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-3">Concert Band</h3>
              <p className="text-trinity-primary-light">
                Our flagship ensemble featuring advanced repertoire and performance opportunities
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-3">Marching Band</h3>
              <p className="text-trinity-primary-light">
                Dynamic performances combining music and movement for football games and parades
              </p>
            </div>
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-trinity-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-trinity-primary mb-3">Music Theory</h3>
              <p className="text-trinity-primary-light">
                Comprehensive education in music fundamentals, composition, and analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Meet Our Director</h2>
          <div className="bg-trinity-gray rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="w-32 h-32 bg-trinity-primary-light rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-trinity-primary mb-3">Mr. John Smith</h3>
                <p className="text-trinity-secondary font-semibold mb-4">Director of Bands</p>
                <p className="text-trinity-primary-light mb-4">
                  With over 15 years of experience in music education, Mr. Smith has dedicated his career 
                  to inspiring young musicians and building exceptional band programs. His passion for 
                  music and commitment to student development has earned him recognition throughout the region.
                </p>
                <p className="text-trinity-primary-light">
                  Mr. Smith holds a Master's degree in Music Education and has led ensembles to numerous 
                  awards and honors at state and national levels. He believes in creating an environment 
                  where every student can thrive and discover their musical potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-trinity-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1995</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Program Founded</h3>
              <p className="text-trinity-primary-lighter text-sm">
                Trinity Band program established with 25 students
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2005</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">First State Award</h3>
              <p className="text-trinity-primary-lighter text-sm">
                Concert Band receives Superior rating at state festival
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2015</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Program Expansion</h3>
              <p className="text-trinity-primary-lighter text-sm">
                Marching Band program added with 60+ participants
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-trinity-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2024</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Today</h3>
              <p className="text-trinity-primary-lighter text-sm">
                Over 100 students across multiple ensembles
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
