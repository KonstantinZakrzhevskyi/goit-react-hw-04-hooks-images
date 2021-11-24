import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter request!');
      return;
    }

    this.props.onSubmit(query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            disabled={!query}
            className={s.searchFormButton}
          >
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
