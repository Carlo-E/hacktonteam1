const AvoidFood = ({ avoids }) => {
    return (
      <div className="conditionContainer">
        {avoids.map((item) => {
          return <li className="list-group-item list-group-item-danger " key={item}>{item}</li>;
        })}
      </div>
    );
  };
  
  export default AvoidFood;