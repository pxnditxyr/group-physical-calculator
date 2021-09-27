const getCircleArea = ( radio ) => Math.PI * Math.pow( radio, 2 );
const getCirclePerimeter = ( radio ) => 2 * Math.PI * radio;

const getInputFields = () => {
    return {
        circleRadio: document.querySelector( "#circle-radio" ).value,
    }
};

const checkEmptyInput = ( getterFunction ) => {
    const { circleRadio } = getInputFields();
    return ( circleRadio.length !== 0 ) ? getterFunction( parseFloat( circleRadio ) ) : "Please fill all fields";
}

const calculateCircleArea = () => {
    document.querySelector( "#result-circle-area" ).innerHTML = checkEmptyInput( getCircleArea );
};

const calculateCirclePerimeter = () => {
    document.querySelector( "#result-circle-perimeter" ).innerHTML = checkEmptyInput( getCirclePerimeter );
};
