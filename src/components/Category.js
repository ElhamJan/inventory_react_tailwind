import { useState } from "react";

const Category = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories((prevState) => [
      ...prevState,
      {
        ...categoryFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`}>
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add new category
        </h2>
        <form className="bg-slate-700 rounded-xl p-4 flex flex-col gap-y-4">
          <div>
            <label
              className="block mb-1 text-slate-400"
              htmlFor="category-title"
            >
              Title
            </label>
            <input
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              type="text"
              name="title"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              className="block mb-1 text-slate-400"
              htmlFor="category-desc"
            >
              Description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              name="description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={addNewCategoryHandler}
              className="flex-1 bg-slate-500 rounded-xl text-slate-200 py-2"
            >
              Add new category
            </button>
            <button
              className="flex-1 border border-slate-500 rounded-xl text-slate-300 py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg font-medium mb-4 ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow(!isShow)}
      >
        Add new category
      </button>
    </section>
  );
};

export default Category;
