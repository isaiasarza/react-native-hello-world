import React, {useEffect, useState} from 'react'

import SvgUri from 'react-native-svg-uri';

const AppLocalImage = (props) => {
    return (
        <SvgUri
        style={props.style}
        //source={{uri:'../../assets/icons/color/btc.svg'}}
        source={props.img} 
        />
    )
}

export default AppLocalImage