function Bouton({className,children,onChange}) {
    return ( 
        <button className={className} onChange={onChange} >{children}</button>
     );
}

export default Bouton;