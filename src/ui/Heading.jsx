function Heading({ children, positionLeft = "left-4", width = "w-20" }) {
  return (
    <h2 className="text-3xl  text-slate-100 font-semibold relative">
      {children}
      <span
        className={`w-20 h-1 bg-linear-to-r from-blue-400 to-teal-500 rounded-sm absolute
  ${positionLeft} ${width} -bottom-2`}
      ></span>
    </h2>
  );
}

export default Heading;
