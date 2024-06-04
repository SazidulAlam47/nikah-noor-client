import useAxiosPublic from "./useAxiosPublic";

const useAddNewUser = () => {
    const axiosPublic = useAxiosPublic();

    const addNewUser = (data) => {
        axiosPublic.put(`/users`, data).then((res) => {
            console.log(res.data);
        });
    };

    return addNewUser;
};

export default useAddNewUser;
