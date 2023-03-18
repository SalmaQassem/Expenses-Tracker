import "./FilterExpense.css";

const FilterExpense = (props) => {
  const onChangeHandler = (e) => {
    props.onChangeYear(e.target.options[e.target.selectedIndex].value);
  };
  return (
    <div className="expense-filter">
      <p>filter by year</p>
      <select onChange={onChangeHandler} defaultValue={"Select Year"}>
        <option value="Select Year" disabled>
          Select Year
        </option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default FilterExpense;
