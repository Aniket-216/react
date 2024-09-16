// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/aniketshinde216/"
        target="_blank"
        title="Aniket Shinde's Linkedin Profile"
      >
        Aniket Shinde
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/chetannada/Namaste-React"
        target="_blank"
        title="Food Fire Github Repository"
      >
        <strong>
          Food<span>Fire</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;