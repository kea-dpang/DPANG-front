import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";

/* 에러 alert */
export const useErrorAlert = () => {
  const navigate = useNavigate();

  const showErrorAlert = useCallback(
    ({ title, text = "", navi }) => {
      swal(title, text, "error").then((isConfirmed) => {
        if (isConfirmed) {
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
    ({ title, text = "", navi }) => {
      swal(title, text, "success").then((isConfirmed) => {
        if (isConfirmed) {
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

export const useQuestionAlert = () => {
  const navigate = useNavigate();

  const showQuestionAlert = useCallback(
    ({ title, text, saveText, navi, onConfirm }) => {
      swal({
        title: title,
        text: text,
        icon: "warning",
        buttons: ["취소", "확인"],
        dangerMode: true,
      }).then((isConfirmed) => {
        // 사용자가 "확인" 버튼을 클릭한 경우
        if (isConfirmed) {
          // 추가적인 텍스트가 주어진 경우 (예: 다음 확인 단계 표시)
          if (saveText !== "") {
            // SweetAlert을 사용하여 추가 텍스트를 표시
            swal(saveText, "", "success");
          }

          // '확인' 버튼 클릭 시 실행되어야 하는 함수 호출
          if (typeof onConfirm === "function") {
            // onConfirm 함수 실행 및 반환값 확인
            const result = onConfirm();

            // onConfirm 함수의 반환값이 Promise인 경우
            if (result instanceof Promise) {
              // Promise가 성공적으로 처리된 경우
              result
                .then(() => {
                  // 페이지 이동이나 새로고침 등을 수행
                  if (navi !== "") {
                    navigate(navi);
                  } else {
                    window.location.reload();
                  }
                })
                // Promise 처리 중 에러가 발생한 경우
                .catch(() => {
                  // 새로고침 동작 수행
                  window.location.reload();
                });
            } else {
              // 반환값이 Promise가 아닌 경우 (일반적으로 동기적인 경우)
              // 페이지 이동이나 새로고침 등을 수행
              if (navi !== "") {
                navigate(navi);
              } else {
                window.location.reload();
              }
            }
          }
        }
      });
    },
    [navigate]
  );

  // 외부에서 showQuestionAlert 함수를 사용할 수 있도록 반환
  return showQuestionAlert;
};

/* 한번 더 물어보고, 확인 alert창 또 뜨는 alert */
// ex) 회원탈퇴
export const useQuestionConfirmAlert = () => {
  const navigate = useNavigate();

  const showQuestionConfirmAlert = useCallback(
    ({ title, text, saveText, navi, onConfirm }) => {
      swal({
        title: title,
        text: text,
        icon: "warning",
        buttons: ["취소", "확인"],
        dangerMode: true,
      }).then((isConfirmed) => {
        // if (isConfirmed) {
        // '확인' 버튼을 눌렀을 때 실행되어야 할 함수 호출
        if (typeof onConfirm === "function") {
          onConfirm().then(() => {
            swal(saveText, "", "success").then((isConfirmed) => {
              if (isConfirmed) {
                if (navi) {
                  navigate(navi);
                }
              }
            });
          });
        }
        // }
      });
    },
    [navigate]
  );

  return showQuestionConfirmAlert;
};

///////////sweetAlert 2////////////////
// /* 2 에러 alert */
// export const useErrorAlert = () => {
//   const navigate = useNavigate();

//   const showErrorAlert = useCallback(
//     ({ title, text, navi }) => {
//       Swal.fire({
//         title: title,
//         text: text,
//         // icon: "error",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           if (navi) {
//             navigate(navi);
//           }
//         }
//       });
//     },
//     [navigate]
//   );
//   return showErrorAlert;
// };

/* 2 확인 alert */
// export const useConfirmAlert = () => {
//   const navigate = useNavigate();

//   const showConfirmAlert = useCallback(
//     ({ title, text, navi }) => {
//       Swal.fire({
//         // icon: "success",
//         title: title,
//         text: text,
//       }).then((result) => {
//         if (result.isConfirmed) {
//           if (navi) {
//             navigate(navi);
//           }
//         }
//       });
//     },
//     [navigate]
//   );
//   return showConfirmAlert;
// };

// /* 2 한번 더 물어보는 alert */
// export const useQuestionAlert = () => {
//   const navigate = useNavigate();

//   const showQuestionAlert = useCallback(
//     ({ title, text, saveText, navi }) => {
//       Swal.fire({
//         icon: "question",
//         title: title,
//         text: text,
//         showCancelButton: true,
//         confirmButtonText: "확인",
//         cancelButtonText: "취소",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           if (saveText != "") {
//             Swal.fire(saveText, "", "success");
//           }
//           if (navi !== "") {
//             navigate(navi);
//           }
//         }
//       });
//     },
//     [navigate]
//   );

//   return showQuestionAlert;
// };

/* 2 한번 더 물어보는 alert(renew) */
// export const useQuestionAlert = () => {
//   const navigate = useNavigate();

//   const showQuestionAlert = useCallback(
//     ({ title, text, saveText, navi, onConfirm }) => {
//       Swal.fire({
//         // icon: "question",
//         title: title,
//         text: text,
//         showCancelButton: true,
//         confirmButtonText: "확인",
//         cancelButtonText: "취소",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           if (saveText != "") {
//             Swal.fire(saveText, "", "success");
//           }
//           // '확인' 버튼을 눌렀을 때 실행되어야 할 함수 호출
//           if (typeof onConfirm === "function") {
//             onConfirm().then(() => {
//               if (navi !== "") {
//                 navigate(navi);
//               }
//             });
//           }
//         }
//       });
//     },
//     [navigate]
//   );

//   return showQuestionAlert;
// };
