import styles from "./../../style.module.scss";
import QRCode from "qrcode.react";

// const networks = {
//     BTC: "https://i.ibb.co/L8hpQcf/bitcoin.png",
//     ETH: "https://i.ibb.co/NWCRLCx/ethereum.png",
//     XRP: "https://i.ibb.co/RCX0Ws9/ripple.png"
// }

function Qr({ value, invalidAddress }) {
    return (
        // <div className>
            <QRCode
                className={styles.Qr}
                value={value}
                bgColor={"#ffffff"} // The QR Background Color
                fgColor={invalidAddress ? "#EF233C" :"#000000" } // The Qr Color
                level={"Q"} // Levels Can be L,M,Q,H Default is L
                includeMargin={false}
                renderAs={"svg"}
                // Uncomment the Line to add Image to the QR CODE
                // imageSettings={{
                //   src: networks.BTC,
                //   x: null,
                //   y: null,
                //   height: 40,
                //   width: 40,
                //   excavate: true
                // }}
            />
        // </div>
    );
}

export default Qr;
