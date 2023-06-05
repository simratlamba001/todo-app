const CommonButton = ({ children, exClass }) => {
  return <button className={"common-button " + exClass}>{children}</button>;
};
export default CommonButton;
