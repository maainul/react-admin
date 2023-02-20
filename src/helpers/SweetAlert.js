import swal from "sweetalert2";

export const Alert = async (title, text, status) => {
  return await swal.fire({
    title: title,
    text: text,
    icon: "success",
    confirmButtonText: "CLOSE",
  });
};

export const ErrorAlert = async () => {
  return await swal.fire({
    title: "error",
    text: "Error While Add data",
    icon: "error",
    confirmButtonText: "CLOSE",
  });
};
