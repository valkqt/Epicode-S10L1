import Container from "react-bootstrap/Container";
import css from './css/Jumbotron.module.css'
import classNames from "classnames";

const Jumboweh = function () {
  return (
    <Container as="header" fluid className={"text-center bg-dark-subtle"} >
      <h1 className={classNames("py-5", css.jumboText)} >Briccolibrary</h1>
      <p className={classNames("pb-5", css.jumboText)}>
        Plofi è un XD unico ma il kek system è una pepata ed è pure dank!
        Plofi è un XD unico ma il kek system è una pepata ed è pure dank! 
        Plofi è un XD unico ma il kek system è una pepata ed è pure dank!  
      </p>
    </Container>
  );
};

export default Jumboweh;
