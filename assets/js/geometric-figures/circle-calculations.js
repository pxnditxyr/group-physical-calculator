const getCircleArea = ( radio ) => Math.PI * Math.pow( radio, 2 );
const getCirclePerimeter = ( radio ) => 2 * Math.PI * radio;
const getOvalArea = ( radio1, radio2 ) => Math.PI * radio1 * radio2;
const getOvalPerimeter = ( radio1, radio2 ) => ( 2 * Math.PI * Math.sqrt( ( Math.pow( radio1, 2 ) + Math.pow( radio2, 2 ) ) / 2 ) )

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

const getInputFieldsOval = () => {
    return {
        ovalRadio1: document.querySelector( "#oval-radio-1" ).value,
        ovalRadio2: document.querySelector( "#oval-radio-2" ).value,
    }
};

const checkOvalEmptyInput = ( getterFunction ) => {
    const { ovalRadio1, ovalRadio2 } = getInputFieldsOval();
    return ( ovalRadio1.length !== 0 && ovalRadio2.length !== 0 ) ? getterFunction( parseFloat( ovalRadio1 ), parseFloat( ovalRadio2 ) ) : "Please fill all fields";
}

const calculateOvalArea = () => {
    document.querySelector( "#result-oval-area" ).innerHTML = checkOvalEmptyInput( getOvalArea );
};

const calculateOvalPerimeter = () => {
    document.querySelector( "#result-oval-perimeter" ).innerHTML = checkOvalEmptyInput( getOvalPerimeter );
};
