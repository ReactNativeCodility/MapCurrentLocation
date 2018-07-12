import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1
    },
    headerView: {
        height: '20%',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 30,
        color: '#117864',
        textAlign: 'center',
        marginTop: 10
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        marginTop: '20%',
        borderWidth: 1,
        borderColor: '#117864',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    buttonStyle: {
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#117864',
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});