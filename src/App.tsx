import React, { FC } from 'react';
import Search from './components/search/Search';
import Content from './components/content/Content';
import Pagination from './components/pagination/Pagination';
import './index.scss';

const App: FC = () => {
  return (
    <div className="App">
      <Search />
      <Content />
      <Pagination />
    </div>
  );
}

export default App;
