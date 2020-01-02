import React, { useState } from 'react'
import { useArrowNavigation } from "react-arrow-navigation";
// import { connect } from 'react-redux'
// import { updateCoords } from './redux/action';
const Tiles = ({ x, y }) => {
    const { selected, select } = useArrowNavigation(x, y);
    const [coordinates, setCoordinates] = useState({})
    return (
        <div
            className={selected ? "selected" : ""}

            onClick={() => {
                // Click handler logic goes here
                setCoordinates(() => ({
                    x: x + 1,
                    y: y + 1
                }))

                select(); // Then call the `select` callback
            }}
        >

            {`[ ${x + 1},${y + 1}]`}
            {selected ? console.log(coordinates) : ""}

        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         coords: state.coords
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         updateCoords: (
//             coordinates
//         ) => dispatch(updateCoords(coordinates))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Tiles)
export default Tiles