import React from 'react'

const Contanier = ({ children , justify_between ="" , flex = ""  }) => {
    console.log(justify_between)
    return (
        <div className={`w-[1440px] ${flex} ${justify_between} mx-auto`}>
            {children}
        </div>
    )
}

export default Contanier
