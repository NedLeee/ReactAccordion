import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider 
        url={'https://picsum.photos/v2/list'} 
        page={"1"} 
        limit={"10"}
        /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component/ menu UI/ recursion */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
