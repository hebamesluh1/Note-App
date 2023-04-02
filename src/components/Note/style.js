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