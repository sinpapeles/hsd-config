const Footer = () => (
  <footer>
    <div className="flex justify-center px-5 my-5 space-x-2 text-sm">
      <span>
        Config generator for{'  '}
        <a
          href="https://github.com/handshake-org/hsd"
          className="text-blue-600 hover:underline"
        >
          hsd
        </a>
        .
      </span>
      <span>
        <a
          href="https://github.com/sinpapeles/hsd-config"
          className="text-blue-600 hover:underline"
        >
          Open source
        </a>
        .
      </span>
      <span>
        With❤️ &nbsp;by{' '}
        <a
          href="https://sinpapeles.xyz"
          className="text-blue-600 hover:underline"
        >
          Sinpapeles
        </a>
        .
      </span>
    </div>
  </footer>
);

export default Footer;
