import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction */}
      <section className="text-center mb-8">
  <h1 className="text-3xl font-bold text-blue-600 whitespace-nowrap">
    Welcome to <span className="text-[#4FDBF6]"> बाबा बी.के. स्मारक विद्यालय</span>
  </h1>
  <p className="text-lg text-gray-700 mt-2">A place of excellence in education and community.</p>
</section>


      {/* Mission and Vision */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
        <p className="text-lg text-gray-700 mt-2">To empower students through quality education and holistic development.</p>
      </section>

      {/* History */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">Our History</h2>
        <p className="text-lg text-gray-700 mt-2">Founded in [Year], [College Name] has been a beacon of knowledge and innovation.</p>
      </section>

      {/* Campus Life */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">Campus Life</h2>
        <p className="text-lg text-gray-700 mt-2">Experience a vibrant community with diverse student organizations and events.</p>
      </section>

      {/* Accreditation and Achievements */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">Accreditation and Achievements</h2>
        <p className="text-lg text-gray-700 mt-2">Accredited by [Accrediting Body], recognized for excellence in [Field].</p>
      </section>

      {/* Leadership */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">Leadership</h2>
        <p className="text-lg text-gray-700 mt-2">Led by President [Name], committed to fostering an inclusive academic environment.</p>
      </section>

      {/* Contact Information */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-blue-600">Contact Us</h2>
        <p className="text-lg text-gray-700 mt-2">For more information, reach out to us at [Contact Information].</p>
      </section>
    </div>
  );
};

export default About;
