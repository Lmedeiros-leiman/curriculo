
import { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const FormularioContato = ({CSFRtoken}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const ResetInputs = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    return false
    //alert("Sua mensagem foi enviada para meu Email pessoal!");
    //alert("Ou... pelo menos ela teria sido... caso eu tivesse implementado esta função... opsie!");

    axios.post('/', {
        Nome: name,
        ModoContato: email,
        Mensagem: message
    }, {
        headers: {
            'X-CSRF-TOKEN': CSFRtoken
        }
    })
    .then(function (response) {
        alert("SUCESSO!!");
    })
    .catch(function (error) {
        alert("Fracasoo...")
        console.log(error)
    });

    // Send form data to the backend for processing
    // You can use fetch or an HTTP library like Axios here
    // Make sure to include the CSRF token in the request headers
    ResetInputs()
  };


  return (
    <div className="max-w-md mx-auto ">
      <h2 id='contato' className="text-4xl text-center font-semibold mb-4">Fale Comigo!</h2>
      <div className='flex sm:flex-row flex-col justify-evenly sm:space-x-8'>
            <div className='flex flex-col space-y-6'>
                <a  className=' bg-lime-600 hover:bg-lime-800 flex items-center gap-1 cursor-pointer p-5 text-xl rounded-full text-center delay-0 transition-colors'
                    href='https://wa.me/5551998877538' target='_blank'
                    title='+51 998877538'
                >Whatsapp <FontAwesomeIcon icon={faWhatsapp} /></a>
                <a className=' flex items-center gap-1 justify-center bg-blue-600 hover:bg-blue-800 cursor-pointer delay-0 transition-colors p-5 text-xl rounded-full text-center'
                    href='mailto:lmedeiros045@gmail.com' target='_blank'
                    title='lmedeiros045@gmail.com'
                > Email <FontAwesomeIcon icon={faEnvelope} /> </a>
            </div>

            <form target='/' method='post' onSubmit={handleSubmit}
                className=' relative pt-5 sm:pt-0 flex flex-col  '
            >
            <div className=' absolute w-full h-full bg-slate-900 bg-opacity-90 flex justify-center items-center'>Em desenvolvimento...</div>
                <input type="hidden" name="_token" value={CSFRtoken} />
                <div className="mb-4">
                <label htmlFor="name">Seu nome de contato</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border text-black border-gray-300 rounded"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email">Como poderei entrar em contato?</label>
                <input
                    type="text"
                    id="contato_resposta"
                    name="contato_resposta"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border text-black border-gray-300 rounded"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="message">Sua mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="4"
                    className="w-full p-2 border text-black border-gray-300 rounded"
                />
                </div>
                <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 self-end transition-colors delay-0"
                >
                Enviar
                </button>
            </form>


      </div>
    </div>
  );
}
export default FormularioContato
