import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";
import Footer from "../Component/FooterDiv/Footer";
import contactus from "../assets/contactus.png";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface FormEmailer {
  name: string;
  email: string;
  message: string;
}
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormEmailer>();

  const onSubmit: SubmitHandler<FormEmailer> = async (data) => {
    console.log(data);
    try {
      await emailjs.send(
        "service_pgoqlfl",
        "template_aur2jov",
        {
          to_email: "saadhaouri@gmail.com", // Replace with your email
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "7GO8J5jnmGWpCutrY" // Replace with your EmailJS user_id
      );
      console.log("test message");
      console.log(data.message);
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    }
    reset();
  };
  return (
    <div className="contact">
      <h2 className="text-[52px]  text-center font-bold text-blueColor ">
        Contact us
      </h2>
      <div className="flex items-center justify-center flex-col lg:flex-row p-0">
        <div className="lg:w-1/2 p-2 flex flex-col">
          <img width="80%" src={contactus} alt="" />
        </div>

        <div className=" w-[30%] h-[600px] bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-3xl text-center font-bold mb-6">
            Contact the support
          </h2>
          <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full py-3 px-4 border border-gray-300 rounded placeholder-gray-600 focus:outline-none focus:border-blueColor"
                placeholder="Your Name"
                {...register("name", { required: true, maxLength: 20 })}
              />

              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full py-3 px-4 border border-gray-300 rounded placeholder-gray-600 focus:outline-none focus:border-blueColor"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                rows="4"
                className="w-full py-3 px-4 border border-gray-300 rounded placeholder-gray-600 focus:outline-none focus:border-blueColor"
                placeholder="Your Message"
              ></textarea>
              <p>{errors.message}</p>
            </div>

            <button
              type="submit"
              className="w-full bg-blueColor text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="social-media flex justify-evenly text-[26px] rounded-lg bg-blueColor m-[20px]  ">
        <div className="test text-blue-50 m-12">
          <h2 className="text-3xl font-bold text-blue-50 mb-6">Get In Touch</h2>
          <p className="text-lg mb-6">
            If you have any questions or suggestions, don't hesitate to reach
            out. We appreciate your feedback and are here to help you.
          </p>
          <div className="mb-6">
            <p className="text-lg mb-2">
              Email:{" "}
              <a href="mailto:info@jobfinder.com" className="underline">
                info@jobfinder.com
              </a>
            </p>
            <p className="text-lg">Phone: (123) 456-7890</p>
          </div>
        </div>

        <a href="" className=" flex items-center m-12 text-white">
          {" "}
          <FaFacebook /> Facebook{" "}
        </a>
        <a href="" className=" flex  items-center m-12 text-white">
          {" "}
          <FaInstagram /> Instagram{" "}
        </a>
        <a href="" className=" flex items-center m-12 text-white">
          {" "}
          <FaLinkedin /> Linkedin{" "}
        </a>
        <a href="" className=" flex items-center m-12  text-white">
          {" "}
          <FaX /> X{" "}
        </a>
      </div>

      <div className="location  mb-8">
        <h2 className="text-[42px] text-center font-bold text-blueColor mb-4">
          Our Location
        </h2>
        <div className="map-container p-8  bg-greyIsh mr-6 flex rounded-lg border-black justify-center ">
          <iframe
            className="rounded-lg"
            title="Kenitra, Morocco"
            width="90%"
            height="900"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.5076471364548!2d-6.552087172629003!3d34.253206722959405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda757e757933a3f%3A0x767e892da0cddbde!2sPharmacie%20Assafar!5e0!3m2!1sfr!2sma!4v1701704945034!5m2!1sfr!2sma"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
