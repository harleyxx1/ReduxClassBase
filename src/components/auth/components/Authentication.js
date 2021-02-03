import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

const Authentication = () => {
    return (
        <View>
            <Text>Auth</Text>
        </View>
    )
}

export default connect()(Authentication)
