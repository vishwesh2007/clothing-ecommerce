function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-48 flex-col items-center">
        <h1 className="text-2xl font-bold tracking-[0.25em] text-black">
          VENANCO
        </h1>

        <div className="mt-6 h-[2px] w-full overflow-hidden bg-gray-200">
          <div className="h-full w-1/2 animate-[loader_1.2s_ease-in-out_infinite] bg-black" />
        </div>

        <p className="mt-4 text-[11px] tracking-[0.2em] text-gray-400">
          LOADING
        </p>
      </div>
    </div>
  );
}

export default Loader;
