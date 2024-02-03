import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

/* 에러 alert */
export const useErrorAlert = () => {
  const navigate = useNavigate();

  const showErrorAlert = useCallback(
    ({ title, text, navi }) => {
      Swal.fire({
        title: title,
        text: text,
        icon: "error",
      }).then((result) => {
        if (result.isConfirmed) {
          if (navi) {
            navigate(navi);
          }
        }
      });
    },
    [navigate]
  );
  return showErrorAlert;
};

/* 확인 alert */
export const useConfirmAlert = () => {
  const navigate = useNavigate();

  const showConfirmAlert = useCallback(
    ({ title, text, navi }) => {
      Swal.fire({
        icon: "success",
        title: title,
        text: text,
      }).then((result) => {
        if (result.isConfirmed) {
          if (navi) {
            navigate(navi);
          }
        }
      });
    },
    [navigate]
  );
  return showConfirmAlert;
};

/* 한번 더 물어보는 alert */
export const useQuestionAlert = () => {
  const navigate = useNavigate();

  const showQuestionAlert = useCallback(
    ({ title, text, saveText, navi }) => {
      Swal.fire({
        icon: "question",
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(saveText, "", "success");
          if (navi !== "") {
            navigate(navi);
          }
        }
      });
    },
    [navigate]
  );

  return showQuestionAlert;
};
