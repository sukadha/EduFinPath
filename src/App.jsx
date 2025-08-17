import React, { useState, Suspense } from 'react';
import { ArrowRight, TrendingUp, Users, BarChart3, CheckCircle, MapPin, CreditCard, Settings, Unlock, Phone, MessageCircle, Mail, AlertCircle } from 'lucide-react';

const Home = React.lazy(() => import('C:/Users/koppa/Downloads/business/src/Home.jsx'));

// Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/kopparthilakshmisukadha@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
          _next: 'https://yourdomain.com/thank-you',
          _captcha: false,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-300 to-gray-200 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat-x" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='25'/%3E%3Ccircle cx='15' cy='15' r='10'/%3E%3Ccircle cx='45' cy='15' r='8'/%3E%3Ccircle cx='15' cy='45' r='12'/%3E%3Ccircle cx='45' cy='45' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our courses, educational loans, or financial resources? We're here to help. Whether you need guidance on choosing the right program, 
            support with registration, or details about financial assistance, our team is just a message away.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <p className="text-gray-600 mb-12">
              Have questions about courses or education loans? Our team is here to guide you and support your journey toward a brighter future.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">784-287-2322</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600">799-332-1836</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">kopparthilakshmisukadha@gmail.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Our Shop</h3>
                <p className="text-gray-600 text-sm">1234 Oak Ridge Avenue, CA 90210</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4070984368254!2d-74.00581368416929!3d40.717496279328356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzAzLjAiTiA3NMKwMDAnMjEuMCJX!5e0!3m2!1sen!2sus!4v1635959471833!5m2!1sen!2sus"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <span className="text-red-700">Failed to send message. Please try again or contact us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-medium py-3 px-6 rounded-lg transition duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gray-600 hover:bg-gray-700'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-xl font-bold">EduFin Path</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students with financial literacy, education loan support, and learning resources for a brighter future.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Our Store</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Courses</li>
                <li>Service</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Further Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Terms & Condition</li>
                <li>Privacy</li>
                <li>Licensing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>1234 Oak Ridge Avenue, CA 90210</p>
                <p>What's Up: 799-332-1836</p>
                <p>📞 784-287-2322</p>
                <p>✉️ kopparthilakshmisukadha@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduFin Path | Designed by TailWindCSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Show Contact Page
  if (showContact) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-teal-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-800 font-bold text-sm">E</span>
                </div>
                <span className="font-bold text-lg">EduFin Path</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowContact(false)} className="hover:text-teal-200 transition-colors">Home</button>
                <a href="#" className="hover:text-teal-200 transition-colors">About us</a>
                <button onClick={() => setShowContact(true)} className="hover:text-teal-200 transition-colors">Contact Us</button>
              </div>
              
              <button
                className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full transition-colors"
                onClick={() => window.location.href = "https://www.youtube.com/watch?v=J6Al_szv8uo"}
              >
                Start Free Trial
              </button>
            </nav>
          </div>
        </header>

        <ContactPage />
      </div>
    );
  }

  if (showHome) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-teal-800 text-white fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-800 font-bold text-sm">E</span>
                </div>
                <span className="font-bold text-lg">EduFin Path</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => setShowHome(false)} className="hover:text-teal-200 transition-colors">Home</button>
                <a href="#" className="hover:text-teal-200 transition-colors">About us</a>
                <button onClick={() => setShowContact(true)} className="hover:text-teal-200 transition-colors">Contact Us</button>
              </div>
              
              <button
                className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full transition-colors"
                onClick={() => window.location.href = "https://www.youtube.com/watch?v=J6Al_szv8uo"}
              >
                Start Free Trial
              </button>
            </nav>
          </div>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-teal-800 font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-lg">EduFin Path</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-teal-200 transition-colors">Home</a>
              <a href="#" className="hover:text-teal-200 transition-colors">About us</a>
              <button onClick={() => setShowContact(true)} className="hover:text-teal-200 transition-colors">Contact Us</button>
            </div>
            
            <button
              className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-full transition-colors"
              onClick={() => window.location.href = "https://www.youtube.com/watch?v=J6Al_szv8uo"}
            >
            Start Free Trial
          </button>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <p className="text-teal-200 mb-4">Welcome to Financial</p> */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empower your {' '}
                <span className="text-teal-300">Education</span> Through Financial Support
              </h1>
              <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                Empowering your education journey with the right financial support and resources – helping you learn, achieve, and build a brighter future.
              </p>
              <button 
                className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                onClick={() => setShowContact(true)}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://i.pinimg.com/1200x/05/2a/f7/052af726c9b34455e82816fb8831a3a8.jpg"
                  alt="Professional woman"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years of Experience in Education Finance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Right Support. Every Step.</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether it's funding your education or guiding your financial journey, we ensure you get the right support at the right time. 
                Our trusted resources and personalized guidance help you learn, grow, and secure a brighter future.
              </p>
              {/* <ArrowRight className="w-5 h-5 text-teal-600 mx-auto mt-4" /> */}
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bright Minds. Strong Futures</h3>
              <p className="text-gray-600 leading-relaxed">
                From learning to achieving, our platform combines expert knowledge, financial guidance, 
                and innovative tools with a shared mission — empowering your education and shaping lasting success.
              </p>
              {/* <ArrowRight className="w-5 h-5 text-teal-600 mx-auto mt-4" /> */}
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Through knowledge and financial guidance, we empower you to make informed choices, 
                minimize debt stress, and unlock your true potential in education and beyond.
              </p>
              {/* <ArrowRight className="w-5 h-5 text-teal-600 mx-auto mt-4" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://i.pinimg.com/1200x/da/3b/5a/da3b5ad329988b27f6c271c776280eb0.jpg"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
                <div className="bg-white rounded-lg shadow-lg">
                  <img 
                    src="https://i.pinimg.com/1200x/d1/ee/af/d1eeaf3c3d082f05cedd72f06fbf7cd0.jpg"
                    alt="Financial planning"
                    className="rounded-lg"
                  />
                  {/* <div className="h-8 bg-gradient-to-r from-teal-200 to-teal-400 rounded"></div> */}
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-800 rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-xs">Growth</div>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-teal-600 font-medium mb-7">About us</p>
              <h2 className="text-4xl font-bold mb-8">
                Trusted Guidance for Educational Growth
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Strategic Education Financing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide personalized financial support and learning resources 
                    tailored to your academic goals, challenges, and future aspirations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Boost Your Knowledge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advance your journey with expert-led courses, e-books, and certification programs designed to expand your skills, 
                    improve financial literacy, and empower your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-200 mb-4">Registration</p>
              <h2 className="text-4xl font-bold mb-6">
                Our Easy Steps For Registration
              </h2>
              <p className="text-teal-100 mb-8 leading-relaxed">
                Getting started is quick and simple. With just a few steps, 
                you'll gain full access to our learning resources and financial support tools. 
                Whether on mobile or desktop, the process is secure, seamless, and designed for your convenience.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-teal-300" />
                    <span>Sign in with Your Student/ID Card</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-300" />
                    <span>Select Your Country/Location</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Unlock className="w-5 h-5 text-teal-300" />
                    <span>Complete Basic Profile Setup</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-teal-300" />
                    <span>Configure Your Preferences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-teal-300" />
                    <span>Submit Application/Transaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-300" />
                    <span>Enjoy Full Access to Courses</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Financial growth"
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
                  alt="Business meeting"
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-teal-400 rounded-full"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-teal-400 rounded-full"></div>
              <div className="absolute -bottom-4 left-1/3 w-2 h-2 bg-teal-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}