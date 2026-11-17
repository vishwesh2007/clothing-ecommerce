import React from "react";

function PageTitle({ title }) {
  return (
    <div className="px-4 py-6 text-center sm:py-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h1>

      <div className="mx-auto mt-3 h-px w-10 bg-foreground" />
    </div>
  );
}

export default PageTitle;
