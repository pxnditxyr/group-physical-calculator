const getRectangleArea = ( breadth, height ) => breadth * height;
const getRectanglePerimeter = ( breadth, height ) => ( 2 * breadth ) + ( 2 * height );

const getInputFields = () => {
    return {
        rectangleBreadth: document.querySelector( "#rectangle-breadth" ).value,
        rectangleHeight: document.querySelector( "#rectangle-height" ).value,
    }
};

const checkEmptyInput = ( getterFunction ) => {
    const { rectangleBreadth, rectangleHeight } = getInputFields();
    return ( rectangleBreadth.length !== 0 && rectangleHeight.length !== 0 ) ? getterFunction( parseFloat( rectangleBreadth ), parseFloat( rectangleHeight  ) ) : "Please fill all fields";
}

const calculateRectangleArea = () => {
    document.querySelector( "#result-rectangle-area" ).innerHTML = checkEmptyInput( getRectangleArea );
};

const calculateRectanglePerimeter = () => {
    document.querySelector( "#result-rectangle-perimeter" ).innerHTML = checkEmptyInput( getRectanglePerimeter );
};
