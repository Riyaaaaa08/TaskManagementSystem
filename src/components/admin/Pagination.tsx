import React from "react";

type Props = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
};

const Pagination: React.FC<Props> = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div className="tm-pager">
      <button className="tm-btn tm-btn-ghost" onClick={onPrev} disabled={page <= 1}>
        Previous
      </button>
      <button
        className="tm-btn tm-btn-ghost"
        onClick={onNext}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
