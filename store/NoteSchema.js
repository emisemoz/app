import { View, Text } from 'react-native'
import React from 'react'

// export const NoteSchema = () => {
//     name: 'Note',
//     properties:{
//         id: 'int',
//         note: 'string',
//     },
//     primaryKey: 'id'

// };
import Realm from 'realm';
export const NoteSchema = {
    name: 'Note',
    properties: {
        id: 'int',
        note: 'string',
    },
    primaryKey: 'id',
};