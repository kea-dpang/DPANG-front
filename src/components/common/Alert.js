import React, { useEffect } from "react";
import Swal from "sweetalert2";

export const Confirm = ({
  id,
  title = "삭제",
  text = `[${id}] 삭제 하시겠습니까??`,
  confirmText = "삭제",
  cancelText = "취소",
}) => {
  useEffect(() => {
    Swal.fire({
      icon: "warning",
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    }).then((res) => {
      if (res.isConfirmed) {
      }
    });
  }, []);

  return null;
};
