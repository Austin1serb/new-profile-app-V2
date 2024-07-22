import '../styles/Popup.scss'

const Popup = ({ closePopup }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <div>
                    <p>Click to blow up the canvas dots!</p>
                </div>
                <div>
                    <button className="popup-button" onClick={closePopup}>X</button>
                </div>

            </div>
        </div>
    );
};

export default Popup;