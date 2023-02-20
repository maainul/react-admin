import swal from "sweetalert2";

export const Alert = async (title, text, status) => {
  return await swal.fire({
    title: title,
    text: text,
    icon: "success",
    confirmButtonText: "CLOSE",
  });
};
