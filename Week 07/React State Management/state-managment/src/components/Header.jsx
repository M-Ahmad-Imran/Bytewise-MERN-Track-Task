import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [filter, setFilter] = useState(searchParams.get('filter') || '');

  useEffect(() => {
    if (filter) {
      searchParams.set('filter', filter);
      navigate(`${location.pathname}?${searchParams.toString()}`);
    } else {
      searchParams.delete('filter');
      navigate(location.pathname);
    }
  }, [filter, location.pathname, navigate]);

  return (
    <header>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to={filter ? `/store?filter=${filter}` : '/store'}>Store</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
