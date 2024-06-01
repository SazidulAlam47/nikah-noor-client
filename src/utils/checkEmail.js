import Swal from "sweetalert2";

const checkEmail = (email, reason) => {
    Swal.fire({
        title: "Please check your email",
        text: `Please check your ${email} for a link ${reason}.`,
        imageUrl: "https://i.ibb.co/D9Qg6M1/mail.png",
        imageWidth: 128,
        imageHeight: 128,
        imageAlt: "Email",
    });
};

export default checkEmail;