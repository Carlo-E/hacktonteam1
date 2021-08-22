const Condition = ({ remedies }) => {
  return (
    <div>
      {remedies.map((remedy) => {
        return <li key={remedy}>{remedy}</li>;
      })}
    </div>
  );
};

export default Condition;
