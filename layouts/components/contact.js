import React, { useState } from "react";
import Swal from "sweetalert2";
import { Camera } from 'lucide-react';



const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);

        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "We will connect back soon",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });

        // Optional: Clear form
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };


    return (
        <section
            id="contact"
            className="relative section w-full h-[90vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/DESPU.webp')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-lg w-full">
                <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <textarea
                        name="message"
                        rows="4"
                        required
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full  btn btn-primary z-0 py-3"
                        onClick={handleSubmit}
                    >
                        Send Message
                    </button>
                </form>
                <div className="w-full mt-3 px-4 py-3 rounded-xl border border-white/30 bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-300">
                <p className="text-[20px]">For any Query Contact:</p>
                    <p className="capitalize text-[18px] font-bold">program secretary</p>
                    <p>Dr. Tushar Deshmukh</p>
                    <p>+91 9822838138</p>


                </div>
            </div>
            
        </section>
        
    );
};

export default ContactForm;
