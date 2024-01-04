import Image from "next/image"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export function Nav () {
    return (
        <div className="flex sticky top-0 sm:text-lg items-center justify-center bg-orange-800 mx-auto opacity-90 border-b-2 border-orange-900"  >
            <a href="#inicio" className="sm:p-3 p-1.5 hover:bg-orange-600">Inicio</a>
            <a href="#produtos" className="sm:p-3 p-1.5 hover:bg-orange-600">Produtos</a>
            <a href="#sobre" className="sm:p-3 p-1.5 hover:bg-orange-600">Sobre</a>
            <a href="#contatos" className="sm:p-3 p-1.5 hover:bg-orange-600">Contato</a>
            <a href="#localizacao" className="sm:p-3 p-1.5 hover:bg-orange-600">Localização</a>
        </div>
    )
}

interface SingleProductProps {
    name: string;
    price: string;
}

function SingleProduts({ name, price }: SingleProductProps) {
    return (
        <div className=" md:flex justify-center" id="Produtos">
            <div className="flex flex-col items-center bg-orange-700 m-3 md:my-2 rounded-lg shadow-md shadow-orange-950">
                <Image className="rounded-lg m-1 mt-3 md:mt-1"
                    src='/banha.jpg'
                    width={300}
                    height={200}
                    alt="Foto do torresmo"
                />
                <p className="text-center m-5 text-4xl">{name}</p>
                <p className="p-2 text-3xl">{price}</p>
                <button className="bg-orange-600 hover:bg-orange-800 p-3 m-3 rounded-3xl text-2xl shadow-md shadow-orange-950" >Comprar</button>
            </div>
        </div>
    )
}

export function Products() {
    return (
        <>
            <div className=" flex items-center justify-center w-full bg-orange-700 text-center text-4xl my-4 py-4 shadow-md shadow-orange-950" id="produtos">
                <p className="text-5xl  ">
                    Nossos Produtos
                </p>
            </div>
            <div className=" md:flex justify-center" >
                <SingleProduts name="Banha suina" price="R$ 29,99"/>
                <SingleProduts name="Torresmo" price="R$ 39,99"/>
                <SingleProduts name="Mandioca" price="R$ 5,99"/>
            </div>
        </>
    )
}

export function Banner() {
    return (
        <>
            <div className="flex flex-col justify-evenly bg-orange-800 h-screen w-full text-center  text-4xl shadow-md shadow-orange-950" id="inicio">
                
                <div>
                    <h1 className=""> 
                        <span className="text-orange-500"> Torresmo Pinheiro</span> Sabor e Qualidade</h1>
                </div>
                <div className="flex items-center justify-center">
                        <Image className=" rounded-lg"
                            src="/torresmo.jpg"
                            width="500"
                            height="400"
                            alt="torresmo"
                        />
                </div>
                <div className="">
                        <h1 className="">
                            Escolha o melhor para você e para sua familia.
                        </h1>
                </div>
                
            </div>
        </>
    )
}

export function About() {
    return (
        <div className="w-full items-center bg-orange-900" id="sobre">
            <div className="w-full items-center bg-orange-900">
                <div className="flex flex-col items-center bg-orange-700 mx-2 md:my-2 rounded-lg shadow-md shadow-orange-950">
                    <p className="m-2 sm:text-justify text-center md:text-4xl text-3xl">Bem-vindo à Torresmo Pinheiro</p>
                        <p className="m-2 sm:text-justify text-center md:text-3xl text-2xl">
                        sua porta de entrada para a autenticidade e tradição culinária! Somos uma empresa dedicada à produção artesanal de torresmo e banha de porco, proporcionando aos nossos clientes uma experiência gastronômica única.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-orange-700 m-2 md:my-2 rounded-lg shadow-md shadow-orange-950">
                    <p className="m-2 sm:text-justify text-center md:text-4xl text-3xl rounded-lg">Compromisso com a Qualidade:</p>

                    <p className="m-2 sm:text-justify text-center md:text-3xl text-2xl rounded-lg">
                        A qualidade é a nossa prioridade. Trabalhamos em parceria com produtores locais que compartilham nosso compromisso com a criação responsável e sustentável de suínos. Cada pedaço de torresmo é cuidadosamente preparado para oferecer uma textura crocante e um sabor inigualável, enquanto nossa banha é extraída e refinada para garantir pureza e frescor.
                    </p>
            </div>
        </div>
    )
}

export function Contacts() {
    return (
        <div className="" id="contatos">
            <div className=" bg-orange-700 m-2 rounded-lg shadow-md shadow-orange-950">
                <h1 className="text-4xl text-center p-2 ">Entre em contato conosco</h1>
                <div className="flex flex-row items-center justify-center p-5">
                    <a href="" className="m-5 text-7xl text-blue-400 hover:text-blue-700">
                        <FaFacebook/>
                    </a>
                    <a href="" className="m-5 text-7xl text-pink-400 hover:text-purple-900">
                        <FaInstagram/>
                    </a>
                    <a href="" className="m-5 text-7xl text-green-400 hover:text-green-800">
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export function Location() {
    return (
        <div className="" id="localizacao">
            <div className=" bg-orange-700 m-2 rounded-lg ">
                <h1 className="text-5xl text-center p-2">Faça uma visita</h1>
                <div className=" bg-orange-700 m-2 rounded-lg text-center p-4">
                    <button className="bg-orange-600 hover:bg-orange-800 p-3 m-3 rounded-3xl text-2xl shadow-md shadow-orange-950" >
                        <a href="https://maps.app.goo.gl/jB7NutmKW3wAPcDB6" target="_blank">Nossa localização</a>
                    </button>
                </div>
            </div>    
        </div>
    )
}