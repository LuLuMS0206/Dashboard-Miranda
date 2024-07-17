import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 0.2em;
  margin-right: 0.625em;
  width: 100%;
`;

export const ItemList = styled.li`
  cursor: pointer;
  width: 40%;
  padding-bottom: 0.625em;
  color: #6e6e6e;
  border-bottom: none;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #135846;
    border-bottom: 1px solid #135846;
  }
`;

export const SectionOrder = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const SelectStyled = styled.select`
  border: 1px solid #135846;
  color: #135846;
  margin-left: 3em;
  padding: 0.5rem;
  border-radius: 0.4rem;
`;

export const TextAreaStyled = styled.textarea`
    border: 1px solid #135846;
    color: #135846;
    margin-left: 3em;
    padding: 0.3rem;
    border-radius: 0.4rem;
`;



export const FormStyled = styled.form`
        display: inline-grid;
            background: white;
    padding: 2rem 6rem;
        border-radius: 0.4rem;
box-shadow: -8px -2px 54px -11px rgba(201,201,201,0.64);
`;

export const LabelFormStyled = styled.label`
    margin: 0px auto;
        margin-top: 2rem;
        color:  #135846;
`;

export const InputFormStyled = styled.input`
        border: 1px solid #135846;
    color: #135846;
    margin-left: 3em;
    padding: 0.3rem;
    border-radius: 0.4rem;
}

`;

export const SelectFormStyled = styled.select`
        border: 1px solid #135846;
    color: #135846;
    margin-left: 3em;
    padding: 0.3rem;
    border-radius: 0.4rem;
}

`;


// export const DivStyled = styled.div`
//     transition: margin-left 0.2s ease-in-out;
//     margin-top: 8rem;
//     padding-left: ${(props) => (props.isOpen ? "18rem" : "2rem")};

// `;