const Error = () => {
  return (
    <div className="bg-gradient-to-r from-[#74d3d0bb] to-[rgba(65,117,138,0.83)] ">
      <div className="text-center flex flex-col items-center h-screen justify-center text-black space-y-5">
        <h3 className="text-7xl font-bold">404</h3>
        <h2 className="text-3xl">Opps! Page not found</h2>
        <p className="text-xl">
          Sorry, the page you are looking for does not exist. Maybe the URL is
          incorrect, or the page no longer exist.
        </p>
      </div>
    </div>
  );
};

export default Error;
