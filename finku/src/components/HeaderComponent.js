import * as React from 'react'
import {Appbar} from 'react-native-paper'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        fontFamily: 'BeVietnam-Regular',
        borderBottomWidth: 1,
        borderBottomColor: '#F3EFE9'
    }
})
const HeaderComponent = () => {
    const _goBack = () => console.log('Go back')
    return (
        <Appbar.Header style={styles.container}>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content titleStyle={{fontFamily: 'BeVietnam-Bold', fontSize: 16}} title="Tambah Akun Finansialmu" />
        </Appbar.Header>
    )
}


export default HeaderComponent
