import Swal from "sweetalert2";


export async function DeleteAlert() {
    return await Swal.fire({
        allowOutsideClick: false,
        title: 'Are you sure delete it?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });

}