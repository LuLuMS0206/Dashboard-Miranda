// import { useContext, useState } from "react";
// import { UserContext } from '../../context/userContext.js'; 
// import { PopupStyles, PopupContentStyles, InputStyled, LabelStyles } from './popupUserStyled.js';
// import { ButtonStyles } from '../buttonComponent/buttonComponent.js';

// export const PopupUserComponent = ({ isOpen, onClose }) => {
//     const { state, dispatch } = useContext(UserContext);
//     const [fullName, setFullName] = useState(''); 
//     const [email, setEmail] = useState(''); 

//     const handleSave = () => {
//         if (fullName !== state.name || email !== state.email) {
//             dispatch({
//                 type: "EDITUSER",
//                 payload: {
//                     name: fullName,
//                     email: email
//                 }
//             });
//         }

//         onClose(); 
//     };

//     if (!isOpen) return null;

//     return (
//         <PopupStyles>
//             <PopupContentStyles>
//                 <h2>Edit User</h2>
//                 <LabelStyles>Full Name</LabelStyles>
//                 <InputStyled
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     placeholder="Edit full name"
//                 />
//                 <LabelStyles>Email</LabelStyles>
//                 <InputStyled
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Edit email"
//                 />
//                 <ButtonStyles styled="pending" onClick={handleSave}>Save</ButtonStyles>
//                 <ButtonStyles styled="refund" onClick={onClose}>Close</ButtonStyles>
//             </PopupContentStyles>
//         </PopupStyles>
//     );
// };

import React, { useContext, useState } from "react";
import { UserContext } from '../../context/userContext'; 
import { PopupStyles, PopupContentStyles, InputStyled, LabelStyles } from './popupUserStyled';
import { ButtonStyles } from '../buttonComponent/buttonComponent';

interface PopupUserComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PopupUserComponent: React.FC<PopupUserComponentProps> = ({ isOpen, onClose }) => {
    const { state, dispatch } = useContext(UserContext)!; // Usa el operador de aserción no nula
    const [fullName, setFullName] = useState<string>(''); 
    const [email, setEmail] = useState<string>(''); 

    const handleSave = () => {
        if (fullName !== state.name || email !== state.email) {
            dispatch({
                type: "EDITUSER",
                payload: {
                    name: fullName,
                    email: email
                }
            });
        }

        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <PopupStyles>
            <PopupContentStyles>
                <h2>Edit User</h2>
                <LabelStyles>Full Name</LabelStyles>
                <InputStyled
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Edit full name"
                />
                <LabelStyles>Email</LabelStyles>
                <InputStyled
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Edit email"
                />
                <ButtonStyles styled="pending" onClick={handleSave}>Save</ButtonStyles>
                <ButtonStyles styled="refund" onClick={onClose}>Close</ButtonStyles>
            </PopupContentStyles>
        </PopupStyles>
    );
};
