import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Button, Card, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useMakePremium from "../../../../hooks/useMakePremium";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/Loader/Loader";
import Swal from "sweetalert2";

const TABLE_HEAD = ["User name", "User email", "Make admin", "Make premium"];

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: users,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["all-users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users/");
            return res.data;
        },
    });

    const handleMakePremium = useMakePremium(refetch);

    const handleMakeAdmin = (user) => {
        if (user.role !== "admin")
            Swal.fire({
                title: "Confirm Admin Privileges",
                text: `Are you sure you want to grant admin privileges to ${user?.name}?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, proceed",
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch("/users/admin", user).then((res) => {
                        console.log(res.data);
                        if (res.data.matchedCount > 0) {
                            Swal.fire({
                                icon: "success",
                                title: "Admin Privileges Granted",
                                text: `${user?.name} has been successfully granted admin privileges on Nikah Noor`,
                                showConfirmButton: false,
                                timer: 2000,
                            });
                            refetch();
                        }
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
                <title>Nikah Noor | Manage Users</title>
            </Helmet>
            <SectionHeading
                title="Manage Users"
                subtitle="View, edit, and manage user accounts"
            />
            <div className="mt-8">
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
                            {users?.map((user, index) => (
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
                                            {user?.name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {user?.email}
                                        </Typography>
                                    </td>

                                    <td
                                        onClick={() => handleMakeAdmin(user)}
                                        className="p-4"
                                    >
                                        <Button
                                            disabled={user?.role === "admin"}
                                            size="sm"
                                        >
                                            Make Admin
                                        </Button>
                                    </td>
                                    <td className="p-4">
                                        <Button
                                            onClick={() =>
                                                handleMakePremium(
                                                    user?.email,
                                                    user?.name
                                                )
                                            }
                                            disabled={
                                                user?.premium === "Approved"
                                            }
                                            size="sm"
                                        >
                                            Make premium
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </>
    );
};

export default ManageUsers;
