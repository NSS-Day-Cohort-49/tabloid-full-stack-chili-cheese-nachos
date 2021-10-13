import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {Button, Form, FormGroup, Label, Input } from `reactstrap`;
import { addTag } from "../../modules/tagManager";

export default function TagForm() {
    const history = useHistory();
    const [tag, settag] = useState();


    const submitForm = (e) => {
        e.preventDefault();
        addTag({text: tag})
        .then(() => history.push)

    }
}