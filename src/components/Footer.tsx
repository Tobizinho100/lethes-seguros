const Footer: React.FC = () => {
    return (
      <div className="text-center mt-8 p-4">
        <h3 className="text-2xl font-semibold mb-4">Faça um orçamento hoje!</h3>
        <p className="text-lg mb-4">
          Entre em contato conosco para personalizar o seu seguro e obter um orçamento imediato.
        </p>
        <a
          href="mailto:contato@lethesseguros.com"
          className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg"
        >
          Solicitar Orçamento
        </a>
      </div>
    );
  };
  
  export default Footer;
  