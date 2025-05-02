const baseURL = "http://localhost:3000/member"; // Write down the base URL of the created API.

const getAllUser = async () => {

    try {
        const res = await fetch(baseURL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("خطا در گرفتن کاربران", error);
        return [];
    }

};

const createUser = async (userData) => {

    try {
        const res = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const data = await res.json();
        return { res: data };
    } catch (error) {
        console.error("خطا در ساخت کاربر", error);
        return { error };
    }

};

const deleteUser = async (id) => {
    try {

        const res = await fetch(baseURL, {
            method: "DELETE"
        })
        const data = await res.json()
        return data

    } catch (error) {
        console.log("خطا در حذف کاربر" + error);
        return { error }

    }











    // try {
    //     const res = await fetch(`${baseURL}/${id}`, {
    //         method: "DELETE",
    //     });

    //     const data = await res.json();
    //     return { res: data };
    // } catch (error) {
    //     console.error("خطا در حذف کاربر", error);
    //     return { error };
    // }

};

export { getAllUser, deleteUser, createUser };
