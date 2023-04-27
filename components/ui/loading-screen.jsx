const LoadingScreen = () => {
  return (
    // <div className="w-screen h-screen fixed z-[99] ">
    <div
      id="loading_screen_div"
      className="invisible bg-black/80 w-screen h-screen fixed top-0 left-0 z-[99] grid place-items-center"
    >
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
      <p id="loading_screen_text">Loading ...</p>
    </div>
    // </div>
  );
};

export default LoadingScreen;
