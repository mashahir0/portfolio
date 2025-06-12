
import React from "react";

const About: React.FC = () => {
  return (
    <div >
      <div>
        <h1 className="font-serif text-2xl font-semibold mt-5 md:mt-10 pl-5 md:pl-10 lg:pl-50 ">
          About Me
        </h1>
        <hr className="w-3/4 h-0.5 bg-gray-900 ml-5 md:ml-10 lg:ml-50 mt-2" />

        {/* Content Section */}
        
       <div className="mt-5 w-full text-center p-5 md:p-10 lg:ml-0">
  <p className="font-serif text-base text-justify max-w-7xl mx-auto leading-relaxed font-serif">
    I'm  Mashahir, a self-taught full-stack developer passionate about leveraging
    cutting-edge technologies to solve complex digital challenges. With hands-on experience
    in frameworks like{" "}
    <span className="font-bold">
      Node.js, React.js, Express.js
    </span>,{" "}
    I specialize in building scalable and efficient applications using{" "}
    <span className="font-bold">TypeScript, JavaScript, Redux, MongoDB, and PostgreSQL</span>.
    <br />
    <br />
    I’m a BCA graduate, and during my college years, I actively worked on various projects that helped shape my journey into full-stack development. I have embraced architectural principles like{" "}
    <span className="font-bold">
      Clean Architecture, MVC
    </span>, and I’m skilled in integrating tools such as{" "}
    <span className="font-bold">
       Redis, Docker and AWS
    </span>{" "}
    to enhance system design and performance.
    <br />
    <br />
    My technical repertoire extends to a wide range of services and APIs including{" "}
    <span className="font-bold">
      Razorpay, Cloudinary,  Firebase,
      Node Mailer, OAuth 2.0, and JWT
    </span>. I also utilize tools like{" "}
    <span className="font-bold">Postman</span> for testing and project management.
    <br />
    <br />
    I take pride in writing clean, maintainable, and scalable code, and I thrive in
    fast-paced environments that require end-to-end ownership—from architecture to
    deployment—with a focus on{" "}
    <span className="font-bold">CI/CD pipelines and cloud-native solutions</span>.
    <br />
    <br />
    Beyond development, I'm an avid learner and active contributor to the developer
    community through{" "}
    <span className="font-bold">open-source projects and coding competitions</span>.
    I'm always eager to connect, collaborate, and build impactful digital experiences.
  </p>
</div>


        <hr className="w-full h-0.5 bg-gray-900 mt-6" />

        {/* Footer Section */}
        <div className="mt-3 pb-3">
          <h1 className="font-serif text-center text-gray-500">
            © 2025 Mohammed Mashahir.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;

