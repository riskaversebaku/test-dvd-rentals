import swal from "sweetalert";

export function createAlert(type: "success" | "error", message: string) {
    return swal(type === "success" ? "Success" : "Error", message, type);
}