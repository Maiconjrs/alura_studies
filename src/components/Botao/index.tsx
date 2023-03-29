import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{children: React.ReactNode}> {
  render() {
    // const isActive = false;
    // const styles = {
    //   backgroundColor: isActive ? "green" : "red",
    // };
    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Botao;
