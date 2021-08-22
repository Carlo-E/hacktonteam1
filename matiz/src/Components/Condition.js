const Condition = ({ remedies }) => {
   return (
         <div className="conditionContainer">
           {remedies.map((remedy) => {
             return <li key={remedy}>{remedy}</li>;
           })}
         </div>
   );
 };
 
 export default Condition;

