import React from "react";

interface TestimonialProps {
  name: string;
  image: string; 
  text: string; 
}

const Testimonial: React.FC<TestimonialProps> = ({ name, image, text }) => {
  return (
    <div className="flex flex-col items-center bg-app-bg p-4 rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-30 h-30 object-cover rounded-full border-4 border-white"
      />
      <p className="text-lg font-bold mt-2 text-white">{name}</p>
      <blockquote className="text-gray-100 italic mt-4 px-8 text-center">
        {text}
      </blockquote>
    </div>
  );
};

// Exporting the testimonial component
export default Testimonial;
