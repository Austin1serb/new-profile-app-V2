import '../styles/Popup.scss';

const Popup = ({ closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <p className="popup-text">Click to blow up the canvas dots!</p>
        <button
          className="popup-close-button"
          onClick={closePopup}
          aria-label="Close popup"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;