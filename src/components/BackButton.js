import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Back from '../assets/images/arrow-back.svg'
import { screenWidth } from '../utils/AppDimensions'
import colors from '../utils/Color'

const BackButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.container}>
            <Back height="100%" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth / 8,
        height: screenWidth / 8,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3F2A56'
    }
})
export default BackButton