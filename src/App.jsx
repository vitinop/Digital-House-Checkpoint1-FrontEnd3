import Sidebar from "./componets/Sidebar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import profileIMG from "./componets/images/profileIMG.png";
import Footer from "./componets/footer";

function App() {
  const valoresIniciais = { name: "", email: "", subject: "", messager: "" };

  const [formValues, setFormValues] = useState(valoresIniciais);

  const getChange = (event, key) => {
    const { value } = event.currentTarget;
    setFormValues({ ...formValues, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("new", formValues);
  };

  return (
    <div className="body-main">
      <Sidebar />
      {/* <!-- Sessão Principal --> */}
      <div className="wcSection">
        <main className="welcomeSection">
          <div>
            <h1 className="title">Olá, sou Victor luz</h1>
            <h3 className="subtitle">
              Sou desenvolvedor Jr web Full-stack
            </h3>
            <p className="subtitle">
              Seja bem vindo ao meu currículo on-line.
            </p>

            <nav className="socialSection">
              <a className="socialIcon" href="https://github.com/vitinop">
                <GitHubIcon />Github</a>
              <a
                className="socialIcon"
                href="https://www.linkedin.com/in/dev-victor-luz/"
              >
                <LinkedInIcon />Linkedin</a>
            </nav>

           
          </div>

          <div className="backgroundContainer">
            <div className="img_bg ">
              <img src={profileIMG} />
            </div>
            
          </div>
        </main>
      </div>

      {/* <!-- Sessão Sobre mim --> */}
      <div className="l-page" id="sobre-mim">
      <article className="aboutText">
              <h1 className="title" id="sobre-mim">
                Sobre mim
              </h1>
              <p>
                Tenho 26 anos, atualmente estudando análise e desenvolvimento de
                sistemas pela Universidade Estácio e desenvolvimento Full-Stack
                com especialização Front-End pela Digital House.
              </p>
              <p>
                Meu objetivo profissional é me especializar e aprimorar minhas
                habilidades de desenvolvimento Front-end e ferramentas de testes
                unitários, focando sempre em qualidade e acessibilidade da
                aplicação
              </p>
            </article>
      </div>

      {/* <!-- Sessão Skills--> */}
      <div className="l-page" id="skills">
        <article className="skills">
          <h1 className="title">Tecnologias</h1>
          <div className="iconsTecnologias">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
          </div>
        </article>
      </div>

      {/* <!-- Sessão Portifólio--> */}
      <div className="l-page" id="portifolio">
        <article className="portifolio">
          <h1 className="title">Portifólio</h1>

          <div className="containerCards">
            <div className="cardInd">
              <img
                src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <figcaption>Título</figcaption>
            </div>

            <div className="cardInd">
              <img
                src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <figcaption>Título</figcaption>
            </div>
          </div>
        </article>
      </div>

      {/* <!-- Sessão Contatos--> */}
      <div className="l-page" id="contatos">
        <section>
          <h1 className="title">Posso te ajudar?</h1>

          <nav className="contactIcons">
            <a className="socialIcon" href="https://github.com/vitinop">
              <GitHubIcon /> Github
            </a>
            <a
              className="socialIcon"
              href="https://www.linkedin.com/in/dev-victor-luz/"
            >
              <LinkedInIcon />
              Linkedin
            </a>
            <a className="socialIcon" href="tel:+5531985748416">
              Telefone
            </a>
          </nav>

          <form name="contact" className="c-form">
            <div className="c-form__group">
              <label htmlFor="name" 
              className="c-form__label"
              
              >
                Nome
              </label>
              <input
                required 
                type="text"
                placeholder="Digite seu nome"
                id="name"
                className="c-form__control"
                value={formValues.name}
                onChange={(event) => getChange(event, "name")}
              />
            </div>
            <div className="c-form__group">
              <label htmlFor="email" className="c-form__label">
                E-mail
              </label>
              <input
                required 
                type="text"
                placeholder="Digite seu e-mail"
                id="email"
                className="c-form__control"
                value={formValues.email}
                onChange={(event) => getChange(event, "email")}
              />
            </div>
            <div className="c-form__group">
              <label htmlFor="subject" className="c-form__label">
                Assunto
              </label>
              <select
                required 
                id="subject"
                className="c-form__control"
                value={formValues.subject}
                onChange={(event) => getChange(event, "subject")}
              >
                <option value="">Qual o assunto?</option>
                <option value="orcamento">Orçamento</option>
                <option value="oportunidade">Oportunidade</option>
                <option value="parceria">Parcerias</option>
              </select>
            </div>
            <div className="c-form__group">
              <label htmlFor="messager" className="c-form__label">
                Mensagem
              </label>
              <textarea
                required 
                rows="5"
                placeholder="Se desejar, explique-me melhor..."
                id="messager"
                className="c-form__control"
                value={formValues.messager}
                onChange={(event) => getChange(event, "messager")}
              />
            </div>
            <div className="c-form__group">
              <button className="c-btn" type="submit" onClick={submit}>
                <SendIcon />
                Enviar
              </button>
            </div>
          </form>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
