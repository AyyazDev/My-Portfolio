import { Zoom } from "react-awesome-reveal";

export default function Contact() {
  return (
 <section className="flex flex-col items-center justify-center text-white py-22 px-4">
  <div className="text-center mb-12">
    <h2 className="text-3xl 2xl:text-5xl zoom-125:lg:text-3xl font-bold mb-12 2xl:mb-12 border-b-2 border-blue-500 pb-2 inline-block">
      Contact
    </h2>
  </div>

  <div className="w-full flex justify-center">
 <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 justify-center max-w-[1600px] w-full px-4 lg:px-20">
    {/* Your Zoom Card */}      <Zoom duration={450} fraction={0.05} damping={0.15}>
        <div className="animated-border rounded-xl p-0.5">
          <div className="flex flex-col items-center justify-center p-6 skills-bg rounded-xl shadow-lg w-full">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-300 mb-6 text-center">
              Have something to discuss? Send me a message and let's talk.
            </p>
            <form className="w-full flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-[#111] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" />
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-[#111] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" />
              <textarea placeholder="Your Message" className="w-full p-3 rounded-md bg-[#111] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Zoom>
    </div>
  </div>
</section>


  );
}
