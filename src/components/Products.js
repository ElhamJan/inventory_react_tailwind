import { useState } from "react";

const Products = ({ categories, setProducts }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = (e) => {
    setProductsFormData({
      ...productsFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    setProducts((prevState) => [
      ...prevState,
      {
        ...productsFormData,
        updatedAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);

    setProductsFormData({
      title: "",
      quantity: 0,
      categoryId: "",
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add new Product</h2>
      <form className="bg-slate-700 rounded-xl p-4 flex flex-col gap-y-4">
        <div>
          <label className="block mb-1 text-slate-400" htmlFor="product-title">
            Title
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            type="text"
            name="title"
            value={productsFormData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            className="block mb-1 text-slate-400"
            htmlFor="product-quantity"
          >
            Quantity
          </label>
          <input
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            name="quantity"
            type="number"
            value={productsFormData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            className="block mb-1 text-slate-400"
            htmlFor="product-category"
          >
            Category
          </label>
          <select
            name="categoryId"
            value={productsFormData.categoryId}
            className="bg-transparent text-slate-400 rounded-xl w-full"
            onChange={changeHandler}
          >
            <option className="bg-slate-500 text-slate-300" value="">
              Select a category
            </option>
            {categories.map((c) => {
              return (
                <option
                  key={c.id}
                  className="bg-slate-500 text-slate-300"
                  value={c.id}
                >
                  {c.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProduct}
            className="flex-1 bg-slate-500 rounded-xl text-slate-200 py-2"
          >
            Add new product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Products;
