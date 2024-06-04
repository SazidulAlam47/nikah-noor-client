import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";

const useMakePremium = (refetch) => {
    const axiosSecure = useAxiosSecure();

    const handleMakePremium = (biodataId, name) => {
        Swal.fire({
            title: "Confirm Your Action",
            text: `Are you sure you want to upgrade ${name} to premium?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .patch(`/biodatas/${biodataId}`, {
                        premium: "Approved",
                    })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.matchedCount > 0) {
                            Swal.fire({
                                title: "Success",
                                text: `${name} is now a premium member`,
                                icon: "success",
                            });
                            refetch();
                        }
                    });
            }
        });
    };
    return handleMakePremium;
};

export default useMakePremium;
