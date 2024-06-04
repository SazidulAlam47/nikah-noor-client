import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import Swal from "sweetalert2";

const TABLE_HEAD = [
    "Name",
    "Biodata Id",
    "Permanent Address",
    "Occupation",
    "",
];

const FavoriteBiodatas = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {
        data: favorites,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["favorite-biodatas", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `/favorites/email/${user?.email}`
            );
            return res.data;
        },
    });

    const handleDelete = (biodataId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/favorites/${biodataId}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "The Biodata has been deleted from Favorites.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                        //remove from UI
                        refetch();
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "The Biodata remains safe",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
        });
    };

    if (isPending) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Nikah Noor | My Contact Requests</title>
            </Helmet>
            <SectionHeading
                title="Favorite Biodatas"
                subtitle="Review and manage your favorite profiles to keep track of potential matches"
            />
            <div className="mt-8">
                {favorites?.length ? (
                    <Card className="h-fit w-full overflow-x-auto">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {favorites?.map(
                                    (
                                        {
                                            name,
                                            biodataId,
                                            permanentDivision,
                                            occupation,
                                        },
                                        index
                                    ) => (
                                        <tr
                                            key={index}
                                            className="even:bg-blue-gray-50/50"
                                        >
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {biodataId}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {permanentDivision}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {occupation}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Button
                                                    onClick={() =>
                                                        handleDelete(biodataId)
                                                    }
                                                    size="sm"
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </Card>
                ) : (
                    <div className="flex items-center justify-center h-[55vh]">
                        <Typography variant="lead">
                            You don&apos;t have any Favorite Biodata
                        </Typography>
                    </div>
                )}
            </div>
        </>
    );
};

export default FavoriteBiodatas;
