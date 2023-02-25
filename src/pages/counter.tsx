import React from "react";
// import "./App.css";
import { counterActions } from "../reducer/counter";
import { useAppDispatch, useAppSelector } from "../hooks/index";

interface Props {
  numFromProps: number;
}

const Counter = ({ props }: any) => {
  /* 필요한 State 불러오기 */
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  /*
    Function 모음
  */
  const onClickIncrement = () => {
    dispatch(counterActions.onIncrement());
  };
  const onClickDecrement = () => {
    dispatch(counterActions.onDecrement());
  };

  return (
    <div className="App" style={{ padding: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          className="Centered-flex"
          style={{ fontSize: 150, width: 300, border: "2px solid black" }}
        >
          {value}
        </div>
        <div className="Centered-flex" style={{ flexDirection: "column" }}>
          <div className="Counter-Button" onClick={onClickIncrement}>
            +
          </div>
          <div className="Counter-Button" onClick={onClickDecrement}>
            -
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;