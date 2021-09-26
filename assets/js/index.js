const displayResponsiveNavbar = () => {
    const navbar = document.querySelector( "nav" );
    ( navbar.className === "" ) ? navbar.className = "responsive" : navbar.className = "";
}
