import React, { useState } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native';
import { httpGet } from './utilities/fetchy';


export const TestDb = () => {
    const [result, setResult] = useState<any>(undefined)

    const handlePingServer = async () => {
        const url = 'http://localhost:5656/api/try-connect'
        const result = await httpGet(url)
        console.log(result)
        // setResult(result)
    }

    return (
        <View>
            <Text>
                Ping Result {result ? result : 'none'}
            </Text>
            <Button title="Ping"
                onPress={handlePingServer}
            />

        </View>
    )
}