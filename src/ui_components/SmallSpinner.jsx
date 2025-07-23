import { ClipLoader } from "react-spinners";

const override = {
  display: "inline-block",
  borderColor: "white",
};

const SmallSpinner = () => {
  return (
    <ClipLoader
      cssOverride={override}  // 
      size={30}
      color="#ffffff"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default SmallSpinner;
