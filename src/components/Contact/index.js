import React from 'react';
import { Container, FormInput, FormLabel, FormWrap, FormH1, FormContent, Icon, FormButton, Form, TextInput } from './ContactElements'
import emailjs from 'emailjs-com';

const Contact = () => {
 

    function sendEmail(e) {
        e.preventDefault();
    
        const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
        const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to="/">GIAS</Icon>
                  <FormContent>
                      <Form onSubmit={sendEmail}>
                          <FormH1>Envianos tu consulta</FormH1>
                          <FormLabel htmlFor="for">Nombre</FormLabel>
                            <FormInput type="name" name="name" required />
                          <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" name="email" required />
                          <FormLabel htmlFor="for">Mensaje</FormLabel>
                            <TextInput type="text" name="message" required />
                            <FormButton type="submit">Enviar</FormButton>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}

export default Contact;
