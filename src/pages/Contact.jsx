const Contact = () => {

  const handleFormSubmit = (formData) => {
     const formInputData = Object.formEntries(formData.entries());
  };

  return (
    <div className="mt-10 flex justify-center items-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg border-[1px] border-zinc-700 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-300 mb-6 text-center text-sm sm:text-base">
          We value your feedback and inquiries. Reach out to us using the contact form below, and our dedicated team will get back to you as soon as possible.
        </p>
   
        <form action={handleFormSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            autoComplete="off"
            placeholder="Enter your username"
            required
            className="w-full p-4 rounded-lg bg-transparent border-[1px] border-zinc-700  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />      
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your email"
            required
            className="w-full p-4 rounded-lg bg-transparent border-[1px] border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
          <textarea
            name="message"
            rows="5"
            autoComplete="off"
            required
            placeholder="Enter your message"
            className="w-full p-4 rounded-lg bg-transparent border-[1px] border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-zinc-500 resize-none"
          ></textarea>  
          <button
            type="submit"
            className="w-full py-3 mt-4  border-[1px] border-zinc-700 hover:border-zinc-50 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
