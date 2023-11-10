import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";

const ContactUs = () => {
    return (
        <div>
            <div>
          <div className="">
      <h2 className="text-4xl md:text-5xl text-center text-black font-bold  p-14">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-5 lg:px-0">

        <div className="card bg-base-100 border-2 border-teal-400  shadow-2xl">
         <p className="text-3xl font-bold w-28 mx-auto py-10 text-red-600 bg-gray-300 rounded-full shadow-lg items-center flex justify-center mt-8">
           <CiLocationOn></CiLocationOn>
          </p>
        
          <div className="card-body">
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>PO Box 1234 Collins Street</p>
              
              <p>West Victoria 8007 Australia</p>
        
            </div>
          </div>
        </div>

        <div className="card bg-base-100 border-2 border-teal-400  shadow-xl">
         <p className="text-3xl font-bold w-28 mx-auto py-10 text-red-600 bg-gray-300  rounded-full items-center flex justify-center mt-8">
           <FiPhoneCall></FiPhoneCall>
          </p>
        
          <div className="card-body">
          <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
          <p>+01 123 456 789</p> 
              <p>+01 987 654 321</p>
        
            </div>
          </div>
        </div>

        <div className="card bg-base-100 border-2 border-teal-400 shadow-xl">
         <p className="text-3xl font-bold w-28 mx-auto py-10 text-red-600 bg-gray-300  rounded-full items-center flex justify-center mt-8">
           <MdForwardToInbox></MdForwardToInbox>
          </p>
        
          <div className="card-body">
          <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
                <p>InKly.co@gmail.com</p> 
              <p>Blog.inKly@gmail.com</p>

        
            </div>
          </div>
        </div>
        </div>
       </div>
       </div>
        </div>
    );
};

export default ContactUs;