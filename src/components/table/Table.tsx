import React, { useCallback, useEffect, useState } from "react"
import { FC } from "react"
import style from "./table.module.scss"
import { ListType } from "../../type/dataType";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts, setTotal } from "../../redux/actions/productActions";
import arrow from '../../assest/svg/arrowDown.svg'

const Table: FC = () => {
  const data = useSelector((state: any) => state.allProducts.products as ListType[]);
  const query = useSelector((state: any) => state.allProducts.query);
  const currentPage = useSelector((state: any) => state.allProducts.currentPage);
  const dispatch = useDispatch();
  const [sortColumn, setSortColumn] = useState({ _sort: "id", _order: "asc" })

  const fetchProducts = useCallback( async() => {
    try {
      //responseFullData - необходим только для получения total(для пагинации) так как бэк не предоставляет их
      const responseFullData = await axios("https://jsonplaceholder.typicode.com/posts", {
        params: {
          q: query,
        }
      });
      const response = await axios("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 10,
          _page: currentPage,
          q: query,
          ...sortColumn

        }
      });
      console.log(response.data);
      dispatch(setProducts(response.data));
      dispatch(setTotal(responseFullData.data.length));
      console.log(responseFullData.data.length);
    } catch (error) {
      console.log(error)
    }
  },[dispatch, query, sortColumn, currentPage])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, query, sortColumn])

  const column = [{ code: "id", name: "ID" }, { code: "title", name: "Заголовок" }, { code: "body", name: "Описание" }];

  const handlerSort = (code: string) => {
    setSortColumn((prevState) => ({ _sort: code, _order: prevState._order !== "asc" ? "asc" : "desc" }))
  }

  return (
    <div className={style.table1}>
      <table className={style.container}>
        <tr className={style.header}>
          {column.map(columnName => {
            return <th className={style[`column__${columnName.code}`]} onClick={() => handlerSort(columnName.code)}>{columnName.name}
              <img src={arrow} className={style[`arrow${sortColumn._order === "desc" && sortColumn._sort === columnName.code ? "__down" : ""}`]} alt="Arrow" /> </th>
          })}
        </tr>
        {data.length ? data.map(el => {
          return <tr className={style.content}>
            {column.map(columnName => {
              return <td>{el[columnName.code]}</td>
            })}
          </tr>
        }) : <td colSpan={3} className={style.notFound}>Нет данных</td>}
      </table>
    </div>)
}
export default Table