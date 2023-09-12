import GithubIcon from "@/Components/GithubIcon"
import YoutubeIcon from "@/Components/YoutubeIcon"
import LivePreviewIcon from "@/Components/LivePreviewIcon"


import ImagemSiteNoticias from "@/Pages/Welcome/imagens e logos/sitedenoticias.png"
import ImagemSiteSuperChat from "@/Pages/Welcome/imagens e logos/superchatpessoal.png"
import ImagemPropagandaEmail from "@/Pages/Welcome/imagens e logos/PropagandaEmail.png"
import ImagemEletricista from "@/Pages/Welcome/imagens e logos/siteeletricista.png"
import ImagemVeterinario from "@/Pages/Welcome/imagens e logos/siteveterinario.png"
import ImagemSiteHorario from "@/Pages/Welcome/imagens e logos/siteRelogio.png"

function ItemProjeto({TituloProjeto = '', LinkGithub = '', LinkYoutube = '', LinkVisualizacao = '', ImagemInicial = '#' }) {

    return (

        <div className="group relative">
            <picture className="" style={{ maxWidth:'500px', maxHeight:'500px'}}>
                <img src={ImagemInicial} className=" object-fill"    />
            </picture>
            <div className=" absolute inset-0 bg-yellow-300 bg-opacity-60 text-blue-600 text-center flex justify-center items-center opacity-0 group-hover:opacity-100 delay-100 transition-opacity">
                <div className="flex flex-col">
                    <h4 className=" text-xl">{TituloProjeto}</h4>
                    <li className="flex space-x-3 justify-center">
                        <ul className=" hover:bg-white bg-transparent transition-colors delay-0 rounded-full">{ LinkGithub ? <GithubIcon Link={LinkGithub} /> : <></>} </ul>
                        <ul className=" hover:bg-red-200 bg-transparent transition-colors delay-0 rounded-full">{ LinkYoutube ? <YoutubeIcon Link={LinkYoutube}/> : <></> } </ul>
                        <ul className=" hover:bg-white bg-transparent transition-colors delay-0 rounded-full" >{ LinkVisualizacao ? <LivePreviewIcon Link={LinkVisualizacao} /> : <></> } </ul>
                    </li>
                    <div></div>
                </div>
            </div>
    </div>)
}


export default function Projetos() {

    console.log(ImagemEletricista)
    const dados = [
        {
            TituloProjeto: 'Site de Noticias',
            LinkGithub: 'https://github.com/Lmedeiros-leiman/aplicativoNoticias',
            LinkYoutube: 'https://youtu.be/ZoOaHXuvhYs',
            LinkVisualizacao: 'https://lmedeiros-leiman.github.io/aplicativoNoticias/',
            ImagemInicial: ImagemSiteNoticias,

        },
        {
            TituloProjeto: 'Site para um eletricista amador',
            LinkGithub: 'https://github.com/Lmedeiros-leiman/Site_Eletricista-1/tree/main',
            LinkYoutube: '',
            LinkVisualizacao: 'https://lmedeiros-leiman.github.io/Site_Eletricista-1/',
            ImagemInicial: ImagemEletricista,

        },
        {
            TituloProjeto: 'Aplicação de chat Global',
            LinkGithub: 'https://github.com/Lmedeiros-leiman/SuperChat',
            LinkYoutube: '',
            LinkVisualizacao: 'https://lmedeiros-leiman.github.io/SuperChat/',
            ImagemInicial: ImagemSiteSuperChat,

        },
        {
            TituloProjeto: 'Template de propaganda por Email',
            LinkGithub: 'https://github.com/Lmedeiros-leiman/desafio_mandabem',
            LinkYoutube: '',
            LinkVisualizacao: 'https://lmedeiros-leiman.github.io/desafio_mandabem/',
            ImagemInicial: ImagemPropagandaEmail,

        },
        {
            TituloProjeto: 'Site de Horario',
            LinkGithub: 'https://github.com/Lmedeiros-leiman/Aplicao-de-relogio/tree/main',
            LinkYoutube: '',
            LinkVisualizacao: 'https://lmedeiros-leiman.github.io/Aplicao-de-relogio/',
            ImagemInicial: ImagemSiteHorario,

        },
        {
            TituloProjeto: 'Site para um veterinário',
            LinkGithub: 'https://github.com/Lmedeiros-leiman/Site_veterinario-1',
            LinkYoutube: '',
            LinkVisualizacao: 'https://lmedeiros-leiman.github.io/Site_veterinario-1/',
            ImagemInicial: ImagemVeterinario,

        },


    ]

    return(
    <div className="flex justify-center items-center flex-col">
        <div className=" text-2xl mb-6 py-6 bg-black rounded-full p-4 bg-opacity-20 shadow-sm shadow-gray-500">
        CONHEÇA ALGUNS DE <span className=" text-yellow-400">MEUS PROJETOS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { dados.map( (dado) => { return(
                <ItemProjeto
                TituloProjeto={dado.TituloProjeto}
                LinkGithub={dado.LinkGithub}
                LinkYoutube={dado.LinkYoutube}
                LinkVisualizacao={dado.LinkVisualizacao}
                ImagemInicial={dado.ImagemInicial}

                />)
                })}
        </div>

        <a
            href="#" target="_blank"
            className="p-5 mt-12 mb-6 bg-yellow-400 hover:bg-yellow-600 transition-colors delay-0 rounded-full"
            >Veja meu Github para a lista completa!
        </a>

    </div>)
}



