import React, { useState } from "react";
import "./intro.css";
import Paragraf from './state';
import ClassComponent from './ClassState';
import Footer from './Props';
import MyButton from './buttonAlert';


function Intro() {

  const [getParagrafValue, setParagrafValue] = useState(``);
  const changeParagrafValue = () => {
    setParagrafValue(`Parafraf berhasil diubah`);
  };

  // Props
  const propsParagraf = () => {
    return (
      <div>
        <h3>Props berhasil digunakan</h3>
        <h3><i>Mantaaappp</i></h3>
        <h3 className="marquee">React js Muhammad Yogi</h3>
      </div>
    );
  };

  const clicked = () => {
    return alert(`Button berhasil`);
  };

  return (
    <div className="intro">
      <Paragraf parValue={getParagrafValue} />
      <button onClick={() => changeParagrafValue()}>Ubah Paragraf</button>
      <ClassComponent />
    
      <Footer propsParagraf={propsParagraf} />
      <MyButton clicked={clicked} />
    </div>
  );
};

export default Intro;