import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

type ProfileMenuProps = {
  anchorRef: React.RefObject<HTMLElement>;
  open: boolean;
  onClose: () => void;
  onEditProfile?: () => void;
  onLogout?: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorRef,
  open,
  onClose,
  onEditProfile,
  onLogout,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 240 });
  const navigate = useNavigate();

  // position relative to viewport (portal to body)
  const compute = () => {
    const r = anchorRef.current?.getBoundingClientRect();
    if (!r) return;
    const width = 240;
    const gap = 8;
    const top = r.bottom + window.scrollY + gap;
    const left = r.right + window.scrollX - width;
    setPos({ top, left: Math.max(8, left), width });
  };

  useEffect(() => {
    if (!open) return;
    compute();
    const onScroll = () => compute();
    const onResize = () => compute();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (cardRef.current?.contains(t)) return;
      if (anchorRef.current?.contains(t)) return;
      onClose();
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, onClose]);

  if (!open) return null;

 const handleEdit = () => {
  onEditProfile?.();   // optional analytics
  onClose();           // close the card first
  navigate("/profile"); // tester edit profile page
};

 const handleLogout = () => {
  onLogout?.();
  onClose();
  navigate("/login");
};

  return createPortal(
    <div
      ref={cardRef}
      className="shadow-sm bg-white border rounded"
      style={{
        position: "absolute",
        top: pos.top,
        left: pos.left,
        width: pos.width,
        zIndex: 2000,
        borderRadius: 10,
        overflow: "hidden",
      }}
      role="menu"
    >
      <div className="p-2" style={{ background: "#f8f9fa" }}>
        <div className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 36, height: 36, background: "#eee" }}
          >
            <CgProfile size={20} />
          </div>
          <div>
            <div className="fw-semibold">Profile</div>
            <div className="text-muted small">Manage account</div>
          </div>
        </div>
      </div>

      <button className="btn w-100 text-start" style={{ borderRadius: 0 }} onClick={handleEdit}>
        <CgProfile className="me-2" /> Edit Profile
      </button>

      <div className="border-top" />

      <button
        className="btn w-100 text-start text-danger"
        style={{ borderRadius: 0 }}
        onClick={handleLogout}
      >
        <BiLogOut className="me-2" /> Logout
      </button>
    </div>,
    document.body
  );
};

export default ProfileMenu;
