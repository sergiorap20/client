import React, { useState} from 'react';

import './style.css';

function Form(props) {
    const [name, setName] = useState("");
    const [bundle, setBundle] = useState("");
    const [nameCorrecto, setNameCorrecto] = useState(false);
    const [bundleCorrecto, setBundleCorrecto] = useState(true);


   const validateName = (val) => {
       setName(val);
       setNameCorrecto(/^(?=[a-zA-Z0-9]{2})[a-zA-Z0-9-_ ]{4,}/.test(val));

   }

    return (
        <form className="Form-test">
            <input value={name} onChange={e => validateName(e.target.value)} placeholder="Name" type="text"
                   name="name" required/>
            {  !nameCorrecto && name !== '' ? <span>Bad format or empty</span> : null }

            <input value={bundle} onChange={e => setBundle(e.target.value)}
                   placeholder="Bundle" type="text" name="bundle" required/>
            {  !bundleCorrecto &&  bundle !== '' ? <span>Bad format or empty</span> : null }


            { nameCorrecto && bundleCorrecto ? <button  type="submit">Submit</button> : <button disabled type="submit">Submit</button>}

        </form>
    );
}

export default Form;