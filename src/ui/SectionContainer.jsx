function SectionContainer({ id, styles, children }) {
  return (
    <section
      id={id}
      className={` text-slate-300 md:py-20 px-10 py-30 md:px-15 ${styles}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
