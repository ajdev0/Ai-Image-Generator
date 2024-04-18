import ImageGenerator from "./component/ImageGenerator";

function App() {
  return (
    <div className=" flex items-center justify-center bg-custom-bg bg-cover w-full min-h-screen ">
      <div className="container app w-[90vw] h-[90vh] flex justify-center items-center  bg-gray-900/15 backdrop-blur rounded-lg  border border-gray-400/15 overflow-scroll">
        <ImageGenerator />
      </div>
    </div>
  );
}

export default App;
