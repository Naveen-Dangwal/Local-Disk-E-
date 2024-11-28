import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };

  const handleAdd = () => {
    dispatch({
      type: "Add",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSub = () => {
    dispatch({
      type: "Sub",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          Incerment by 1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Decrement by 1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
        <input
          type="text"
          placeholder="enter the number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-warning" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-info" onClick={handleSub}>
          Sub
        </button>
      </div>
    </>
  );
};

export default Controls;
