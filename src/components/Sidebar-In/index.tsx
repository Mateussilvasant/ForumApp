import React, { Fragment } from "react";
import { itemsFactory } from "../SidebarBase";
import { OpcaoSidebar } from "../ItemSidebar/types/OpcaoSidebar";
import {FaAngleDown, FaBookReader, FaComments} from 'react-icons/fa'
import "./index.css";



export const SidebarIn = (props: { posicao: number }) => {

    const itens = [
    {
      valor: "Meus tópicos",
      path: "",
      icone: <FaBookReader size={16} />,
    },
    {
      valor: "Meus Comentários",
      path: "",
      icone: <FaComments size={16} />,
    },
  ];

  return (
    <Fragment>
      <section className="welcome-profile">
          <div></div>
          <strong>Mateus Silva</strong>
          <FaAngleDown className="collapseUserMenu" color="#919191" size={16}/>
      </section>
      <ul>
        {itens.map((opcao: OpcaoSidebar, indice: number) =>
            itemsFactory(opcao, indice, props.posicao)
        )}
      </ul>
    </Fragment>
  );
};
