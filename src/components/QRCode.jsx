import './qrcode.css'
import QRCodeImage from '../assets/image-qr-code.png'

export const QRCode = () => {
    return (
        <div className="qrcode">
            <img src={QRCodeImage} alt="QR Code" />
            <h2>Improve your front-end skills by building projects</h2>
            <p>
                Scan the QR code to visit Frontend Mentor and 
                take your coding skills to the next level
            </p>
        </div>
    )
}