import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle category selection
  const toggleCategory = (e) => {
    const val = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  // Toggle subcategory selection
  const toggleSubCategory = (e) => {
    const val = e.target.value;
    setSelectedSubCategories((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  // Apply filters and search
  const applyFilter = () => {
    let productsCopy = Array.isArray(products) ? products.slice() : [];

    if (showSearch && search) {
      productsCopy = productsCopy.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length) {
      productsCopy = productsCopy.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (selectedSubCategories.length) {
      productsCopy = productsCopy.filter((p) =>
        selectedSubCategories.includes(p.subCategory)
      );
    }

    setFilteredProducts(productsCopy);
  };

  // Sort products based on selected sort type
  const sortProduct = () => {
    const fp = filteredProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fp.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(fp.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
    }
  };

  // Initialize filteredProducts when products change
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Reapply filter when selections or search change
  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedSubCategories, search, showSearch,products]);

  // Sort products when sortType changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Section */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${
              showFilter ? 'rotate-90' : ''
            }`}
            src={assets.dropdown}
            alt="Dropdown Icon"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="men"
                onChange={toggleCategory}
                checked={selectedCategories.includes('men')}
              />{' '}
              Men
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="women"
                onChange={toggleCategory}
                checked={selectedCategories.includes('women')}
              />{' '}
              Women
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="kids"
                onChange={toggleCategory}
                checked={selectedCategories.includes('kids')}
              />{' '}
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
                checked={selectedSubCategories.includes('Topwear')}
              />{' '}
              Topwear
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
                checked={selectedSubCategories.includes('Bottomwear')}
              />{' '}
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
                checked={selectedSubCategories.includes('Winterwear')}
              />{' '}
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
            value={sortType}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductItem
                key={product._id || index}
                name={product.name}
                id={product._id}
                price={product.price}
                image={product.image}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
