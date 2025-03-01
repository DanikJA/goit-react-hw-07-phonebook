import {
  DivWrapper,
  DeleteButton,
  ContactItem as StyledContactItem,
} from './ContactStyled';
import { deleteContact } from '../../redux/contactSlice.js';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <DivWrapper>
      <StyledContactItem>
        {name}: {number}
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
      </StyledContactItem>
    </DivWrapper>
  );
};
