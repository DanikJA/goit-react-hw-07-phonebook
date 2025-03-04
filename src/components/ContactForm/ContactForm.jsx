import { Formik, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/asyncFunctions';
import {
  StyledForm,
  Label,
  Input,
  SubmitButton,
  ErrorText,
} from './ContactFormStyled.jsx';
import { selectContacts } from '../../redux/selectors.js';

import * as Yup from 'yup';

const numbersSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Please enter a valid number!')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addNumber = ({ name, number }) => {
    const contactWithSameName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const contactWithSameNumber = contacts.find(
      contact => contact.number === number
    );

    if (contactWithSameName && contactWithSameNumber) {
      Notiflix.Notify.failure(
        `Контакт з ім'ям ${name} та з номером ${number} вже існує!`
      );
    } else if (contactWithSameName) {
      Notiflix.Notify.failure(`Контакт з ім'ям ${name} вже існує!`);
    } else if (contactWithSameNumber) {
      Notiflix.Notify.failure(`Контакт з номером ${number} вже існує!`);
    } else {
      dispatch(addContact(name, number));
      Notiflix.Notify.success(`Контакт ${name} успішно додано!`);
    }
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={numbersSchema}
      onSubmit={(values, actions) => {
        addNumber(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <Field name="name" as={Input} />
          <ErrorMessage name="name" component={ErrorText} />
        </Label>
        <Label>
          Number
          <Field name="number" as={Input} />
          <ErrorMessage name="number" component={ErrorText} />
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </Formik>
  );
};
