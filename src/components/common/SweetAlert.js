import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import swal from "sweetalert";

/* 에러 alert */
export const useErrorAlert = () => {
  const navigate = useNavigate();

  const showErrorAlert = useCallback(
    ({ title, text = "", navi }) => {
      swal({
        title: title,
        text: text,
        icon: "error",
        buttons: "확인",
      }).then((isConfirmed) => {
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
      swal({
        title: title,
        text: text,
        icon: "success",
        buttons: "확인",
      }).then((isConfirmed) => {
        if (isConfirmed) {
          if (navi) {
            navigate(navi);
          } else {
            window.location.reload();
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
  const errorAlert = useErrorAlert();

  const showQuestionAlert = useCallback(
    ({ title, text, saveText, navi, onConfirm, errorText }) => {
      swal({
        title: title,
        text: text,
        icon: "success",
        buttons: ["취소", "확인"],
        dangerMode: true,
        navi: navi,
        errorText: errorText,
      })
        .then((isConfirmed) => {
          if (isConfirmed) {
            if (saveText !== "") {
              swal(saveText, "", "success");
            }
            if (typeof onConfirm === "function") {
              const result = onConfirm();
              if (result instanceof Promise) {
                result
                  .then(() => {
                    if (navi !== "") {
                      navigate(navi);
                    } else {
                      window.location.reload();
                    }
                  })
                  .catch((error) => {
                    // 오류 발생 시 errorAlert 호출
                    errorAlert({
                      title: errorText,
                    });
                  });
              } else {
                if (navi !== "") {
                  navigate(navi);
                } else {
                  window.location.reload();
                }
              }
            }
          }
        })
        .catch((error) => {
          // 오류 발생 시 errorAlert 호출
          errorAlert({
            title: errorText,
          });
        });
    },
    [navigate, errorAlert]
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
        if (isConfirmed) {
          // '확인' 버튼을 눌렀을 때 실행되어야 할 함수 호출
          if (typeof onConfirm === "function") {
            onConfirm()
              .then(() => {
                swal(saveText, "", "success").then((isConfirmed) => {
                  if (isConfirmed) {
                    if (navi) {
                      navigate(navi);
                    } else {
                      window.location.reload();
                    }
                  }
                });
              })
              .catch((error) => {
                // console.log("onConfirm 함수에서 에러 발생:", error);
              });
          }
        }
      });
    },
    [navigate]
  );

  return showQuestionConfirmAlert;
};

/* 한번 더 물어보고, 확인 alert창 또 '안' 뜨는 alert */
export const useQuestion2Alert = () => {
  const navigate = useNavigate();

  const showQuestion2Alert = useCallback(
    ({ title, text, navi }) => {
      swal({
        title: title,
        text: text,
        icon: "warning",
        buttons: ["취소", "확인"],
        dangerMode: true,
      }).then((isConfirmed) => {
        if (isConfirmed) {
          if (navi) {
            navigate(navi);
          }
        }
      });
    },
    [navigate]
  );

  return showQuestion2Alert;
};

//확인.취소 물어보고 취소하면 함수실행o. navi실행x. 확인하면 함수실행하고 리프레시 혹은 navi
export const useQuestionFunctionAlert = () => {
  const navigate = useNavigate();

  const useQuestionFunctionAlert = useCallback(
    ({ title, text, navi, onConfirm }) => {
      if (typeof onConfirm === "function") {
        onConfirm();
      }
      swal({
        title: title,
        text: text,
        icon: "success",
        buttons: ["취소", "확인"],
        dangerMode: true,
      }).then((isConfirmed) => {
        if (isConfirmed) {
          if (navi) {
            navigate(navi);
          }
        }
      });
    },
    [navigate]
  );
  return useQuestionFunctionAlert;
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
