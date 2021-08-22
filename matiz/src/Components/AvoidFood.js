const AvoidFood = ({ avoids }) => {
    return (
      <div>
        {avoids.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
    );
  };
  
  export default AvoidFood;