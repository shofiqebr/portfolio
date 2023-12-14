const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="images/profile.jpg"
          className=" pl-60 h-80 rounded-lgS"
          
        />
        <img src="images/sideimage.jpg" alt="" className="w-40  lg:absolute top-20 right-20 z-50"/>
        <button className="btn  absolute top-[450px] right-96 btn-accent">Frontend Developer</button>

        <div>
            <p>Hi I'm <br /></p>
          <h1 className="text-5xl font-bold">Md. Shofiqul Islam</h1>
          <p className="py-6">
            I am a frontend react Developer. <br />

          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
