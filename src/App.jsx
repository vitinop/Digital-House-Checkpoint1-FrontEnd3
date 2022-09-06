import Sidebar from "./componets/Sidebar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <>
      <div className="l-app">
        <Sidebar />

        {/* 2. O usuário poderá usar o teclado para abrir ou fechar
        a sidebar. No caso, as tecla Space. */}

        {/* 3. O usuário poderá usar o mouse para abrir ou fechar
        a sidebar. No caso, um duplo click em qualquer local
        do site irá abrir ou fechar a sidebar. */}

        <div className="l-content">
          {/* <!-- Sessão Principal --> */}
          <div className="l-page bg__profile">
            <main>
              <h1 className="title">Olá, me chamo fulano</h1>
              <p className="description">
                Seja bem vindo ao meu currículo on-line.
              </p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="https://github.com/vitinop">
                  <GitHubIcon /> Github
                </a>
                <a
                  className="c-nav__item"
                  href="https://www.linkedin.com/in/dev-victor-luz/"
                >
                  <LinkedInIcon />
                  Linkedin
                </a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">
                <ExpandMoreIcon /> Sobre mim
              </a>
            </main>
          </div>

          {/* <!-- Sessão Sobre mim --> */}
          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">Sobre mim</h1>
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

          {/* <!-- Sessão Contatos--> */}
          <div className="l-page" id="contatos">
            <section>
              <h1 className="title">Posso te ajudar?</h1>

              <nav className="c-nav">
                <a className="c-nav__item" href="https://github.com/vitinop">
                  <GitHubIcon /> Github
                </a>
                <a
                  className="c-nav__item"
                  href="https://www.linkedin.com/in/dev-victor-luz/"
                >
                  <LinkedInIcon />
                  Linkedin
                </a>
                <a className="c-nav__item" href="tel:+5521972190000">
                  Telefone
                </a>
              </nav>

              <form name="contact" className="c-form">
                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    id="name"
                    className="c-form__control"
                  />
                </div>
                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    id="email"
                    className="c-form__control"
                  />
                </div>
                <div className="c-form__group">
                  <label htmlFor="subject" className="c-form__label">
                    Assunto
                  </label>
                  <select id="subject" className="c-form__control">
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
                    rows="5"
                    placeholder="Se desejar, explique-me melhor..."
                    id="messager"
                    className="c-form__control"
                  ></textarea>
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit">
                    <SendIcon/>Enviar
                  </button>
                </div>
              </form>
            </section>

            <footer className="u-my-3">
              <span>Todos os direitos reservados fulano.</span>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
