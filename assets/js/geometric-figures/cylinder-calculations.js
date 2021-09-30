const getCylinderArea = ( radius, height ) => 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
const getCylinderPerimeter = ( radius, height ) => Math.PI * radius * radius * height;

const getInputFields = () => {
    return {
        cylinderRadius: document.querySelector( "#cylinder-radius" ).value,
        cylinderHeight: document.querySelector( "#cylinder-height" ).value,
    }
};

const checkEmptyInput = ( getterFunction ) => {
    const { cylinderRadius, cylinderHeight } = getInputFields();
    return ( cylinderRadius.length !== 0 && cylinderHeight.length !== 0 ) ? getterFunction( parseFloat( cylinderRadius ), parseFloat( cylinderHeight  ) ) : "Please fill all fields";
}

const calculateCylinderArea = () => {
    document.querySelector( "#result-cylinder-area" ).innerHTML = checkEmptyInput( getCylinderArea );
};

const calculateCylinderPerimeter = () => {
    document.querySelector( "#result-cylinder-perimeter" ).innerHTML = checkEmptyInput( getCylinderPerimeter );
};
