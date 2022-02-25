import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledPagination } from "./Pagination.styles";
import { animeListPageNum } from "../../store";

const Pagination = ({ listLength }) => {
  // UseRecoilState accepts a state as an argument, just like useState
  const [pageNum, setPageNum] = useRecoilState(animeListPageNum);
  const [numsArr, setNumsArr] = useState([]);

  useEffect(() => {
    const paginationNums = () => {
      const max = Math.floor(listLength / 50);
      let nums = [];
      for (let i = 0; i <= max; i++) {
        nums.push(max - i);
      }
      setNumsArr(
        nums.sort((a, b) => {
          return a - b;
        })
      );
    };
    paginationNums();
  }, [listLength]);

  return (
    <StyledPagination>
      {numsArr?.length
        ? numsArr?.map(num => (
            <button
              className={pageNum === num ? "active" : ""}
              onClick={() => setPageNum(num)}
              key={num}
            >
              {num + 1}
            </button>
          ))
        : null}
    </StyledPagination>
  );
};

export default Pagination;
