import React, { useEffect, useState } from "react"
import Category from "./Category"
import { getAllCategories } from "../modules/categoryManager"

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories().then(setCategories)
    }, [])

    return (
        <section>
            {categories.map((c) => (
                <Category key={c.id} category={c} />
            ))}
        </section>
    )
}
