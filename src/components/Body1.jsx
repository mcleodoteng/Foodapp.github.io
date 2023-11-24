const Body1 = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      {/* {Background Overlay} */}
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods </span>Delivered
          </h1>
        </div>
        {/* Object cover to maintain the ration of the image */}
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Body1;
