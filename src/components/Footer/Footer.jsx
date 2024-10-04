import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="mt-5 footer footer-center bg-gradient-to-r from-teal-200 via-teal-300 to-teal-400 text-base-content p-10 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Company</h2>
                        <nav className="grid grid-flow-row gap-2">
                            <a className="link link-hover flex items-center">
                                <span>About us</span>
                            </a>
                            <a className="link link-hover flex items-center">
                                <span>Contact</span>
                            </a>
                            <a className="link link-hover flex items-center">
                                <span>Jobs</span>
                            </a>
                            <a className="link link-hover flex items-center">
                                <span>Press kit</span>
                            </a>
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Support</h2>
                        <nav className="grid grid-flow-row gap-2">
                            <a className="link link-hover flex items-center">
                                <span>Help Center</span>
                            </a>
                            <a className="link link-hover flex items-center">
                                <span>Terms of Service</span>
                            </a>
                            <a className="link link-hover flex items-center">
                                <span>Privacy Policy</span>
                            </a>
                            <a className="link link-hover flex items-center">
                                <span>Cookie Policy</span>
                            </a>
                        </nav>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                        <nav className="grid grid-flow-col gap-4">
                            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-xl" />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl" />
                            </a>
                        </nav>
                        <p className="mt-3 text-sm">Stay connected with us on social media.</p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-300" />

                {/* Newsletter Signup */}
                <div className="text-center">
                    <h2 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h2>
                    <p className="mb-4 text-sm">Get the latest updates, promotions, and news delivered directly to your inbox.</p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-60 mr-2"
                        />
                        <button className="btn bg-teal-500 text-white">Subscribe</button>
                    </div>
                </div>

                {/* Copyright */}
                <aside className="mt-8 text-center">
                    <p className="text-sm">
                        Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
                        <span className="font-bold">Book Vibe</span>
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
