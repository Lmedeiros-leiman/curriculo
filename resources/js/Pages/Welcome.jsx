// import the funcoes


// import de componentes
import FormularioContato from "@/Pages/Welcome/FormularioContato";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// import de documentos
import FotoPessoal from "@/Pages/Welcome/imagens e logos/fotopessoal.jpeg"
import Projetos from "./Welcome/projetos";
import SobreMim from "./Welcome/sobremim";
const CurriculoPessoal = "#"

export default function Welcome({ CSFRtoken }) {

    return (
        <>


            <div className="relative flex flex-col text-white sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-green-500 selection:text-white">


                <div className="w-full max-w-6xl mb-auto sm-auto flex flex-col items-center justify-center sm:justify-between sm:pt-8 md:flex-row-reverse">

                    <div className="md:ml-4 md:mr-4 bg-white max-w-fit bg-opacity-30 rounded-2xl p-5 md:p-8 mb-4 md:mb-0 ">

                        <div className="flex flex-col ">
                            <h1 className="text-center text-6xl text-yellow-400">
                                Olá! <span className="text-white">Eu sou Leonardo.</span>
                            </h1>
                            <h3>Sou um desenvolvedor full-stack.</h3>
                            <h3 className="text-lg text-gray-400">
                                Eu resolvo problemas de Software e as vezes de Hardware.
                            </h3>
                            <a href={CurriculoPessoal}
                                className="bg-yellow-300 hover:bg-yellow-500 transition-colors delay-0 mt-5 text-blue-800 p-4 text-lg self-end rounded-full"
                            >Baixe meu curriculo <FontAwesomeIcon icon={faDownload} /> </a>
                        </div>

                    </div>

                    <picture className="md:ml-4 md:mt-5 animate-float border-2 border-yellow-400 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                            src={FotoPessoal}
                            className=" object-center object-cover"
                            height="612px"
                            width="408px"
                            style={{ maxHeight: '612px', maxWidth: '408px', borderRadius:"inherith" }}
                            alt="Foto Pessoal"
                        />
                    </picture>

                </div>

                <div className="w-full py-12 ">
                    <div className="max-w-5xl mx-auto px-6 rounded-xl bg-opacity-50 border-white border-2 border-opacity-50 bg-gray-900 shadow-md shadow-black">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl my-2 py-2 font-semibold text-white">
                                Estou atuando como autônomo!
                            </h2>
                        </div>
                        <ul className="mb-4 space-y-2 list-disc list-inside text-gray-300 ">
                            <li>Desenvolvimento e renovação de sites</li>
                            <li>Templates de Email</li>
                            <li>Manutenção de código</li>
                            <li>Assistência de Desenvolvimento</li>
                        </ul>
                        <div className="text-center p-8">
                            <a href="#contato"
                                className="text-blue-800 p-6 bg-yellow-400 hover:bg-yellow-600 transition-colors delay-0 rounded-full ">
                                Entre em contato! <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </div>
                    </div>
                </div>

                <Projetos/>
                <SobreMim/>
                <FormularioContato CSFRtoken={CSFRtoken}/>



                <div className="max-w-7xl mx-auto p-6 lg:p-8">

                    <div className=' text-white mt-5 self-end'>
                        <a target='_blank' href="https://www.flaticon.com/br/icones-gratis/interface" title="interface ícones"></a>
                    </div>

                </div>

            </div>

            <style>{`
                html{
                    scroll-behavior:smooth;
                }
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(0, -5px) translateX(2px);
                    }
                }

                .animate-float {
                    animation: float 26s infinite;
                }

            `}</style>
        </>
    );
}
