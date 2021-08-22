const Condition = ({ remedies }) => {
  return (
        <div className="conditionContainer">
         <h4> Top remedies </h4>
          {remedies.map((remedy) => {
            return <li key={remedy}>{remedy}</li>;
          })}
        </div>
  );
};

export default Condition;
