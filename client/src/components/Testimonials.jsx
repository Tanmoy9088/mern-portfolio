// src/components/Testimonials.jsx
import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Smith',
      feedback: 'An exceptional developer who delivers quality work on time.',
    },
    {
      name: 'John Doe',
      feedback: 'Highly professional and great to work with.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
              <p className="mb-4 text-gray-700 dark:text-gray-300">"{testimonial.feedback}"</p>
              <p className="text-right font-semibold text-gray-800 dark:text-gray-200">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
