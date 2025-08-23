function TapFounders() {
  return (
    <section className="flex mt-24 flex-col md:flex-row items-start justify-between p-10 bg-white">
      {/* Left Side */}
      <div className="w-full h-auto md:w-1/2 mb-6 md:mb-0 ">
        <img
          src="https://i.pinimg.com/control/564x/1e/e0/2c/1ee02cf80ddecd0985bb22a711f73332.jpg" // Replace with actual image source
          alt="Our Founders"
          className="rounded-lg object-cover shadow-lg w-full sm:object-cover h-72 lg:h-96"
        />
      </div>

      {/* Right Side Question Thing... */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
        <h2 className="text-3xl font-bold text-black mb-4">Our Founders</h2>
        <p className="text-gray-500 mb-8">
          The visionaries behind our renewable future
        </p>
        {/* First Founder */}

        <div className="flex items-start mb-8">
          <img
            src="https://i.pinimg.com/736x/91/1e/01/911e01b43f920cbf51ad69d49f086f5a.jpg"
            alt="Abel Yosef"
            className="w-16 h-16 rounded-xl mr-4 object-cover"
          />
          
          <div>
            <h3 className="text-xl font-semibold text-black">Abel Yosef</h3>
            <p className="text-green-600">Engineer</p>
            <p className="text-gray-600">Junior Software developer</p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-green-500 hover:text-green-700">
                <img
                  src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000"
                  alt="FB"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <img
                  src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <img
                  src="https://img.icons8.com/?size=100&id=ZmG5l3ueI6FO&format=png&color=000000"
                  alt="Linkedin"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        <hr />
        <br />
        {/* Second FOunder */}

        <div className="flex items-start mb-8">
          <img
            src="https://i.pinimg.com/736x/79/b9/75/79b97506b530e2b5d65dbe6b12f6b282.jpg"
            alt="Ebrhaim Shifaw"
            className="w-16 h-16 rounded-xl mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-black">Ebrahim Shefaw</h3>
            <p className="text-green-600">Engineer</p>
            <p className="text-gray-600">Junior Software developer</p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-green-500 hover:text-green-700">
                <img
                  src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000"
                  alt="FB"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <img
                  src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <img
                  src="https://img.icons8.com/?size=100&id=ZmG5l3ueI6FO&format=png&color=000000"
                  alt="Linkedin"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TapFounders;
