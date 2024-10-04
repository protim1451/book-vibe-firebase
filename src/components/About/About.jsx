import React from 'react';

const About = () => {
    return (
        <div className="mx-4 my-8 lg:mx-32 lg:my-16">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-teal-600">About Book Vibe</h1>
                <p className="mt-4 text-lg text-gray-600">Discover, Read, and Get Inspired</p>
            </div>

            {/* Introduction Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-700">Our Story</h2>
                <p className="mt-4 text-gray-600">
                    Book Vibe started with a simple idea: to connect readers with books that inspire, educate, and entertain. Our platform
                    allows users to explore a diverse collection of books, share reviews, and build their personal reading lists. Whether you
                    are an avid reader or just beginning your literary journey, Book Vibe is the place where every book lover belongs.
                </p>
            </section>

            {/* Mission Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-700">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                    At Book Vibe, we are passionate about bringing readers closer to the books they love. Our mission is to:
                </p>
                <ul className="list-disc ml-8 mt-4 text-gray-600">
                    <li>Make it easy to discover books from various genres and authors.</li>
                    <li>Help readers keep track of their reading lists and wishlists.</li>
                    <li>Foster a community where users can share reviews, ratings, and book recommendations.</li>
                    <li>Promote a love for reading through curated book suggestions and personalized content.</li>
                </ul>
            </section>

            {/* Values Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-700">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-6 border rounded-lg bg-teal-100">
                        <h3 className="text-lg font-bold text-teal-600">Inclusion</h3>
                        <p className="mt-3 text-gray-600">
                            We believe in creating a space where everyone feels welcome, no matter their background or reading preferences.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg bg-teal-100">
                        <h3 className="text-lg font-bold text-teal-600">Quality</h3>
                        <p className="mt-3 text-gray-600">
                            Our platform offers high-quality recommendations, carefully curated reading lists, and verified user reviews.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg bg-teal-100">
                        <h3 className="text-lg font-bold text-teal-600">Innovation</h3>
                        <p className="mt-3 text-gray-600">
                            We are constantly innovating to enhance your reading experience through new features, smart suggestions, and an intuitive user interface.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-700">Meet the Team</h2>
                <p className="mt-4 text-gray-600">
                    Behind Book Vibe is a small, dedicated team of book enthusiasts, developers, and designers working together to deliver the best reading platform for you. Our team is driven by a passion for literature and technology, ensuring that your experience is seamless, engaging, and rewarding.
                </p>
            </section>

            {/* Call to Action Section */}
            <section className="text-center">
                <h2 className="text-2xl font-bold text-gray-700">Join the Book Vibe Community</h2>
                <p className="mt-4 text-gray-600">
                    Ready to dive into the world of books? Sign up today, start exploring, and become part of a community that shares your passion for reading.
                </p>
                <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600">
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default About;
