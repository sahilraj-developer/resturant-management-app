import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      {/* <div className="bg-white shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <img
            src="https://via.placeholder.com/150x50?text=Restaurant+Logo"
            alt="Restaurant Logo"
            className="w-32"
          />
          <nav className="space-x-8">
            <a href="#" className="text-gray-800 font-semibold hover:text-gray-600">
              Home
            </a>
            <a href="#about" className="text-gray-800 font-semibold hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="text-gray-800 font-semibold hover:text-gray-600">
              Contact
            </a>
          </nav>
        </div>
      </div> */}

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=2048x2048&w=is&k=20&c=0UD2e_KMbkkMcx4j9ZaxGf-z1nMHxch9hi3_0BQmuAo=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our restaurant! Founded with the belief that food brings people together, we pride ourselves on offering exceptional meals made with the finest ingredients. Whether you're here for a casual dinner or a special celebration, we promise a dining experience you'll cherish.
          </p>
        </div>

        {/* Restaurant History */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Our History</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our journey began in 2010 with a passion for crafting delicious, locally sourced meals. From humble beginnings, we quickly became a favorite spot for food lovers in the area. Over the years, we've expanded our menu, refined our offerings, and created a warm, welcoming atmosphere where guests can enjoy top-quality meals and unforgettable moments.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="bg-white py-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Mission & Values</h3>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We are committed to providing high-quality, wholesome food made with fresh, locally sourced ingredients. Our mission is to create lasting memories through exceptional dining experiences. We're not just about serving food; we aim to serve joy, laughter, and connection to every guest that walks through our doors.
            </p>
            <ul className="list-disc text-left mx-auto space-y-3 text-lg text-gray-600">
              <li><strong>Quality:</strong> We use the freshest ingredients to create mouthwatering dishes.</li>
              <li><strong>Sustainability:</strong> We embrace eco-friendly practices and support local farmers.</li>
              <li><strong>Community:</strong> We believe in giving back to the community that supports us.</li>
              <li><strong>Innovation:</strong> Our chefs are always experimenting with new flavors and ideas.</li>
            </ul>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chef John"
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Chef John Doe</h4>
              <p className="text-gray-600">Executive Chef</p>
              <p className="text-gray-600 mt-2">Chef John brings over 20 years of culinary expertise to our kitchen, specializing in modern American cuisine with a focus on seasonal ingredients.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sarah Smith"
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Sarah Smith</h4>
              <p className="text-gray-600">Restaurant Manager</p>
              <p className="text-gray-600 mt-2">Sarah ensures every guest has a memorable experience, with her passion for hospitality and dedication to service excellence.</p>
            </div>
            <div className="text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mike Lee"
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Mike Lee</h4>
              <p className="text-gray-600">Head Waiter</p>
              <p className="text-gray-600 mt-2">Mike leads our service team with grace, ensuring that every guest is treated with the utmost care and attention to detail.</p>
            </div>
          </div>
        </div>

        {/* Our Dishes Section */}
        <div className="bg-gray-100 py-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Signature Dishes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dish 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">Grilled Salmon</h4>
              <p className="text-gray-600 mt-2">A tender, perfectly grilled salmon fillet served with roasted vegetables and a zesty lemon sauce.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Dish 2"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">Signature Burger</h4>
              <p className="text-gray-600 mt-2">A juicy, flavorful burger made with grass-fed beef, topped with melted cheese, fresh lettuce, and a house-made sauce.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1674106348025-0d45c1b8ff4a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dish 3"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">Vegan Buddha Bowl</h4>
              <p className="text-gray-600 mt-2">A wholesome and colorful bowl packed with quinoa, roasted veggies, avocado, and a tahini dressing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Foodies Delight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
