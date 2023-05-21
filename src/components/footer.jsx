function Footer() {
    return <footer className="page-footer orange lighten-3">
      <div className="footer-copyright">
        <div className="container brown-text darken-4">
          {new Date().getFullYear()}
          aesthenika
          <a className="brown-text darken-4 right" href="#!">Repository</a>
        </div>
      </div>
    </footer>

}

export { Footer };