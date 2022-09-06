
import Sidebar from "./componets/Sidebar";

function App() {

  return (
    <>
      <div className="l-app">
        <Sidebar />
        

        {/* 1. Esta sessão deverá ser apresentada
        sempre que houver o click no botão MENU: */}
       

      
        
   

        {/* 1.1. Quando houver o click do usuário,
        a sidebar deverá ser apresentada. */}


      

       

    

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
              <p className="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="">Github</a>
                <a className="c-nav__item" href="">Linkedin</a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a>
            </main>
          </div>

          {/* <!-- Sessão Sobre mim --> */}
          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">Sobre mim</h1>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Per aumento de cachacis, eu reclamis.Casamentiss faiz malandris se pirulitá.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
              <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.</p>
              <p>Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Sapien in monti palavris qui num significa nadis i pareci latim.</p>
            </article>
          </div>

          {/* <!-- Sessão Contatos--> */}
          <div className="l-page" id="contatos">
            <section>
              <h1 className="title">Posso te ajudar?</h1>

              <nav className="c-nav">
                <a className="c-nav__item" href="">Github</a>
                <a className="c-nav__item" href="">Linkedin</a>
                <a className="c-nav__item" href="tel:+5521972190000">Telefone</a>
              </nav>

              <form
                name="contact"
                className="c-form"
              >
                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">Nome</label>
                  <input type="text" placeholder="Digite seu nome" id="name" className="c-form__control"/>
                </div>
                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" id="email" className="c-form__control"/>
                </div>
                <div className="c-form__group">
                  <label htmlFor="subject" className="c-form__label">Assunto</label>
                  <select id="subject" className="c-form__control">
                    <option value= "0">Qual o assunto?</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div className="c-form__group">
                  <label htmlFor="messager" className="c-form__label">Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit">Enviar</button>
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
  )
}

export default App
