import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Setting from '../assets/setting.svg'
import { screenWidth } from '../Utils/AppDimensions'
import colors from '../utils/Color'

const SettingButton = (props) => {
    return (
        <TouchableOpacity style={[styles.container, { ...props }]}>
            <Setting height="100%" />
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
export default SettingButton