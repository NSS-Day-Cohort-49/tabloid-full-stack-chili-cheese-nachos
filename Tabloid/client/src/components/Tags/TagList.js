import React, {useEffect, useState } from "react";
import Tag from "./Tag";
import { getAllTags } from "../../modules/tagManager";
import {Button} from "reactstrap";
import { useHistory } from "react-router";

export default function TagList() {
    const [ tags, setTags] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getAllTags().then(setTags);
    }, []);


    return (
        <section>
            <Button
                 onClick={()=>{history.push("/tag/add");}}>Add A New Tag
            </Button>
            {tags.map(t =>
                <Tag key={t.id} tag={t}/>
                )}
        </section>
    );
}