import NavbarComp from '../Styling-components/Navbar';
import './index.css';
import JumbotronComp from './../Styling-components/Jumbotron';
import ContentComp from './../Styling-components/Content';
import ListComp from './../Styling-components/List';
import TableComp from './../Styling-components/Table';
import TableComp2 from './../Styling-components/Table2';
import TableComp3 from './../Styling-components/Table3';
import Validasi from './Validation';
import FooterComp from './../Styling-components/Footer';


function FormValidation() {
  return (
    <div className="App">
      <NavbarComp />
      <JumbotronComp />
      <ContentComp />
      <ListComp />
      <TableComp />
      <TableComp2 />
      <TableComp3 />
      <Validasi />
      <FooterComp />
    </div>
  );
}

export default FormValidation;