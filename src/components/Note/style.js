import styled from "styled-components";
export const NoteDiv = styled.div`
    margin-bottom:10px;
    border-radius:10px;
    padding:1rem;
    min-height:170px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    white-space:pre-wrap;
    textarea{
        border:none;
        outline:none;
        resize:none;
        background:transparent;
    }
`

export const NoteFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    .delete-icon{
        cursor:pointer;
        &:hover{
            color:#eee;
        }
    }
`