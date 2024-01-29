import axios from "axios";
const url = "/api/image";
// 관리자 - 이미지 업로드
export const POST_Image = async (file) => {
  console.log("이미지 업로드");
  let formData = new FormData();
  formData.append("file", file);
  const res = await axios({
    method: "post",
    url: url,
    data: formData,
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("등록된 url : ", res.data);
  return res.data;
};
