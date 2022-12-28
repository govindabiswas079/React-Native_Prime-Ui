import React from 'react';
import { Modal, ActivityIndicator, View } from 'react-native';

const Loader = () => (
    <>
        <Modal
            transparent={true}
            visible={true}
            style={{ backgroundColor: 'blue' }}
        >
            <View style={{ flex: 1, backgroundColor: '#2d33559e', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={'#c028f7'} />
            </View>
        </Modal>
    </>
);

export default Loader;
