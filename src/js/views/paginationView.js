import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, others';
    }
    // Page 1, and there are NO other pages
    // Last page
    if (this._data.page === numPages) {
      return `last page`;
    }
    // Other Page
    if (this._data.page < numPages) {
      return `other page`;
    }
  }
}
export default new PaginationView();
