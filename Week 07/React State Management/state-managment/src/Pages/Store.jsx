import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Store = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchParams, setSearchParams] = useSearchParams({ filter: "" });

  const filter = searchParams.get('filter') || '';

  useEffect(() => {
    setFilteredItems(
      items.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, items]);

  const handleSearch = (event) => {
    setSearchParams(prev => {
      prev.set("filter", event.target.value)
      return prev
    }, { replace: true });
  };

  return (
    <div>
      <h1>Store Page</h1>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
