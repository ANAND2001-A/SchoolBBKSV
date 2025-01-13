import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

//sdjhfgauyfguih
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_msch3b', 'tmplate_mlny9t8', form.current, {
                publicKey: 'QAJJWF5gOlV6ZCU-M',
            })
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message Sent Successfully!');
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
        e.target.reset();
    };

    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916843.1597317816!2d82.1393520125!3d26.150493600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990570051e6b28b%3A0x4405712d68fd4e2b!2sBaba%20Bk%20School!5e0!3m2!1sen!2sin!4v1736336965711!5m2!1sen!2sin";

    return (
        <>
            <dev title="Contact us " />
            <section className="p-8">
                <div className="container mx-auto shadow-xl flex flex-col lg:flex-row space-y-8 lg:space-y-0">
                    <div className="flex-1">
                        <iframe
                            src={map}
                            width="600"
                            height="450"
                            className="w-full h-full border-none"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="flex-1 p-8">
                        <h1 className="text-3xl font-semibold text-blue-600">Contact us</h1>
                        <p className="text-lg text-gray-500 mt-2">We're open for any suggestion or just to have a chat</p>

                        <div className="grid gap-4 mt-8">
                            <div className="bg-gray-100 p-4 rounded-md">
                                <h4 className="font-semibold">ADDRESS:</h4>
                                <p className="text-sm mt-2">Baba Bk School Dostpur, Uttar Pradesh 223225</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-md">
                                <h4 className="font-semibold">EMAIL:</h4>
                                <p className="text-sm mt-2">info@bbkvidyalaya.com</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-md">
                                <h4 className="font-semibold">PHONE:</h4>
                                <p className="text-sm mt-2">+91 9918341985, +91 9026110048, +91 8948557071</p>
                            </div>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="mt-8">
                            <div className="flex space-x-4 mb-6">
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Name"
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full p-4 border border-gray-300 rounded-md"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                            />
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Create a message here..."
                                required
                                className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#4FDBF6] text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </form>

                        <h3 className="mt-8 text-l font-medium">Follow us here...</h3>
                        <div className="flex space-x-6 mt-4 ">
                            <a href="https://www.facebook.com/share/1Cs6K4qpiD/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-blue-600 text-lg" />
                            </a>
                            <a href="https://www.instagram.com/baba_b.k.smarak?igsh=MTN4Nnljanc1ZnR0OA==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className= "text-pink-600 text-lg" />
                            </a>
                            <a href="https://x.com/xt_zeni" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-blue-400 text-lg" />
                            </a>
                            <a href="https://www.youtube.com/@Zeni" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-red-600 text-lg" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;
