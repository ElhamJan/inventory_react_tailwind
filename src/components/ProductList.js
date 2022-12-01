const ProductList = ({ products, categories, setProducts }) => {
  const findCategory = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };

  const deleteProduct = (id) => {
    const filteredProduct = products.filter((p) => p.id !== parseInt(id));
    setProducts(filteredProduct);
  };

  return (
    <div>
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product list</h2>
      <div className="overflow-x-auto">
        {products.map((p) => {
          return (
            <div
              key={p.id}
              className="flex items-center justify-between text-slate-400 mb-2 w-full min-w-[400px]"
            >
              <span>{p.title}</span>
              <div className="flex items-center gap-x-3">
                <span>{new Date(p.updatedAt).toLocaleDateString("fa-IR")}</span>
                <span className="block px-4 py-0.5 border border-slate-400 rounded-2xl text-sm">
                  {findCategory(p.categoryId)}
                </span>
                <span className="flex justify-center items-center rounded-full h-6 w-6 text-sm bg-slate-600 border-2 border-slate-300">
                  {p.quantity}
                </span>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="delete-product-btn border border-red-400 rounded-2xl px-2 py-0.5 text-sm text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
