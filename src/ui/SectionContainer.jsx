function SectionContainer({ id, styles, children }) {
  return (
    <section
      id={id}
      className={` text-slate-300 md:py-20 px-5 md:px-10 lg:px-25 py-30 ${styles}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
