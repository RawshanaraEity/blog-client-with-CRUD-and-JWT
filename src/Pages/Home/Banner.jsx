

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mS6yHhL/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content h-full w-full bg-gradient-to-r from-[#37aca8bb] to-[rgba(82,164,197,0.13)] text-center text-neutral-content">
          <div className="w-2/3 text-white">
            <h1 className="mb-5 text-6xl font-bold">Welcome To InKly.co</h1>
            <p className="mb-5 text-2xl">We promote positive culture through inspiring articles on health, design, and web.Perfect for magazine, newsletter, professional and personal blog publishing.</p>
            <button className="btn btn-accent text-white">Get Started</button>
          </div>
        </div>
      </div>
       
    );
};

export default Banner;