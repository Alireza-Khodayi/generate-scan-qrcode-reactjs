import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

const ScanQrCode = () => {
  const qrRef = useRef(null);
  const [scanResultFile, setScanResultFile] = useState();
  const [isScaning, setIsScaning] = useState(false);

  const onScanFile = () => {
    setIsScaning(!isScaning);
  };
  return (
    <div className="bg-amber-50 rounded-md p-6">
      <h3 className="text-center text-lg">Scan QR Code</h3>
      <div className="flex flex-col items-center justify-center mt-4">
        <button
          onClick={onScanFile}
          className="bg-yellow-400 px-8 py-2 rounded-md text-white hover:bg-yello-500 shadow-md hover:scale-x-105 hover:shadow-lg transition-all duration-300 active:bg-yellow-600"
        >
          Scan Qr Code
        </button>
        <div className="w-2/3">
          {isScaning ? (
            <QrReader
              ref={qrRef}
              scanDelay={500}
              containerStyle={{ with: "100%" }}
              onResult={(result, error) => {
                if (!!result) {
                  setScanResultFile(result?.text);
                }

                if (!!error) {
                  console.log(error);
                }
              }}
              legacyMode
            />
          ) : (
            ""
          )}
        </div>
        <h3 className="text-center mt-5">
          {scanResultFile
            ? `Scanned QR Code Data : ${scanResultFile}`
            : "Let's Scan!"}
        </h3>
      </div>
    </div>
  );
};

export default ScanQrCode;
