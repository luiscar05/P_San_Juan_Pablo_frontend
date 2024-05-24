import React from "react";

function Sacramentos() {
    return(
        <>
        <link rel="stylesheet" href="src\assets\css\sacramentos.css" />
        <div className="BoxTitleSacraments">
            <h4 className="titleSacraments">
                <span><i></i>S</span>
                <span><i></i>a</span>
                <span><i></i>c</span>
                <span><i></i>r</span>
                <span><i></i>a</span>
                <span><i></i>m</span>
                <span><i></i>e</span>
                <span><i></i>n</span>
                <span><i></i>t</span>
                <span><i></i>o</span>
                <span><i></i>s</span>
            </h4>
        </div>
        <div className="SacramentsMain">
            

            <div className="Bautismo">
                <i style={{ '--clr': '#c61313' }}></i>
                <i style={{ '--clr': '#ffffff' }}></i>
                <i style={{ '--clr': '#ffbb00' }}></i>

                <figure>
                    <img src="public\Bautismo.jpg" alt="" srcset="" className="ImgBautismo" />
                    <div className="capa">
                        <h3 className="titleSacraments">Bautismo</h3>
                    </div>
                </figure>
                
            </div>

            <div className="Matrimonio">
                <i style={{ '--clr': '#c61313' }}></i>
                <i style={{ '--clr': '#ffffff' }}></i>
                <i style={{ '--clr': '#ffbb00' }}></i>
               <figure>
               <img src="public\Matrimonio.jpg" alt="" srcset="" className="ImgMatrimonio" />
                    <div className="capa">
                        <h3 className="titleSacraments">Matrimonio</h3>
                    </div>
               </figure>
            </div>
            

            

            {/* <div className="Bautismo"></div>
            <div className="Matrimonio"></div> */}
        </div>
        </>
    )
}

export default Sacramentos