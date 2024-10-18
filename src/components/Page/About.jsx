import React from 'react'
import img1 from '../../../public/img1.jpg'
const About = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto py-16">
        {/* About Us Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h1>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a passionate team dedicated to bringing insightful content, helpful resources, and innovative tools for students and professionals alike. Our platform is built to simplify access to academic resources, empowering users to succeed in their educational and professional journeys.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to make learning more accessible, efficient, and enjoyable. Whether it's providing notes, tutorials, or career advice, we strive to create a platform that serves students across all academic stages. We believe in the power of knowledge and are committed to supporting lifelong learning.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Meet Our Team</h2>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={img1}
                alt="Team Member 1"
                className="w-[150px] h-[150px] rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Sandeep Kumar</h3>
              <p className="text-gray-500">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                With a background in data science and software engineering, Sandeep leads the team with a passion for innovation and student success.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={img1}
                alt="Team Member 2"
                className="w-[150px] h-[150px] rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Rohit Singh</h3>
              <p className="text-gray-500">CTO</p>
              <p className="text-gray-600 mt-2">
                Rohit is responsible for the technology behind the platform, ensuring a seamless experience for our users with cutting-edge tools.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src={img1}
                alt="Team Member 3"
                className="w-[150px] h-[150px] rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Anjali Sharma</h3>
              <p className="text-gray-500">Content Manager</p>
              <p className="text-gray-600 mt-2">
                Anjali ensures that all content is accurate, insightful, and valuable, helping students get the most out of our resources.
              </p>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default About
