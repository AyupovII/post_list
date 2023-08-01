import React, { useEffect, useState } from "react"
import { FC } from "react"
import style  from "./search.module.scss"
import { setCurrentPage, setValueQuery } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";

const Search:FC = ()=>{
  const [query, setQuery] = useState("");
  console.log(query);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(setValueQuery(query));
    dispatch(setCurrentPage(1));
  },[query]);

 return <div className={style.search}>
  <input className={style.search__field} placeholder="Поиск"  onChange={e=>setQuery(e.target.value)}></input>
  <div className={style.search__icon}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
    </div>
 </div>
}
export default Search