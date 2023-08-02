import React, { FC } from "react";
import style from "./pagination.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions/productActions";


const Pagination: FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: any) => state.allProducts.currentPage);
  const total = useSelector((state: any) => state.allProducts.total);
  console.log(currentPage);


  return <div className={style.pagination}>
    <div onClick={() => currentPage > 1 && dispatch(setCurrentPage(currentPage - 1))} className={style.button}>Назад</div>
    <div className={style.pages}>
      {Array.from(Array(Math.ceil(total / 10)).keys()).map((page) => {
        return <div onClick={() => dispatch(setCurrentPage(page + 1))} className={currentPage === page + 1 ? style.activePage : style.page}>{page + 1}</div>
      })
      }
    </div>
    <div onClick={() => currentPage < Math.ceil(total / 10) && dispatch(setCurrentPage(currentPage + 1))} className={style.button}>Далее</div>
  </div>
}
export default Pagination