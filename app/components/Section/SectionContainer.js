import React from "react";

const SectionContainer = ({ children, id }) => {
  return (
    <section id="id" className="w-full relative flex justify-center z-30">
      {children}
    </section>
  );
};

export default SectionContainer;
