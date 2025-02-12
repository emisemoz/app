import { View, Text } from 'react-native'
import React from 'react'
import { ProductSchema } from "./ProductSchema";
import Realm from "realm";

const realm = new Realm({
    schema: [ProductSchema]
});

export default realm;