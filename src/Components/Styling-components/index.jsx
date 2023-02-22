import './index.css';
import NavbarComp from './Navbar';
import JumbotronComp from './Jumbotron';
import ContentComp from './Content';
import ListComp from './List';
import TableComp from './Table';
import TableComp2 from './Table2';
import TableComp3 from './Table3';
import FormComp from './Form';
import FooterComp from './Footer';


function StylingComponents() {
  return (
    <div className="App">
      <NavbarComp />
      <JumbotronComp />
      <ContentComp />
      <ListComp />
      <TableComp />
      <TableComp2 />
      <TableComp3 />
      <FormComp />
      <FooterComp />
    </div>
  );
}

export default StylingComponents;