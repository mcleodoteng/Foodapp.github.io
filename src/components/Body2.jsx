const Body2 = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* {Cards} */}
      <div className="relative rounded-xl">
        {/* {Background Overlay} */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun&apos;s Out, BOGO&apos;S Out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black absolute mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
          alt="image"
        />
      </div>

      {/* {Cards} */}
      <div className="relative rounded-xl">
        {/* {Background Overlay} */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black absolute mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="image"
        />
      </div>

      {/* {Cards} */}
      <div className="relative rounded-xl">
        {/* {Background Overlay} */}
        <div className="absolute bg-black/50 w-full h-full text-white rounded-xl">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black absolute mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Body2;
