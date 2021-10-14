import { getToken } from "./authManager"
import { useHistory } from "react-router"

const apiUrl = "/api/category"

export const getAllCategories = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("ERROR IN GETTING CATEGORIES")
            }
        })
    })
}

export const getCategoryById = (id) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("ERROR GETTING CATEGORY BY ID")
            }
        })
    })
}

export const addCategory = (category) => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        }).then((resp) => {
            if (resp.ok) {
                return resp.json()
            } else if (resp.status === 401) {
                throw new Error("Unauthorized")
            } else {
                throw new Error(
                    "An unknown error occurred while trying to save a new category."
                )
            }
        })
    })
}

export const deleteCategory = (id) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
        //     .then((resp) => {
        //         if (resp.ok) {
        //             return resp
        //                 .json()
        //                 .then(getAllCategories())
        //         } else if (resp.status === 401) {
        //             throw new Error("Unauthorized")
        //         } else {
        //             throw new Error(
        //                 "An unknown error occurred while trying to delete a new category."
        //             )
        //         }
        //     })
    })
}

export const updateCategory = (category) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${category.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        })
    })
}
