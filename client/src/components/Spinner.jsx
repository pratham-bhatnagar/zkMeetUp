const Spinner = ({ size = "1em", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin ${className} `}
      height={size}
      width={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#813AE2"
        strokeWidth="7"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="matrix(1,0,0,1,0,0)"
      ></circle>
    </svg>
  );
};

export default Spinner;
