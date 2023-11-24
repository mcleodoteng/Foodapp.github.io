import { categories } from "../data/data.js";

const Category = () => {
  //   console.log(categories);
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* {Category} */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rouned-lg p-4 items-center justify-between flex shadow-lg"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
