import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Products from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    let result = products;

    result = searchFilter(result);
    result = categoryFilter(result);
    result = sortFilter(result);

    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const categoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const searchFilter = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortFilter = (array) => {
    let sorttedProducts = [...array];

    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.updatedAt) > new Date(b.updatedAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.updatedAt) > new Date(b.updatedAt) ? 1 : -1;
      }
    });
  };

  const categoryFilter = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCategories(savedCategories);
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <div>
      <div className="bg-slate-800 pb-4 min-h-screen">
        <Navbar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <Category setCategories={setCategories} />
          <Products categories={categories} setProducts={setProducts} />
          <Filter
            onSort={sortHandler}
            onSearch={searchHandler}
            sort={sort}
            searchValue={searchValue}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectedCategory={categoryHandler}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
