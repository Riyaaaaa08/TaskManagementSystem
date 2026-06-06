// src/components/common/ModalCard.tsx
import React, { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: number | string;
};

const ModalCard: React.FC<Props> = ({ open, onClose, title, children, width = 960 }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="ap-modal-root" role="dialog" aria-modal="true">
      <div className="ap-backdrop" onClick={onClose} />
      <div className="ap-modal-card" style={{ maxWidth: width }}>
        {title && <div className="ap-modal-head"><h3>{title}</h3></div>}
        <div className="ap-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default ModalCard;
