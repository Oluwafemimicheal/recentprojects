import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  position: "absolute",
  left:"30%",
  margin: "100px",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#1da511"
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};

export default Spinner;
