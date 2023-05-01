import Sink from "./Sink";

const Bath = ({ size }) => {
  return (
    <div id="bath">
      {size} Bath
      <Sink />
    </div>
  );
};

export default Bath;
