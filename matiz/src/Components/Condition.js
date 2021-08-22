const Condition = ({ remedies }) => {
  return (
        <div className="conditionContainer">
          {remedies.map((remedy) => {
            return <li className="list-group-item list-group-item-success" key={remedy}>{remedy}</li>;
          })}
        </div>
  );
};

export default Condition;
