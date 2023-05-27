import bg1 from '../assets/background-1.png'
import bg2 from '../assets/background-2.png'

import Header from '@/Components/Header'

import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'


import {
  SiReact,
  SiSass,
  SiMongodb,
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiLinux,
  SiCss3,
  SiJavascript,
} from 'react-icons/si'

import gamehub from '../assets/Projetos/GameHub.png'
// import github from '../assets/Projetos/Github.png'
import CloneTwitter from '../assets/Projetos/CloneTwitter.png'
import CloneFacebook from '../assets/Projetos/CloneFacebook.png'
import Portfolio from '../assets/Projetos/Portfolio2.0.png'
import FuturosProjetos from '../assets/Projetos/FuturosProjetos.jpeg'

export default function Home() {
  
  return (
    <>

      <main>
        <section className="HomeImage" style={{ backgroundImage: `url(${bg1.src})`}} id='Home'>
          <div className='HomeContent'>
            <section>
              <h2> Hello, I´m</h2>
              <h1> Kaynan Wallen </h1>
              <p> Desenvolvedor Web, com foco em javascript tendo conhecimento em diversos frameworks como  ReactJs, Next, Angular e Styled Components </p>
              <div className='Buttons'>
                <button> About Me </button>
                <button> Projetos </button>
              </div>
            </section>

            <div className='row'> </div>
          </div>
        </section>

        <section className='AboutContent' id='About'>

          <div className='Sobre-Mim'>
            <section>
              <h2>Sobre Mim</h2>
            </section>

            <section>
              <p>Tenho 18 anos e sou um estudante de programação fascinado por computadores e códigos,
procuro por uma primeira oportunidade de estágio, buscando colocar em prática o que estudo
e obter experiência profissional</p>
            </section>
          </div>

          <div className='Skills'>
            <div className='row'> </div>
            <h2>Skills</h2>
            <section>

            <section className='Border'>
              <div className='Cards'>
                  <section>
                    <SiCss3 color='#FFDF9D'/>
                    <h3>CSS</h3>
                  </section>
                  <p>CSS é uma linguagem de estilo usada para controlar o visual e layout de elementos HTML</p>
              </div> 
              </section>

            <section className='Border'>
              <div className='Cards'>
                  <section>
                    <SiJavascript color='#FFDF9D'/>
                    <h3>JavaScript</h3>
                  </section>
                  <p>Linguagem programação web para interatividade e funcionalidade.</p>
              </div> 
              </section>

              <section className='Border'>
              <div className='Cards'>
                  <section>
                    <SiReact color='#FFDF9D'/>
                    <h3>ReactJs</h3>
                  </section>
                  <p>biblioteca JavaScript para criar interfaces de usuário interativas e reutilizáveis</p>
              </div> 
              </section>

              <section className='Border'>
                <div className='Cards'>
                  <section>
                    <SiNextdotjs color='#FFDF9D'/>
                    <h3>Nexx13</h3>
                  </section>
                  <p>Estrutura web JS para aplicativos React escaláveis e de alto desempenho</p>
                </div>
              </section>

              <section className='Border'>
                <div className='Cards'>
                  <section>
                    <SiStyledcomponents color='#FFDF9D'/>
                    <h3>Styled Component</h3>
                  </section>
                  <p>Estilização modular de componentes React com CSS-in-JS</p>
                </div>
              </section>

              <section className='Border'>
                <div className='Cards'>
                  <section>
                    <SiTailwindcss color='#FFDF9D'/>
                    <h3>TailwindCss</h3>
                  </section>
                  <p>framework CSS com classes utilitárias pré- definidas para estilização rápida e flexível</p>
                </div>
              </section>

              <section className='Border'>
                <div className='Cards'>
                  <section>
                    <SiSass color='#FFDF9D'/>
                    <h3>Sass</h3>
                  </section>
                  <p>Linguagem de estilo que aprimora o CSS com recursos avançados</p>
                </div>
              </section>

              <section className='Border'>
                <div className='Cards'>
                  <section>
                    <SiMongodb color='#FFDF9D'/>
                    <h3>MongoDB</h3>
                  </section>
                  <p>Banco de dados NoSQL orientado a documentos, escalável e flexível</p>
                </div>
              </section>

              <section className='Border'>
                <div className='Cards'>
                  <section>
                    <SiLinux color='#FFDF9D'/>
                    <h3>ReactJs</h3>
                  </section>
                  <p>Sistema operacional, baseado em Unix, amplamente utilizado em servidores</p>
                </div>
              </section>

            </section>
              </div>
        </section>

        <section className='Projetos' style={{ backgroundImage: `url(${bg2.src})`}} id='Projetos'>
          <div className='Projetos-Content'>
            <h2>Projetos</h2>
            <h3> Front-End </h3>
            <div className='Grade-Projetos'>

              <div className="CardsProjetos">
                <section className='ImagemProject' style={{ backgroundImage: `url(${gamehub.src})`}}>
                </section>
                <h4>GameHub</h4>
                <p>Projeto feito com a tematica de uma aplicação de jogos, utilizando styledcomponents e react.</p>
                <section className='Buttons'>
                  <a href="https://my-game-hub.vercel.app" target="_blank"> 
                  <button> Deploy </button>
                  </a>
                  <a href="https://github.com/KaynanWallen/MyGameHub" target="_blank">
                  <button> GitHub </button>
                  </a>
                </section> 
              </div>

              <div className="CardsProjetos">
                <section className='ImagemProject' style={{ backgroundImage: `url(${CloneTwitter.src})`}}>
                </section>
                <h4>GitHub Finder</h4>
                <p>Projeto feito com TS consumindo a api do github (Créditos: Matheus Battisti - Hora de Codar)</p>
                <section className='Buttons'>
                  <a href="https://git-hub-finder-omega.vercel.app" target="_blank"> 
                  <button> Deploy </button>
                  </a>
                  <a href="https://github.com/KaynanWallen/GitHubFinder" target="_blank">
                  <button> GitHub </button>
                  </a>
                </section> 
              </div>

              <div className="CardsProjetos">
                <section className='ImagemProject' style={{ backgroundImage: `url(${CloneTwitter.src})`}}>
                </section>
                <h4>Clone Twitter</h4>
                <p>Clone do Twitter feito para fixar conhecimento sobre TailwindCSS</p>
                <section className='Buttons'>
                  <a href="https://twitter-teal-two.vercel.app" target="_blank"> 
                  <button> Deploy </button>
                  </a>
                  <a href="https://github.com/KaynanWallen/TwitterClone" target="_blank">
                  <button> GitHub </button>
                  </a>
                </section> 
              </div>

              <div className="CardsProjetos">
                <section className='ImagemProject' style={{ backgroundImage: `url(${CloneFacebook.src})`}}>
                </section>
                <h4>Clone Facebook</h4>
                <p>Clone do Facebook feito para aprimorer meus conhecimentos sobre TailwindCSS</p>
                <section className='Buttons'>
                  <a href="https://facebook-tan-five.vercel.app" target="_blank"> 
                  <button> Deploy </button>
                  </a>
                  <a href="https://github.com/KaynanWallen/FacebookClone" target="_blank">
                  <button> GitHub </button>
                  </a>
                </section> 
              </div>

              <div className="CardsProjetos">
                <section className='ImagemProject' style={{ backgroundImage: `url(${Portfolio.src})`}}>
                </section>
                <h4>Portfolio 2.0</h4>
                <p>Meu antigo portfolio feito em ReactJs</p>
                <section className='Buttons'>
                  <a href="https://meu-portfolio-lake.vercel.app" target="_blank"> 
                  <button> Deploy </button>
                  </a>
                  <a href="https://github.com/KaynanWallen/Portifolio-2.0" target="_blank">
                  <button> GitHub </button>
                  </a>
                </section> 
              </div>

              <div className="CardsProjetos">
                <section className='ImagemProject' style={{ backgroundImage: `url(${FuturosProjetos.src})`}}>
                </section>
                <h4>Em Andamento</h4>
                <p>Volte daqui a alguns dias que concerteza terá novos projetos</p>
                <section className='Buttons'>
                  <a href="https://my-game-hub.vercel.app" target="_blank"> 
                  <button> Deploy </button>
                  </a>
                  <a href="https://github.com/KaynanWallen" target="_blank">
                  <button> GitHub </button>
                  </a>
                </section> 
              </div>

            </div>
          </div>
        </section>
      </main>


      <footer id='Contato'>
        <h2> Contato </h2>
        <section className='contatos'>
          <a>
            <AiOutlineLinkedin />
            <p>linkedin</p>
          </a>

          <a>
            <HiOutlineMail />
            <p>Wallenkaynan@gmail.com</p>
          </a>

          <a>
            <AiOutlineGithub />
            <p> GitHub </p>         
          </a>
        </section>
      </footer>

      <Header />
    </>
  )
}
