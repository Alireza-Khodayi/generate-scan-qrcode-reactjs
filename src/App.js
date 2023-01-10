import GenerateQrCode from "./components/GenerateQrCode";
import ScanQrCode from "./components/ScanQrCode";


function App() {
  
  return (
    <div className="">
      <div className="flex justify-center items-center bg-blue-600 text-white px-3 py-3">
        <h2 className="text-2xl font-bold text-center">
          Generate and Scan QR Code with React.js
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5 h-screen">
        <GenerateQrCode/>
        <ScanQrCode/>
        
      </div>
    </div>
  );
}

export default App;
