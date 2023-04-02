import styled from 'styled-components';
import { NoteDiv } from '../Note/style';

export const AddNotes = styled(NoteDiv)`
    background:#67d7cc;
    textarea{
        border:none;
        outline:none;
        resize:none;
        background:#67d7cc;
    }

`
export const SaveBtn = styled.button`
    background:#e1e1e1;
    border:none;
    border-radius:15px;
    padding:5px 10px ;
    &:hover{
    background:#eee;
    cursor:pointer;
    }
`