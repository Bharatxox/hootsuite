import PropTypes from "prop-types";
const Button = ({ name }) => {
  return (
    <button className="border-secondary border-2 bg-secondary text-white rounded-none px-5 hover:border-secondary hover:bg-transparent hover:text-secondary hover:border-2">
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
