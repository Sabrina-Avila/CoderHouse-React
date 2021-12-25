import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../components/Button";

const MODAL_ROOT = document.getElementById("portal-root");

function Modal({
  title,
  bodyText,
  onClose,
  onSave,
  saveButtonText,
  closeButtonText,
}) {
  const [el, setEl] = useState();

  useEffect(() => {
    const el = document.createElement("div");
    el.classList.add("modal", "fade", "show", "d-block");
    el.setAttribute("tabindex", -1);
    MODAL_ROOT.appendChild(el);
    MODAL_ROOT.classList.add("modal-open");
    setEl(el);

    return () => {
      MODAL_ROOT.classList.remove("modal-open");
      MODAL_ROOT.removeChild(el);
    };
  }, []);

  return el
    ? ReactDOM.createPortal(
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              {onClose && (
                <Button
                  type="light"
                  className="close"
                  onClick={onClose}
                  attributes={{ type: "button", "aria-label": "Close" }}
                >
                  <span aria-hidden="true">&times;</span>
                </Button>
              )}
            </div>
            <div className="modal-body">
              <p>{bodyText}</p>
            </div>
            <div className="modal-footer">
              {onClose && closeButtonText && (
                <Button
                  type="secondary"
                  onClick={onClose}
                  attributes={{ type: "button" }}
                >
                  {closeButtonText}
                </Button>
              )}
              {onSave && (
                <Button
                  type="primary"
                  onClick={onSave}
                  attributes={{ type: "button" }}
                >
                  {saveButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>,
        el
      )
    : null;
}

export default Modal;
