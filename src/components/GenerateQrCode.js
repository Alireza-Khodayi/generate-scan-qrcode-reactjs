import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import QRCode from "qrcode";

const GenerateQrCode = () => {
  const [text, setText] = useState('');
  const [qrCodeImage, setQrCodeImage] = useState();
  const [qrCodeText, setQrCodeText] = useState();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setQrCodeImage(response);
      setQrCodeText(text);
      setText("");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-blue-50 rounded-md flex flex-col gap-5 p-6">
      <h3 className="text-center text-lg">Generate QR Code</h3>
      <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
        <Input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter your text here..."
        />
        <Button onClick={() => generateQrCode()}>Generate</Button>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        {qrCodeImage ? (
          <a href={qrCodeImage} download>
            <img className="" src={qrCodeImage} alt={qrCodeText} />
          </a>
        ) : (
          ""
        )}
        {qrCodeText ? `Encrypted Text : ${qrCodeText}` : "Let's Generate !"}
      </div>
    </div>
  );
};

export default GenerateQrCode;
