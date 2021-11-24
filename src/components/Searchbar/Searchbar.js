import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter request!');
      return;
    }

    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" disabled={!query} className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
