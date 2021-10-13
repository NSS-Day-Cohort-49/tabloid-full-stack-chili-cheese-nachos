import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addTag } from "../../modules/tagManager";

export default function TagForm() {
    const history = useHistory();
    const [tag, setTag] = useState({
        name:"",
    });

    const handleInputChange = (e) => {
        const value = e.target.value;
        const key = e.target.id

        const tagCopy = { ...tag };

        tagCopy[key] = value;
        setTag(tagCopy);
    };

    const handleSave = (e) => {
        e.preventDefault();

        addTag(tag)
            .then(() => history.push("/tag"))
            .catch((err) => alert(`An error occurred: ${err.message}`));

    };

    return (
        <Form>
            <FormGroup>
                <Label for="name">Tag Name:</Label>
                <Input 
                    id="name" 
                    type="text" 
                    value={tag.name} 
                    name="name" 
                    placeholder="Tag Name" 
                    onChange={handleInputChange} 
                />
            </FormGroup>
                <Button 
                    className="btn btn-primary" 
                    onClick={handleSave}
                    >Save
                    </Button>
        </Form>
    );
}